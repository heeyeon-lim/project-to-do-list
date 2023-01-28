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
        border-radius: 10px;
        font-size: 2rem;
        font-weight: bold;
    }
`

const GreetingBar= ({name, selectedLang, selectedTheme}) => {
    return (
        <GreetingBarContainer>
            <div className={selectedTheme==='Dark' ? 'darkmode-greeting-bar' : 'greeting-bar'}>
            {name}'s {selectedLang === 'English' ? 'To Do List' : '투두리스트'}
            </div>
        </GreetingBarContainer>
    )
}

export default GreetingBar