import styled from 'styled-components'
import Tag from './Tag';
import DatePickerComponent from './DatePicker'
import EditIcon from '../EditIcon.png'
import CloseIcon from '../CloseIcon.png'

import useInput from '../hooks/useInput';

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

const ToDoCard = ({handleEditClick, todo, todos, setTodos}) => {
  const handleDeleteClick = () => {
    const updatedTodos = todos.filter((data) => data.id !== todo.id);
    setTodos(updatedTodos);
  }

  const [title, titleBind] = useInput(todo.title)
  
    return (
      <li className='to-do-list' id={todo.id}>
        <ToDoWrapper onClick={event => event.stopPropagation()}>
          <div className='button-container'>
            <img id={todo.id} role="button" src={EditIcon} onClick={handleEditClick} alt="Edit button" />
            <img role="button" src={CloseIcon} onClick={handleDeleteClick} alt="Delete button" />
          </div>
          <div className='form-container'>
            <TitleContainer readOnly={!todo.onEdit}>
              <input readOnly={!todo.onEdit} type="text" className='input-title' {...titleBind}/>
            </TitleContainer>
            <Tag todo={todo} />
            <DatePickerComponent todo={todo}/>
          </div>
        </ToDoWrapper> 
        </li>
    )
}

export default ToDoCard