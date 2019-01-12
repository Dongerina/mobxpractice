import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class TodoList extends Component {
 createNew(e)
 {
  if(e.which === 13)
  {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
  }
 }
 
    filter(e)
  {
      this.props.store.filter = e.target.value;  
  }
  
  toggleComplete(todo)
  {
    todo.complete = !todo.complete
  }

    render()
    {
     const { filter, todos, filterTodos, clearComplete } = this.props.store
     const todoLis = filterTodos.map(todo => (
        <li key={todo.id}><input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete}/>{todo.value}</li>
     ))
     return (<div>
     <h1>to do</h1>
     <input className="create" onKeyPress={this.createNew.bind(this)}/>
     <input className="filter" value={filter}  onChange={this.filter.bind(this)}/>
     <ul>{todoLis}</ul>
     <a href="#" onClick={clearComplete}> clear complete</a>
     </div>)
    }
}

export default TodoList;