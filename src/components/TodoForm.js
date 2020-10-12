import React, { Component} from 'react';

class TodoForm extends Component{

    // constructor del componente
    constructor(){
        // estado del componente maneja sus propiedades
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Manejador de input
    handleInputChange(e){
        // console.log(e.target.value, e.target.name);
        const {value, name} = e.target;    
    
        this.setState({
            [name]: value
        });
        // console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        document.getElementById("form").reset();
    }

    render(){
        return ( 
            <div className="card">
                <form id="form" className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" 
                            name="title" 
                            onChange={this.handleInputChange}
                            className="form-control" 
                            placeholder="title"/>              
                    </div>            
                    <div className="form-group">
                        <input type="text" 
                            name="responsible" 
                            onChange={this.handleInputChange}
                            className="form-control" 
                            placeholder="responsible"/>              
                    </div>            
                    <div className="form-group">
                        <input type="text" 
                            name="description" 
                            onChange={this.handleInputChange}
                            className="form-control" 
                            placeholder="description"/>              
                    </div>            
                    <div className="form-group">
                        <select name="priority" 
                            onChange={this.handleInputChange}
                            className="form-control">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div> 
    
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>          
                </form>
            </div>
        )
    }
}
 
export default TodoForm;