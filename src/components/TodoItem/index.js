// Write your code here

import './index.css'

const TodoList = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-items">
      <p className="title">{title}</p>
      <button type="button" className="dlt-button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoList
