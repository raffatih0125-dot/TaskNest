import { useState } from 'react'

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      setError('Judul wajib diisi.')
      return
    }

    setError('')
    setIsSubmitting(true)

    try {
      await onSubmit({
        title: trimmedTitle,
        description: description.trim() || null,
        priority,
        due_date: dueDate || null,
      })
      setTitle('')
      setDescription('')
      setPriority('medium')
      setDueDate('')
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? `Gagal menambahkan tugas: ${submitError.message}`
          : 'Gagal menambahkan tugas. Silakan coba lagi.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section aria-labelledby="add-task-heading">
      <h2 id="add-task-heading">Tambah tugas</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">Judul</label>
        <input
          id="task-title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-required="true"
        />

        <label htmlFor="task-description">Deskripsi</label>
        <textarea
          id="task-description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="task-priority">Prioritas</label>
        <select
          id="task-priority"
          name="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="low">Rendah</option>
          <option value="medium">Sedang</option>
          <option value="high">Tinggi</option>
        </select>

        <label htmlFor="task-due-date">Tenggat</label>
        <input
          id="task-due-date"
          name="due_date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />

        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Menyimpan...' : 'Tambah tugas'}
        </button>
      </form>
    </section>
  )
}

export default TaskForm
