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

const Tag = ({todo}) => {
  const initialTags = todo.tags;
  
    const [tags, setTags] = useState(initialTags);
  
      // 태그를 삭제하는 메소드
    const removeTags = (indexToRemove) => {
  
      // filter는 immutable한 메서드로서, tags 상태를 변환시키지 않고 새로운 배열을 리턴한다. 
      setTags(tags.filter(tag => tag !== tags[indexToRemove]))
    };
  
      // 새로운 태그를 추가하는 메소드
    const addTags = (event) => {
      // - 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
      // - 아무것도 입력하지 않은 채 Enter 키 입력시, 또는 2개이상 태그 입력시 메소드 실행하지 말기
      // - 태그가 추가되면 input 창 비우기
  
      if (event.key === 'Enter') {
        if (event.target.value === "") {
          
        } else if (tags.includes(event.target.value) || tags.length >= 2 || event.target.value.length > 12) {
          event.target.value = ""

        } else {
          setTags([...tags, event.target.value])
          event.target.value = ""
  
        }
      }
    }

      return (
        <TagContainer>
            <TagWrapper readOnly={!todo.onEdit}>
              <ul id='tags'>
                {tags.map((tag, index) => (
                  <li key={index} className='tag'>
                    <span className='tag-title'>{tag}</span>
                      <span className='tag-close-icon' onClick={() => removeTags(index)}> &times; </span>
                  </li>
                ))}
              </ul>
              <input readOnly={!todo.onEdit} className='tag-input' type='text' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} /> 
          </TagWrapper>
        </TagContainer>
    
      );
    };

  export default Tag;