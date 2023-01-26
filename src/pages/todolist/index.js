import React from 'react';
import './index.scss';

function Todolist() {

   const [list, setList] = React.useState([
         {
            id: 1,
            text: 'Learn React',
            completed: false
         }, 
         {
            id: 2,
            text: 'Create to-do-list',
            completed: false
         }
   ]);
   const [input, setInput] = React.useState('');
   const [disabled, setDisabled] = React.useState(true);
   const [edit, setEdit] = React.useState('');
   const [editedList, setEditedList] = React.useState('');

   React.useEffect(() => {
      const data = window.localStorage.getItem('MY_NEW_LIST');
      setList(JSON.parse(data));
   }, []);
   
   React.useEffect(() => {
      window.localStorage.setItem('MY_NEW_LIST', JSON.stringify(list))
   }, [list]);

   const onInput = (event) => {
      setInput(event.target.value);
      if (event.target.value === '') {
         setDisabled(true);
      } else {
         setDisabled(false);
      }
   }

   const addToList = () => {
      setList(oldArray => [...oldArray, {
         id: list.length + 1,
         text: input,
         completed: false
      }]);
      setInput('');
      setDisabled(true);
   }

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         setList(oldArray => [...oldArray, {
            id: list.length + 1,
            text: input,
            completed: false
         }]);
         setInput('');
         setDisabled(true);
       }
   }

   const deleteItem = (item) => {
      setList(list.filter((obj) => obj.id !== item.id));
   }

   const onChecked = (item) => {
      const updatedList = list[item.id - 1].completed = !item.completed;
      setList(list.filter((obj) => obj.completed !== updatedList.completed));
   }

   const deleteDoneTasks = () => {
      setList(list.filter((obj) => obj.completed !== true))
   }

   const deleteAllTasks = () => {
      setList([]);
      window.localStorage.setItem('MY_NEW_LIST', [])
   }

   const editItemButton = (item) => {
      setEdit([item.id, item.text]);
   }

   const editInput = (event) => {
      setEdit([edit[0], event.target.value]);
   }

   const editTask = () => {
      setEditedList(list[edit[0] - 1].text = edit[1]);
      setList(list.filter((obj) => obj.text !== editedList.text));
      setEdit([]);
   }

  return (
      <div>
         <div className='todolistApp'>
            <div className='head'>
               <input onKeyDown={handleKeyDown} form="test" onChange={onInput} value={input}/>
               <button disabled={disabled} onClick={addToList}>Add</button>
            </div>
            <ul className='list'>
               {
                  list.map((item) => (
                     <li key={item.id} className={`${item.completed ? 'checked' : ''}`}>
                        <div className={`checkbox ${item.completed ? 'checked' : ''}`} onClick={() =>  onChecked(item)}></div>
                        <div className='listText'>{item.text}</div>
                        <div className='edit' onClick={() => editItemButton(item)}></div>
                        <div className='delete' onClick={() => deleteItem(item)}></div>
                     </li>
                  ))
               }
            </ul>
            { (list.length !== 0) ? 
               (
                  <div className='footer'>
                     <button onClick={deleteDoneTasks}>Delete done tasks</button>
                     <button onClick={deleteAllTasks}>Delete all tasks</button>
                  </div>
               ) : (null)
            }
            <div className='editModal'>
               <input onChange={editInput} value={edit[1]} />
               <button onClick={editTask}>Update task</button>
            </div>
         </div>
      </div>
  )
}

export default Todolist;