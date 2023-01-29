import { useState } from 'react';
import styled from 'styled-components';

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
    :focus {
      outline: transparent;
    }
  }
`

const Tag = ({todo, handleEditTag}) => {
  const initialTags = todo.tags;
  const [tags, setTags] = useState(initialTags);

    const removeTags = (indexToRemove, id) => {
      // setTags(prevTags => {
      //   const newTags = prevTags.filter(tag => tag !== prevTags[indexToRemove]);
      //   handleEditTag(id, newTags);
      //   return newTags;
      // });

      const newTags = tags.filter(tag => tag !== tags[indexToRemove])
      setTags(newTags)
      handleEditTag(id, newTags)
    };
    
    const addTags = (event) => {
      if (event.key === 'Enter') {
        console.log("target: ", event.target.value)
        if (event.target.value === "") {
          // do nothing if input is empty 
          
        } else if (tags.includes(event.target.value)) {
          // check if the tag already exists
          event.target.value = ""

        } else {
          //! Warning: Cannot update a component (`HomePage`) while rendering a different component (`Tag`).
          //! make sure that you are calling setTags with the updated tags value, instead of calling handleEditTag first.
          // setTags(prevTags => {
          //   const newTags = [...prevTags, event.target.value]
          //   handleEditTag(event.target.id, newTags)
          //   event.target.value = ""
          //   return newTags
          // })
          const newTags = [...tags, event.target.value]
          setTags(newTags)
          handleEditTag(event.target.id, newTags)
          event.target.value = ""
        }
      }
    }

    // const handleEditTag = (id, updatedTags) => {
    //   setTodos(prevTodos => {

    //     return prevTodos.map(todo => {
    //       if (todo.id === Number(id)) {
    //         return {...todo, tags: updatedTags};
    //       } else {
    //         return todo;
    //       }
    //     });
    //   });
    // };
  

      return (
        <TagContainer>
            <TagWrapper readOnly={!todo.onEdit}>
              <ul id='tags'>
                {tags.map((tag, index) => (
                  <li key={index} className='tag'>
                    <span className='tag-title'>{tag}</span>
                      <span className='tag-close-icon' onClick={() => removeTags(index, todo.id)}> &times; </span>
                  </li>
                ))}
              </ul>
              <input readOnly={!todo.onEdit} id={todo.id} className='tag-input' type='text' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} /> 
          </TagWrapper>
        </TagContainer>
    
      );
    };

  export default Tag;