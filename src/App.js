import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';


import {todos} from './todos.json';

class App extends Component {

  // constructor del componente principal 
  constructor(){
    // estado del componente maneja solo las tareas
    super();
    this.state = {
      todos
    }

    // metodo para no perder el scoope
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  // evento manejador de adicion de tareas
  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  // evento manejador de eliminacion de una tarea
  handleRemoveTodo(index){
    // console.log(index);
    if (window.confirm("Are you sure you want to remove?")){
      this.setState({
        todos: this.state.todos.filter((todo, i) => {
          return i !== index;
        })
      })
    }
    
  }

  // renderizado de un componente
  render() {
    
    // listado de tareas
    const todos = this.state.todos.map((todo, i) => {
      // destructurin de cada tarea
      const {title, priority, description, responsible} = todo;

      // return del componente de tareas
      return (
        <div key={todo.toString + i} className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {priority}
              </span>
            </div>
            <div className="card-body">
              <p>{description}</p>
              <p><mark>{responsible}</mark></p>
            </div>
            <div className="card-footer">
              {/* boton para borrar una tarea por indice */}
              <button 
                className="btn btn-outline-danger" 
                // .bind se usa para que el evento no pierda el scoope
                onClick={this.handleRemoveTodo.bind(this,i)}>
                  <span role="img" aria-label="delete">🚮</span>
              </button>
            </div>
          </div>
        </div>
      )
    });
    
    // Renderizado del componente principal
    return (
      <div className="App">

          {/* header - Navigation */}
          <nav className="navbar navbar-dark bg-dark">
            <a href="/" className="text-white">
              Tasks 
              <span className="badge badge-light ml-2">
                {this.state.todos.length}
              </span>
            </a>
          </nav>
          
          {/* Body componente central de la aplicacion */}
          <div className="col-md-12">
            <div className="row mt-4 ml-4">

              {/* Form & image componente de formulario*/}
              <div className="col-md-3 text-center mt-4">
                  <TodoForm onAddTodo={this.handleAddTodo}/>
                  <img src={logo} className="App-logo mt-4" alt="logo"/>
              </div>

              {/* separation */}
              <div className="col-md-1"></div>

              {/* Tasks componente listado de tareas*/}
              <div className="col-md-7">
                <div className="row">
                  {todos}
                </div>                
              </div>

            </div>
          </div>
          
      </div>
    );
  }

}


export default App;



