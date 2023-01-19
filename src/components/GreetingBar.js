import styled from 'styled-components';

const GreetingBarContainer= styled.div`
    width: 80%;
    height: 100%;
    display: flex; 
    justify-content: flex-end;
    align-items: center;
    > div {
        width: 80%; 
        height: 60%;
        display: flex; 
        justify-content: center;
        align-items: center;
        background-color: #E8DCC7;
        border-radius: 10px;
        font-size: 2rem;
        font-weight: bold;
    }
`

const GreetingBar= ({name}) => {
    return (
        <GreetingBarContainer>
            <div>
            {name}'s To Do List
            </div>
        </GreetingBarContainer>
    )
}

export default GreetingBar