import React, { Component } from 'react';
import Background from '../src/background.jpg';
import inputpoint from '../src/inputpoint.png';
import ButtonAdd from '../src/components/onAdd.jsx';
import './App.css';




class App extends Component {
  state = {
    newTodo: "",
    todos: []
  };



  inputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  onAdd = () => {
    const todos = this.state.todos
      todos.push(this.state.newTodo);
    this.setState({
      newTodo: "", todos
   })
    
  };
  onDelete = (index) => {
    
    var array = this.state.todos;
    array.splice(index,1);
    this.setState({   
      todos: array
   });
   
  };
  Background = {
  
    width: "100%",
    height: "100%",
    backgroundImage: "url(" +  Background  + ")"};
    inputpoint = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + inputpoint +")" 
    };
  
      add = async () => {};
   
  render() {
    const mytodos = this.state.todos;
   
   
     
    return (

     <div id> 
      <img class='bg' src={Background} alt=''/>
         
      <section class='form'></section> <div class = 'position'> <div class="title">What дыto do?</div>
        {/* <input class='inputadd'onChange={this.inputChange} placeholder='Add to list1' value={this.state.newTodo} /> */}
         <ButtonAdd onAdd={this.onAdd} inputChange={this.inputChange} newTodo={this.state.newTodo}/>
        
        {mytodos.map((item, index) => <div class='todo' key={index} > <img class='test' src={inputpoint} alt=""/>{item}<button class='buttondel' onClick={()=> this.onDelete(index)}>x</button><input type="checkbox" class="check" id='box' value="1"/></div>)} </div>
       
      
      </div>
      
    );
  }  
}

export default App;

