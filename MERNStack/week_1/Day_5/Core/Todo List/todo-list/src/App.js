import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {
  const tasks =[{name:"Task 1",done:false}, {name:"Task 2",done:false}, {name:"Task 3",done:false}]
  const [taskList, setTasklist]=useState(tasks)

  const formHandler = (e, task) => {
      e.preventDefault()
      setTasklist([...taskList,{name:task,done:false,hidden:false}])
      e.target.value=""
  }

  const deleteHandler = (id) => {
    setTasklist(taskList.filter((t,key)=>key!==id));
  }

  const checkHandler = (e, id) => {
    let edit = taskList;
    if ( edit[id].done ){
      edit[id].done=false
      e.target.checked = false
      document.getElementById(id).style.textDecoration="none"
    }else{
      edit[id].done=true
      e.target.checked = true
      document.getElementById(id).style.textDecoration="line-through"
    }
    setTasklist(edit)
    console.log("****",taskList)
  }
  console.log("++++",taskList)

  return (
    <div className="App">
        <Form formHandler={formHandler}/>
        <List tasks={taskList} deleteHandler={deleteHandler} checkHandler={checkHandler}/>
    </div>
  );
}

export default App;
