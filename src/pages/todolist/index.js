import React from 'react';
import './index.scss';

function Todolist() {

   const [list, setList] = React.useState(['Learn React', 'Create to-do-list']);
   const [newList, setNewList] = React.useState();
   const [disabled, setDisabled] = React.useState(true);

   const onInput = (event) => {
      setNewList([event.target.value]);
      if (event.target.value == '') {
         setDisabled(true);
      } else {
         setDisabled(false);
      }
   }

   const addToList = () => {
      setList(oldArray => [...oldArray, newList]);
      setNewList('');
      setDisabled(true);
   }

  return (
    <div>
      <div className='todolistApp'>
         <div className='head'>
            <input onChange={onInput} value={newList}/>
            <button disabled={disabled} onClick={addToList}>Add</button>
         </div>
         <ul className='list'>
            {
               list.map((item, index) => (
                  <li key={index}>{item}<div></div></li>
               ))
            }
         </ul>
      </div>
    </div>
  )
}

export default Todolist;