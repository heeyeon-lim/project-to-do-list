import styled from 'styled-components';
import {useState} from 'react';
import LightThemeImage from '../LightThemeImage.png';
import DarkThemeImage from '../DarkThemeImage.png';
import {Link} from 'react-router-dom'


const NameContainer = styled.div`
display: flex; 
flex-direction: column;
    > label {
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 8px;
        }
    > input {
        width: 380px;
        height: 40px;
        border: 4px solid #EDE5D6;
        border-radius: 10px;
        font-size: 1rem;
        outline: transparent; 
        &:hover {
            border: 2px solid blue;
        }
}
`

const LanguageContainer = styled.div`
    > p {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 8px;
    }
    > div {
        width: 100%;
        height: 100%;
    }
`

const ThemeContainer = styled.div`
    > p {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 8px;
    }
    > div {
        width: 100%;
        height: 100%;
    }
`

const LanguageBtn = styled.button`
width: 150px;
height: 60px;
border-radius: 10px;
background-color: #EDE5D6;
border: none;
font-size: 1rem;
font-weight: 500;
margin-right: 15px;
&:hover {
    border: 2px solid blue;
}
&.active {
    border: 2px solid blue;
}
`

const ThemeBtn = styled.button`
width: 32%;
margin-right: 20px;
border-radius: 5px;
border: 1px solid #EDE5D6;
> img {
    width: 100%;
    height: 100%;
    margin-right: 20px;
    border-radius: 5px;
    border: 1px solid #EDE5D6;
}
&:hover {
    border: 2px solid blue;
}
&.active {
    border: 2px solid blue;
}
`

const SaveCancelBtn = styled.button`
width: 100px;
height: 50px;
margin: 0 15px;
background-color: #d7d6d6;
border-radius: 10px;
font-size: 1rem;
font-weight: 500;
`

const SettingPage = ({name, handleNameChange}) => {

    const [selectedLangBtn, setSelectedLangBtn] = useState(null);
    
    const handleLangBtnClick = (index) => {
    if (index !== selectedLangBtn) {
        setSelectedLangBtn(index);
    }
    }

    const [selectedThemeBtn, setselectedThemeBtn] = useState(null);
    
    const handleThemeBtnClick = (index) => {
    if (index !== selectedThemeBtn) {
        setselectedThemeBtn(index);
    }
    }


    return (
        <main className="app-setting">
            <div className='setting-options-container'>
                <NameContainer>
                    <label htmlFor='InputName'>Name</label>
                    <input type="text" id='InputName' value={name} onChange={handleNameChange} />
                </NameContainer>

                <LanguageContainer className='language-options-container'>
                    <p>Language</p>
                    <div>
                        <LanguageBtn className={`button ${selectedLangBtn === 0 ? "active" : ""}`} onClick={() => handleLangBtnClick(0)}>English</LanguageBtn>
                        <LanguageBtn className={`button ${selectedLangBtn === 1 ? "active" : ""}`} onClick={() => handleLangBtnClick(1)}>한국어</LanguageBtn>
                    </div>
                </LanguageContainer>

                <ThemeContainer className='theme-container'>
                    <p>Theme</p>
                    <div>
                    <ThemeBtn className={`button ${selectedThemeBtn === 0 ? "active" : ""}`} onClick={() => handleThemeBtnClick(0)}>
                        <img src={LightThemeImage} alt='Light theme' />
                    </ThemeBtn>
                    <ThemeBtn className={`button ${selectedThemeBtn === 1 ? "active" : ""}`} onClick={() => handleThemeBtnClick(1)}>
                        <img src={DarkThemeImage} alt='Dark theme' />
                    </ThemeBtn>
                    </div>
                </ThemeContainer>
            </div>
            <div className='buttons-container'>
                <Link to="/"><SaveCancelBtn className='save-button'>Save</SaveCancelBtn></Link>
                <Link to="/"><SaveCancelBtn className='cancel-button'>Cancel</SaveCancelBtn></Link>
            </div>
        </main>
    )
}

export default SettingPage
