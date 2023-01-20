import React from 'react';
import './index.scss';

function Todolist() {

   const [list, setList] = React.useState(['test', 'test1']);

  return (
    <div>
      <div className='todolistApp'>
         <div className='head'>
            <input />
            <button>Add</button>
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