import styled from 'styled-components';
import LightThemeImage from '../LightThemeImage.png';
import DarkThemeImage from '../DarkThemeImage.png';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

// modify state -> useDispatch , access state -> useSelector
import { useDispatch, useSelector } from 'react-redux'
import { changeSetting } from '../slices/setting';

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

const SettingPage = () => {
    const dispatch = useDispatch();

    const setting = useSelector((state) => state.setting.value)

    const handleChangeName = (e) => {
        // const updatedName = {...settingData, name: e.target.value}
        // setSettingData(updatedName)
        const updatedName = {...setting, name: e.target.value}
        dispatch(changeSetting(updatedName))
      }
    
      const handleChangeLang = (lang) => {
        // const updatedLang = {...settingData, language: lang}
        // setSettingData(updatedLang)
        const updatedLang = {...setting, language: lang}
        dispatch(changeSetting(updatedLang))
      }
    
      const handleChangeTheme = (theme) => {
        // const updatedTheme = {...settingData, theme: theme}
        // setSettingData(updatedTheme)
        const updatedTheme = {...setting, theme: theme}
        dispatch(changeSetting(updatedTheme))
      }
    
      const reflectSettingChanges = () => {
            fetch("http://localhost:4001/setting", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(settingData),
            body: JSON.stringify(setting),
          })
          .then(res => res.json())
          .then(data => 
            {
            console.log("data:", data) // 새로운 데이터 잘 들어오는거 확인했음.
            dispatch(changeSetting(data))
            })
        }

        //   .then(data => setSettingData(data))


    return (
        <main className={setting.theme === 'Dark' ? 'darkmode setting' : 'setting'}>
            <div className='setting-options-container'>
                <NameContainer>
                    <label htmlFor='InputName'>Name</label>
                    {/* <input type="text" id='InputName' value={settingData.name} onChange={handleChangeName}/> */}
                    <input type="text" id='InputName' value={setting.name} onChange={handleChangeName}/>
                </NameContainer>

                <LanguageContainer className='language-options-container'>
                    <p>Language</p>
                    <div>
                        <LanguageBtn className={`button ${setting.language === 'English' ? "active" : ""}`} onClick={() => handleChangeLang('English')}>English</LanguageBtn>
                        <LanguageBtn className={`button ${setting.language === 'Korean' ? "active" : ""}`} onClick={() => handleChangeLang('Korean')}>한국어</LanguageBtn>
                    </div>
                </LanguageContainer>

                <ThemeContainer className='theme-container'>
                    <p>Theme</p>
                    <div>
                    <ThemeBtn className={`button ${setting.theme === 'Light' ? "active" : ""}`} onClick={() => handleChangeTheme('Light')}>
                        <img src={LightThemeImage} alt='Light theme' />
                    </ThemeBtn>
                    <ThemeBtn className={`button ${setting.theme === 'Dark' ? "active" : ""}`} onClick={() => handleChangeTheme('Dark')}>
                        <img src={DarkThemeImage} alt='Dark theme' />
                    </ThemeBtn>
                    </div>
                </ThemeContainer>
            </div>
            <div className='buttons-container'>
                <Link to="/"><SaveCancelBtn className='save-button' onClick={reflectSettingChanges}>Save</SaveCancelBtn></Link>
            </div>
        </main>
    )
}

export default SettingPage
