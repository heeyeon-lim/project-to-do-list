// 컴포넌트 import 하기 
import HomePage from './pages/HomePage';
import SettingPage from './pages/SettingPage';
// import { settingData } from './dummyData';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import {useState, useEffect} from 'react'
import GlobalStyle from './GlobalStyles';

import useInput from './hooks/useInput';
import useFetch from './hooks/useFetch';

function App() {

  const [settingData, setSettingData] = useState()

  useEffect(() => {
      fetch('http://localhost:4001/setting')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {  
        setSettingData(data)
      })
    }, [])

    console.log("settingData: ", settingData)


  return (
    <>
      <GlobalStyle />
    { settingData && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage settingData={settingData} />}></Route>
            <Route path="/setting" 
            element=
            {<SettingPage
            settingData={settingData}
            setSettingData={setSettingData}
            />}></Route>
          </Routes>
        </BrowserRouter>
      )
    }
    </>

  );
}

export default App;
