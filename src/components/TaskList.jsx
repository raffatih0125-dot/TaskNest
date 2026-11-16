import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient.js'
import TaskItem from './TaskItem.jsx'

function TaskList() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function loadTasks() {
      try {
        const { data, error: queryError } = await supabase
          .from('tasks')
          .select('id, title, description, status, priority, due_date, created_at')
          .order('created_at', { ascending: false })

        if (!isActive) return

        if (queryError) {
          setError(queryError.message)
          return
        }

        setTasks(data)
      } catch (loadError) {
        if (!isActive) return

        setError(
          loadError instanceof Error
            ? loadError.message
            : 'Terjadi kesalahan yang tidak diketahui.',
        )
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    loadTasks()

    return () => {
      isActive = false
    }
  }, [])

  if (isLoading) {
    return <p role="status">Memuat tugas...</p>
  }

  if (error) {
    return <p role="alert">Gagal memuat tugas: {error}</p>
  }

  if (tasks.length === 0) {
    return <p>Belum ada tugas</p>
  }

  return (
    <section aria-labelledby="task-list-heading">
      <h1 id="task-list-heading">Daftar Tugas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TaskList
