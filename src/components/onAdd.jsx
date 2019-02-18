import React from 'react';
import  '../App.js';
import '../App.css'
const ButtonAdd =(props)=> {
    return (<div> <input class='inputadd'onChange={props.inputChange} placeholder='Add to list' value={props.newTodo} />
    <button className='buttonadd' onClick={props.onAdd}>+</button></div>)
       
            
  }
  export default ButtonAdd;