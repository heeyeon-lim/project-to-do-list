import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

const GreetingBar= ({selectedLang, selectedTheme}) => {
    // const setting = useSelector((state) => state.setting.value)
    const setting = useSelector((state) => state.setting.value)
    
    return (
        <GreetingBarContainer>
            {/* <div className={selectedTheme==='Dark' ? 'darkmode-greeting-bar' : 'greeting-bar'}>
            {name}'s {selectedLang === 'English' ? 'To Do List' : '투두리스트'}
            </div> */}

            <div className={setting.theme==='Dark' ? 'darkmode-greeting-bar' : 'greeting-bar'}>
            {setting.name}'s {setting.language === 'English' ? 'To Do List' : '투두리스트'}
            </div>

        </GreetingBarContainer>
    )
}

export default GreetingBar