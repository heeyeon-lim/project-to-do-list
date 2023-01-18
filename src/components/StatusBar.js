import styled from 'styled-components'
import CreateIcon from '../CreateIcon.png'


const StatusBarWrapper = styled.div`
width: 100%;
height: 40px;
display: flex; 
justify-content: center;
align-items: center;
border-radius:10px;
`

const TextContainer = styled.div`
width: 60%;
height: 100%;
display: flex; 
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-weight: 600;
`

const NumContainer = styled.span`
width: 20%; 
height: 100%;
display: flex; 
justify-content: flex-start;
align-items: center;
font-size: 0.9rem;
color: #95918E;
`

const CreateBtnContainer = styled.div`
width: 20%;
height: 100%;
display: flex; 
justify-content: center;
align-items: center;
  > img {
    width: 20px;
    height: 20px;
  }
`;


const StatusBar = ({handleAddToDo, bar, todos}) => {
    return (
        <li>
        <StatusBarWrapper style={{ backgroundColor: bar.color }}>
            <TextContainer>{bar.name}</TextContainer>
            <NumContainer>{todos.filter(todo => todo.status === bar.name).length}</NumContainer>
            <CreateBtnContainer>
                <img role='button' src={CreateIcon} onClick={handleAddToDo}/>
            </CreateBtnContainer>
        </StatusBarWrapper>
        </li>
    )
}

export default StatusBar