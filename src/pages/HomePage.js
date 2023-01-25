// 컴포넌트 import 하기 
import GreetingBar from '../components/GreetingBar';
import SettingIcon from '../components/SettingIcon'
import SearchBar from '../components/SearchBar';
import Section from '../components/Section';

import {todoData, statusBarData} from '../dummyData';

import {useState} from 'react'

import useInput from '../hooks/useInput';

function HomePage({name, selectedLang, selectedTheme}) {

    // todoData.length는 변하지않고, todos.length는 삭제되면서 id값이 변동될 수 있다. 그러므로 id를 상태로 만든다.
    const [todoId, setTodoId] = useState(todoData.length)
    const [todos, setTodos] = useState(todoData)
    const [keyword, keywordBind] = useInput('')

  const handleEditClick = (e) => {
    const updatedTodos = [...todos];
    const matchedIdx = updatedTodos.findIndex((el) => el.id === Number(e.target.id))
    updatedTodos[matchedIdx].onEdit = true;
    setTodos(updatedTodos)
}

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
        setTodos([...todos, newTodo])
    }

    const handleSaveAll = () => {
        const updatedTodos = todos.map(data => {
            return {...data, onEdit: false}
        });
        setTodos(updatedTodos)
    }


  return (
    <div className={selectedTheme === 'Dark' ? "darkmode app" : "app"} onClick={handleSaveAll}>
        <header className="header">
        <GreetingBar className="greetingBar" name={name} selectedLang={selectedLang} />
        <SettingIcon />
        </header>
        <div className="search">
        <SearchBar keywordBind={keywordBind}/>
        </div>
        <main className="main">
            <Section todos={todos} setTodos={setTodos} handleAddToDo={handleAddToDo} handleEditClick={handleEditClick} keyword={keyword} bar={statusBarData[0]} />
            <Section todos={todos} setTodos={setTodos} handleAddToDo={handleAddToDo} handleEditClick={handleEditClick} keyword={keyword} bar={statusBarData[1]}/>
            <Section todos={todos} setTodos={setTodos} handleAddToDo={handleAddToDo} handleEditClick={handleEditClick} keyword={keyword} bar={statusBarData[2]}/>
        </main>
    </div>
  );
}

export default HomePage;
