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
      setList(JSON.parse(data));
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
      const updatedList = list[item.id - 1].completed = !item.completed;
      setList(list.filter((obj) => obj.completed !== updatedList.completed));
   }

  return (
      <div>
         <div className='todolistApp'>
            <div className='head'>
               <input onChange={onInput} value={input}/>
               <button disabled={disabled} onClick={addToList}>Add</button>
            </div>
            <ul className='list'>
               {
                  list.map((item) => (
                     <li key={item.id} className={`${item.completed ? 'checked' : ''}`}>
                        <div className={`checkbox ${item.completed ? 'checked' : ''}`} onClick={() =>  onChecked(item)}></div>
                        {item.text}
                        <div className='delete' onClick={() => deleteItem(item)}></div>
                     </li>
                  ))
               }
            </ul>
         </div>
      </div>
  )
}

export default Todolist;