// 컴포넌트 import 하기 
import HomePage from './pages/HomePage';
import SettingPage from './pages/SettingPage';
import Example from './components/Example';
import { settingData } from './dummyData';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import {useState} from 'react'
import GlobalStyle from './GlobalStyles';

function App() {

  const [name, setName] = useState('HY')
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const [selectedLang, setSelectedLang] = useState(settingData[1].language);
    
  const handleChangeLang = (lang) => {
  if (lang !== selectedLang) {
      setSelectedLang(lang);
  }
  }

  const [selectedTheme, setselectedTheme] = useState(settingData[2].theme);
  
  const handleChangeTheme = (mode) => {
  if (mode !== selectedTheme) {
      setselectedTheme(mode);
  }
  }


  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage name={name} selectedLang={selectedLang} selectedTheme={selectedTheme} />}></Route>
        <Route path="/setting" 
        element=
        {<SettingPage
        name={name}
        handleNameChange={handleNameChange}
        handleChangeLang={handleChangeLang}
        handleChangeTheme={handleChangeTheme}
        selectedLang={selectedLang}
        selectedTheme={selectedTheme}  />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
