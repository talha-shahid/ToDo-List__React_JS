import React, { useState } from 'react'
import './App.css';
import ToDoLists from './ToDoLists';

const App = () => {
  //"inputList" contains the value which user has entered
  const [inputList, setInputList] = useState("");
  //"items" is an array which consists of all the stuff user has entered
  const [items, setItems] = useState([]);

  //When user type something, "itemEvent" will be triggered thereby setting "inputList"
  const itemEvent = (event)=>{
    setInputList(event.target.value)
  };
  //When user clicks on button, "listOfItems" will be triggered and will append "inputList" array by
  // adding 
  const listOfItems = ()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    });
    setInputList("");
  }

  // When user clicks on "cross" icon
  const deleteItems = (id)=> {

    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      });
    });
    
  }

  //rest of the code
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add an Item' value={inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>

          <ol>
            {items.map((itemval, index)=>{
              return <ToDoLists key={index} id={index} text={itemval} onSelect= {deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;