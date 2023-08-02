import {useEffect, useState} from 'react'
import './App.css';
import { TaskCreator } from './components/TaskCreator.js'
import {TaskTable} from './components/TaskTable'


function App() {

const [tasksItems, setTasksItems]  = useState([])

  function createNewTask(taskName) {
    setTasksItems([...tasksItems, {name: taskName, done:false}])
  }
  const toggleTask = task =>{
    tasksItems.map(t => (t.name == task.name) ? {...t, done: !t.done}: t)
  }
  useEffect(()=>{
   let data = localStorage.getItem('tasks')
   if (data){
    setTasksItems(JSON.parse(data))
   }  
  }, [ ])

  useEffect( () => {
   localStorage.setItem('tasks', JSON.stringify(tasksItems))
    }, [tasksItems])


    return (
      <div className="App">
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable tasks= {tasksItems}/>
     
    


      </div>
    )
  
}
export default App;
