import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodos } from '../slices/todos';

const TagContainer = styled.div`
width: 100%;
height: 35%;
display: flex; 
justify-content: flex-start;
align-items: center;
`
const TagWrapper = styled.div`
width: 75%;
height: 70%;
display: flex; 
margin-left: 15px;
border: ${(props) => (props.readOnly ? 'none' : '1.2px solid #767676')}; 
  > ul {
    display: flex;
    align-items: center;

    > .tag {
      width: 100%;
      height: 85%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px;
      margin: 0px 2px;
      font-size: 0.8rem;
      list-style: none;
      border-radius: 6px;
      background: #CADEEB;

      > .tag-title {
        padding-right: 8px;
        white-space: nowrap;
      }

      > .tag-close-icon {
        color: #231F20;
        display: ${(props) => (props.readOnly ? 'none' : 'visible')}
      }
    }
  }

  > input {
    width: 100%;
    height: 90%;
    border: none;
    font-size: 0.8rem;
    border: red;
    white-space: nowrap;
    :focus {
      outline: transparent;
    }
  }
`

const Tag = ({todo, tagRef}) => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.value)

  const tags = todo.tags
  
  const removeTags = (indexToRemove, id) => {
    const updatedTags = todo.tags.filter(tag => tag !== tags[indexToRemove])
      
    //   ))
    //   (prevTodos => {
    //   return prevTodos.map(todo => {
    //     if (todo.id === id) {
    //       return {...todo, tags: updatedTags};
    //     } else {
    //       return todo;
    //     }
    //   });
    // });
    // };
    
        {
          todos.map(todo => {
            if (todo.id === id) {
              dispatch(changeTodos({...todo, tag: updatedTags}))
            } 
          })
        }

  }
    
    const addTags = (event) => {
      if (event.key === 'Enter') {
        if (event.target.value === "") {
        } else if (tags.includes(event.target.value)) {
          // check if the tag already exists
          event.target.value = ""
          return null
        } else {
          const updatedTags = [...tags, event.target.value]
          {
            todos.map(todo => {
              if (todo.id === Number(event.target.id)) {
                dispatch(changeTodos({...todo, tag: updatedTags}))
              } 
            })
          }
          // setTodos(prevTodos => {
          //   return prevTodos.map(todo => {
          //     if (todo.id === Number(event.target.id)) {
          //       return {...todo, tags: updatedTags};
          //     } else {
          //       return todo;
          //     }
          //   });
          // });
          event.target.value = ""
        }
      }
    }

      return (
        <TagContainer>
            <TagWrapper readOnly={!todo.onEdit}>
              <ul id='tags'>
                {/* 여기서 index는 투두하나의 태그 하나하나의 인덱스 */}
                {tags.map((tag, index) => (
                  <li key={index} className='tag'>
                    <span className='tag-title'>{tag}</span>
                      <span className='tag-close-icon' onClick={() => removeTags(index, todo.id)}> &times; </span>
                  </li>
                ))}
              </ul>
              <input id={todo.id} ref={tagRef} readOnly={!todo.onEdit} className='tag-input' type='text' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} /> 
          </TagWrapper>
        </TagContainer>
    
      );
    };

  export default Tag;