// 컴포넌트 import 하기 
import GreetingBar from '../components/GreetingBar';
import SettingIcon from '../components/SettingIcon'
import SearchBar from '../components/SearchBar';
import Section from '../components/Section';
import {useState, useEffect} from 'react'
import useInput from '../hooks/useInput';

import { useDispatch, useSelector } from 'react-redux';
import { changeTodos } from '../slices/todos';

function HomePage() {

  const dispatch = useDispatch()

  const setting = useSelector(state => state.setting.value)
  const todos = useSelector(state => state.todos.value)

    const statusBarData = [
        {id: 0, name: 'Not Started', color: ' #fbdbd5'},
        {id: 1, name: 'In Progress', color: '#FCE8BC'},
        {id: 2, name: 'Completed', color: '#D3E9D3'}
    ]

    const [keyword, keywordBind] = useInput('')

  // todoData.length는 변하지않고, todos.length는 삭제되면서 id값이 변동될 수 있다. 그러므로 id를 상태로 만든다.
    // const [todos, setTodos] = useState([])
    const [todoId, setTodoId] = useState(0)

    useEffect(() => {
        fetch('http://localhost:4001/home')
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          dispatch(changeTodos(data))
          // console.log()
          // setTodos(data);
          setTodoId(data.length)
        })
      }, [])

    const handleAddToDo = (e) => {
        const newTodo = {
        id: todoId,
        title: '',
        tags: [],
        date: '',
        onEdit: false
        };

        if (e.target.id === '0') newTodo.status = 'Not Started'
        if (e.target.id === '1') newTodo.status = 'In Progress'
        if (e.target.id === '2') newTodo.status = 'Completed'

        setTodoId(todoId + 1);

        fetch('http://localhost:4001/home', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(newTodo)
          })
          .then(res => res.json())
          .then(data => {
            // setTodos(data);
            dispatch(changeTodos(data))
          })
    }

    const handleSaveAll = () => {
        const updatedTodos = todos.map(data => {
            return {...data, onEdit: false}
        });

        fetch('http://localhost:4001/home', {
          method: 'PUT', 
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(updatedTodos)
        })
        .then(res => res.json())
        .then((data) => dispatch(changeTodos(data)))
      }


  return (
    <>
      {
          todos && todoId && (
              <div className={setting.theme === 'Dark' ? "darkmode app" : "app"} onMouseDown={handleSaveAll}>
            <header className="header">
            <GreetingBar className="greetingBar" name={setting.name} selectedLang={setting.language} selectedTheme={setting.theme} />
            <SettingIcon />
            </header>
            <div className="search">
            <SearchBar keywordBind={keywordBind}/>
            </div>
            <main className="main">
                <Section handleAddToDo={handleAddToDo} keyword={keyword} bar={statusBarData[0]} />
                <Section handleAddToDo={handleAddToDo} keyword={keyword} bar={statusBarData[1]}/>
                <Section handleAddToDo={handleAddToDo} keyword={keyword} bar={statusBarData[2]}/>
            </main>
            </div>
        )
    }
    </>
  );
}

export default HomePage;