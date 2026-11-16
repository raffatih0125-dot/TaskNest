import { useState } from 'react'

function TaskForm({ task, onSubmit, onCancel }) {
  const isEditing = Boolean(task)
  const [title, setTitle] = useState(task?.title ?? '')
  const [description, setDescription] = useState(task?.description ?? '')
  const [priority, setPriority] = useState(task?.priority ?? 'medium')
  const [dueDate, setDueDate] = useState(task?.due_date ?? '')
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
      if (isEditing) {
        onCancel()
      } else {
        setTitle('')
        setDescription('')
        setPriority('medium')
        setDueDate('')
      }
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? `Gagal ${isEditing ? 'memperbarui' : 'menambahkan'} tugas: ${submitError.message}`
          : `Gagal ${isEditing ? 'memperbarui' : 'menambahkan'} tugas. Silakan coba lagi.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section aria-labelledby={isEditing ? 'edit-task-heading' : 'add-task-heading'}>
      <h2 id={isEditing ? 'edit-task-heading' : 'add-task-heading'}>
        {isEditing ? 'Ubah tugas' : 'Tambah tugas'}
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={isEditing ? `task-title-${task.id}` : 'task-title'}>
          Judul
        </label>
        <input
          id={isEditing ? `task-title-${task.id}` : 'task-title'}
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-required="true"
        />

        <label
          htmlFor={isEditing ? `task-description-${task.id}` : 'task-description'}
        >
          Deskripsi
        </label>
        <textarea
          id={isEditing ? `task-description-${task.id}` : 'task-description'}
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor={isEditing ? `task-priority-${task.id}` : 'task-priority'}>
          Prioritas
        </label>
        <select
          id={isEditing ? `task-priority-${task.id}` : 'task-priority'}
          name="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="low">Rendah</option>
          <option value="medium">Sedang</option>
          <option value="high">Tinggi</option>
        </select>

        <label htmlFor={isEditing ? `task-due-date-${task.id}` : 'task-due-date'}>
          Tenggat
        </label>
        <input
          id={isEditing ? `task-due-date-${task.id}` : 'task-due-date'}
          name="due_date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />

        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? 'Menyimpan...'
            : isEditing
              ? 'Simpan perubahan'
              : 'Tambah tugas'}
        </button>
        {isEditing && (
          <button type="button" onClick={onCancel} disabled={isSubmitting}>
            Batal
          </button>
        )}
      </form>
    </section>
  )
}

export default TaskForm
