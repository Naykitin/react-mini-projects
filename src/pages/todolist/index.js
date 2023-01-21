import React from 'react';
import './index.scss';

function Todolist() {

   const [list, setList] = React.useState(['Learn React', 'Create to-do-list']);
   const [newList, setNewList] = React.useState();

   const onInput = (event) => {
      setNewList([event.target.value])

   }

   const addToList = () => {
      setList(oldArray => [...oldArray, newList]);
      setNewList('');
   }

  return (
    <div>
      <div className='todolistApp'>
         <div className='head'>
            <input onChange={onInput} value={newList}/>
            <button onClick={addToList}>Add</button>
         </div>
         <ul className='list'>
            {
               list.map((item, index) => (
                  <li key={index}>{item}</li>
               ))
            }
         </ul>
      </div>
    </div>
  )
}

export default Todolist;