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

function TaskItem({ task }) {
  return (
    <article>
      <h2>{task.title}</h2>
      <p>{task.description || 'Tidak ada deskripsi.'}</p>
      <p>Status: {statusLabels[task.status] || task.status}</p>
      <p>Prioritas: {priorityLabels[task.priority] || task.priority}</p>
      <p>Tenggat: {formatDueDate(task.due_date)}</p>
    </article>
  )
}

export default TaskItem
