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

  function getFieldId(field) {
    return `task-${field}${isEditing ? `-${task.id}` : ''}`
  }

  return (
    <section className="task-form" aria-labelledby={isEditing ? 'edit-task-heading' : 'add-task-heading'}>
      <h2 id={isEditing ? 'edit-task-heading' : 'add-task-heading'}>
        {isEditing ? 'Ubah tugas' : 'Tambah tugas'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field form-field--wide">
          <label htmlFor={getFieldId('title')}>Judul</label>
          <input
            id={getFieldId('title')}
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            aria-required="true"
          />
        </div>

        <div className="form-field form-field--wide">
          <label htmlFor={getFieldId('description')}>Deskripsi</label>
          <textarea
            id={getFieldId('description')}
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor={getFieldId('priority')}>Prioritas</label>
          <select
            id={getFieldId('priority')}
            name="priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="low">Rendah</option>
            <option value="medium">Sedang</option>
            <option value="high">Tinggi</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor={getFieldId('due-date')}>Tenggat</label>
          <input
            id={getFieldId('due-date')}
            name="due_date"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <div className="form-actions">
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
        </div>
      </form>
    </section>
  )
}

export default TaskForm
