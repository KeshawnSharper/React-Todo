import React,{ Component }from 'react';
import TodoForm from './TodoForm';
import Todo from "./Todo"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component{
    constructor(){
        super()
        this.state = {list:[
            {
              task: 'Organize Garage',
              id: 1528817077286,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 1528817084358,
              completed: false
            }
          ]}
    }
    addItem = (e,item) => {
        const newTodo = {
            task:item,
            completed:false,
            id:Date.now()
        }
        this.setState({list:[newTodo,...this.state.list]})
    }
    clearCompleted = (e) => {
        this.setState({
            list:this.state.list.filter(i => i.completed == false)
        })
    }
toggleItem = (e,itemId) => {
        this.setState({
            list:this.state.list.map(item => {
                if(item.id == itemId){
                    return{
                        ...item,
                        completed:!item.completed
                    }
                }
                else {
                    return item
                }
            })
        })
    }
    render(){
        return(
            <div>
                <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
            {this.state.list.map(item => (
            <Todo key={item.id} item={item} onClick={(e) => this.toggleItem(e,item.id)}/>)
            )}
            </div>
        )
    }
}

export default TodoList;
