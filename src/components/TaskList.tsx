@ -15,15 +15,24 @@ export function TaskList() {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    if (!newTaskTitle) return;
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }
    setTasks(oldState => [...oldState, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    const newArrayTask = tasks.map(task => task.id == id ? { ...task, isComplete: !task.isComplete } : task)
    setTasks(newArrayTask)
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    const newTask = tasks.filter(task => task.id != id)
    setTasks(newTask)
  }

  return (
@ -32,14 +41,14 @@ export function TaskList() {
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>
@ -50,7 +59,7 @@ export function TaskList() {
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
@ -62,11 +71,11 @@ export function TaskList() {
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
                <FiTrash size={16} />
              </button>
            </li>
          ))}
          

        </ul>
      </main>
    </section>
