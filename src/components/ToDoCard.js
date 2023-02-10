import styled from 'styled-components'
import Tag from './Tag';
import DatePickerComponent from './DatePicker'
import EditIcon from '../EditIcon.png'
import CloseIcon from '../CloseIcon.png'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeTodos } from '../slices/todos';

const ToDoWrapper = styled.div`
width: 100%;
height: 150px;
margin-top: 1px;
margin-bottom: 3px;
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: #ffff;
border: solid 1px #dedede;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
> .button-container {
  width: 100%;
  height: 15%; 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > img {
    width: 15px;
    height: 15px; 
    margin: 0 5px; 
  }
}
> .form-container {
  width: 100%;
  height: 85%; 
  display: flex;
  flex-direction: column;
}
`

const TitleContainer = styled.div`
width: 100%;
height: 45%;
display: flex; 
align-items: center;
justify-content: flex-start;
border: red;
  > .input-title {
  width: 75%;
  height: 70%;
  margin-left: 15px;
  padding-left: 5px;
  font-size: 1.15rem;
  border: ${(props) => (props.readOnly ? 'none' : '1.2px solid #767676')}; 
  outline: transparent;
  }
`

const ToDoCard = ({todo}) => {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.value)

  const titleRef = useRef()

  const handleEditClick = (e) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === Number(e.target.id)) {
        return {...todo, onEdit: true} 
      }
      return todo;
    });
    dispatch(changeTodos(updatedTodos))
    titleRef.current.focus()
  }


  const handleDeleteClick = () => {
    const selectedTodo = todos.find((data) => data.id === todo.id);

    fetch(`http://localhost:4001/home/${selectedTodo.id}`, {
      method: 'DELETE', 
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => dispatch(changeTodos(data)))
    }

  const handleEditTitle = (e) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === Number(e.target.id)) {
        return {...todo, title: e.target.value}
      }
      return todo
    }) 
    dispatch(changeTodos(updatedTodos))
  }

  
    return (
      <li className='to-do-list' id={todo.id}>
        <ToDoWrapper onMouseDown={event => event.stopPropagation()}>
          <div className='button-container'>
            <img id={todo.id} role="button" src={EditIcon} onClick={handleEditClick} alt="Edit button" />
            <img role="button" src={CloseIcon} onClick={handleDeleteClick} alt="Delete button" />
          </div>
          <div className='form-container'>
            <TitleContainer readOnly={!todo.onEdit}>
              <input id={todo.id} ref={titleRef} readOnly={!todo.onEdit} type="text" className='input-title' value={todo.title} onChange={handleEditTitle} autoComplete="off"/>
            </TitleContainer>
            <Tag todo={todo} />
            <DatePickerComponent todo={todo} />
          </div>
        </ToDoWrapper> 
        </li>
    )
}

export default ToDoCard