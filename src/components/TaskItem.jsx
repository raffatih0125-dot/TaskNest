import { useState } from 'react'
import TaskForm from './TaskForm.jsx'

const statusLabels = {
  todo: 'Todo',
  in_progress: 'Dikerjakan',
  done: 'Selesai',
}

const priorityLabels = {
  low: 'Rendah',
  medium: 'Sedang',
  high: 'Tinggi',
}

function formatDueDate(dueDate) {
  if (!dueDate) return 'Tidak ada tenggat'

  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(
    new Date(`${dueDate}T00:00:00`),
  )
}

function TaskItem({ task, onStatusChange, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <article>
        <TaskForm
          task={task}
          onSubmit={(updates) => onUpdate(task.id, updates)}
          onCancel={() => setIsEditing(false)}
        />
      </article>
    )
  }

  function handleDelete() {
    if (window.confirm(`Hapus tugas "${task.title}"?`)) {
      onDelete(task.id)
    }
  }

  return (
    <article className={task.status === 'done' ? 'task-item task-item--done' : 'task-item'}>
      <h2>{task.title}</h2>
      <p>{task.description || 'Tidak ada deskripsi.'}</p>
      <label htmlFor={`task-status-${task.id}`}>Status</label>
      <select
        id={`task-status-${task.id}`}
        value={task.status}
        onChange={(event) => onStatusChange(task.id, event.target.value)}
      >
        {Object.entries(statusLabels).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <p>Prioritas: {priorityLabels[task.priority] || task.priority}</p>
      <p>Tenggat: {formatDueDate(task.due_date)}</p>
      <button type="button" onClick={() => setIsEditing(true)}>
        Ubah
      </button>
      <button type="button" onClick={handleDelete}>
        Hapus
      </button>
    </article>
  )
}

export default TaskItem
