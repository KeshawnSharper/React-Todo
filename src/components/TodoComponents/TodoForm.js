import React,{ Component }from 'react';
import styled from 'styled-components'

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
newItem:""
        }
    }
    handleChange = e => {
        this.setState({newItem:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(e,this.state.newItem)
        
    }
    handleCompleted = e => {
        e.preventDefault()
        this.props.clearCompleted(e)
    }
render(){
    return (
        <form onSubmit={this.handleSubmit}>
<input onChange={this.handleChange}></input>
<button>Add Todo</button>
<button onClick={this.handleCompleted}>Clear Completed</button>

        </form>
    )
}
}

export default TodoForm;
