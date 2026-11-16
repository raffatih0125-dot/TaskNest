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

function getTodayDate() {
  const today = new Date()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${today.getFullYear()}-${month}-${day}`
}

function TaskItem({ task, onStatusChange, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <article className="task-item task-item--editing">
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

  const isOverdue =
    task.status !== 'done' && task.due_date && task.due_date < getTodayDate()

  return (
    <article
      className={
        task.status === 'done' ? 'task-item task-item--done' : 'task-item'
      }
    >
      <header className="task-item__header">
        <h3>{task.title}</h3>
        <span className={`priority-badge priority-badge--${task.priority}`}>
          {priorityLabels[task.priority] || task.priority}
        </span>
      </header>
      <p className="task-item__description">
        {task.description || 'Tidak ada deskripsi.'}
      </p>
      <div className="task-item__details">
        <div className="task-item__status">
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
        </div>
        <p className="task-item__due-date">
          <span>Tenggat</span>
          {task.due_date ? (
            <time dateTime={task.due_date}>{formatDueDate(task.due_date)}</time>
          ) : (
            'Tidak ada tenggat'
          )}
        </p>
      </div>
      {isOverdue && (
        <p className="task-item__overdue">Tenggat terlewat</p>
      )}
      <div className="task-item__actions">
        <button type="button" onClick={() => setIsEditing(true)}>
          Ubah
        </button>
        <button type="button" onClick={handleDelete}>
          Hapus
        </button>
      </div>
    </article>
  )
}

export default TaskItem
