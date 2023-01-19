// 컴포넌트 import 하기 
import HomePage from './pages/HomePage';
import SettingPage from './pages/SettingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import {useState} from 'react'
import GlobalStyle from './GlobalStyles';

function App() {

  const [name, setName] = useState('HY')
  const handleNameChange = (e) => {
    setName(e.target.value)
  }


  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage name={name}/>}></Route>
        <Route path="/setting" element={<SettingPage name={name} handleNameChange={handleNameChange} />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <MemoApp /> */}
    </>

  );
}

export default App;
