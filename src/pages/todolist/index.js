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

   React.useEffect(() => {
      const data = window.localStorage.getItem('MY_NEW_LIST');
      console.log(data);
      if ( data !== null ) setList(JSON.parse(data));
   }, []);

   React.useEffect(() => {
      window.localStorage.setItem('MY_NEW_LIST', JSON.stringify(list))
   }, [list]);
      
   const [input, setInput] = React.useState('');
   const [disabled, setDisabled] = React.useState(false);

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

   const deleteItem = (item) => {
      setList(list.filter((obj) => obj.id !== item.id));
   }

   const onChecked = (item) => {
      item.completed = !item.completed;
   }

  return (
   <div className='todolistApp'>
      <div className='head'>
         <input onChange={onInput} value={input}/>
         <button disabled={disabled} onClick={addToList}>Add</button>
      </div>
      <ul className='list'>
         {
            list.map((item) => (
               <li key={item.id}>
                  <input className='completed' type="checkbox" onClick={() => onChecked(item)} />
                  {item.text}
                  <div className='delete' onClick={() => deleteItem(item)}></div>
               </li>
            ))
         }
      </ul>
   </div>
  )
}

export default Todolist;