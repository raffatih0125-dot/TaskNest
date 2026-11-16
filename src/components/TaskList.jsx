import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient.js'
import TaskForm from './TaskForm.jsx'
import TaskItem from './TaskItem.jsx'

async function fetchTasks() {
  const { data, error } = await supabase
    .from('tasks')
    .select('id, title, description, status, priority, due_date, created_at')
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)

  return data
}

function TaskList() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [actionError, setActionError] = useState('')

  async function loadTasks() {
    try {
      const data = await fetchTasks()
      setError('')
      setTasks(data)
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : 'Terjadi kesalahan yang tidak diketahui.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let isActive = true

    async function loadInitialTasks() {
      try {
        const data = await fetchTasks()
        if (isActive) setTasks(data)
      } catch (loadError) {
        if (isActive) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : 'Terjadi kesalahan yang tidak diketahui.',
          )
        }
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    loadInitialTasks()

    return () => {
      isActive = false
    }
  }, [])

  async function handleCreateTask(task) {
    const { error: insertError } = await supabase.from('tasks').insert(task)

    if (insertError) throw new Error(insertError.message)

    await loadTasks()
  }

  async function handleUpdateTask(id, updates) {
    const { error: updateError } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', id)

    if (updateError) throw new Error(updateError.message)

    await loadTasks()
  }

  async function handleStatusChange(id, status) {
    setActionError('')

    try {
      const { error: updateError } = await supabase
        .from('tasks')
        .update({ status })
        .eq('id', id)

      if (updateError) throw new Error(updateError.message)

      await loadTasks()
    } catch (updateError) {
      setActionError(
        `Gagal mengubah status: ${
          updateError instanceof Error
            ? updateError.message
            : 'Terjadi kesalahan yang tidak diketahui.'
        }`,
      )
    }
  }

  async function handleDeleteTask(id) {
    setActionError('')

    try {
      const { error: deleteError } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)

      if (deleteError) throw new Error(deleteError.message)

      await loadTasks()
    } catch (deleteError) {
      setActionError(
        `Gagal menghapus tugas: ${
          deleteError instanceof Error
            ? deleteError.message
            : 'Terjadi kesalahan yang tidak diketahui.'
        }`,
      )
    }
  }

  return (
    <>
      <TaskForm onSubmit={handleCreateTask} />
      {actionError && <p role="alert">{actionError}</p>}
      {isLoading ? (
        <p role="status">Memuat tugas...</p>
      ) : error ? (
        <p role="alert">Gagal memuat tugas: {error}</p>
      ) : tasks.length === 0 ? (
        <p>Belum ada tugas</p>
      ) : (
        <section aria-labelledby="task-list-heading">
          <h1 id="task-list-heading">Daftar Tugas</h1>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskItem
                  task={task}
                  onStatusChange={handleStatusChange}
                  onUpdate={handleUpdateTask}
                  onDelete={handleDeleteTask}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default TaskList
