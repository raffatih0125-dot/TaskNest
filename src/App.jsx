import TaskList from './components/TaskList.jsx'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="app-logo" aria-hidden="true">
          TN
        </div>
        <div>
          <p className="app-header__tagline">Atur pekerjaan, jaga fokus.</p>
          <h1>TaskNest</h1>
        </div>
      </header>
      <TaskList />
    </main>
  )
}

export default App
