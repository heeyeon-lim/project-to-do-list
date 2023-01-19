// 컴포넌트 import 하기 
// 수정
import GreetingBar from '../components/GreetingBar';
import SettingIcon from '../components/SettingIcon'
import SearchBar from '../components/SearchBar';
import StatusBar from '../components/StatusBar'
import ToDoCard from '../components/ToDoCard';

import dummyData from '../dummyData';

import {useState} from 'react'

function HomePage({name}) {

    const statusBarData = [{name: 'Not Started', color: ' #fbdbd5'}, {name: 'In Progress', color: '#FCE8BC'}, {name: 'Completed', color: '#D3E9D3'}]

  const [todos, setTodos] = useState(dummyData)

  const handleEditClick = (e) => {
    const updatedTodos = [...todos];
    updatedTodos[e.target.id].onEdit = true
    setTodos(updatedTodos)
  }

  const handleAddToDo = () => {
    const newTodo = {}

    newTodo['id'] = dummyData.length
    newTodo['status'] = 'Not Started'
    newTodo['title'] = ''
    newTodo['tags'] = ''
    newTodo['date'] = ''
    newTodo['onEdit'] = false

    setTodos([...todos, newTodo])
    console.log(todos)
    console.log(newTodo)
}

    const handleSaveAll = () => {
        const updatedTodos = todos.map(data => {
            return {...data, onEdit: false}
        });
        setTodos(updatedTodos)
    }

  return (
    <div className="app" onClick={handleSaveAll}>
        <header className="header">
        <GreetingBar className="greetingBar" name={name} />
        <SettingIcon />
        </header>
        <div className="search">
        <SearchBar />
        </div>
        <main className="main">
        <section className="section1">
            <ul className='status-bar'>
                {statusBarData
                .filter(bar => bar.name === 'Not Started')
                .map(bar => 
                <StatusBar handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)}
            </ul>
            {/* <StatusBar handleAddToDo={handleAddToDo}/> */}
            <ul>
                {todos
                .filter(todo => todo.status==='Not Started')
                .map(todo => 
                <ToDoCard
                key={todo.id}
                todo={todo}
                todos={todos}
                handleEditClick={handleEditClick}
                setTodos={setTodos} />)}
            </ul>
        </section>
        <section className="section2">
            {/* <StatusBar handleAddToDo={handleAddToDo}/> */}
            <ul className='status-bar'>
                {statusBarData
                .filter(bar => bar.name === 'In Progress')
                .map(bar => 
                <StatusBar handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)}
            </ul>
            <ul>
                {todos
                .filter(todo => todo.status==='In Progress')
                .map(todo => 
                <ToDoCard
                key={todo.id}
                todo={todo}
                todos={todos}
                handleEditClick={handleEditClick}
                setTodos={setTodos} />)}
            </ul>
        </section>
        <section className="section3">
            {/* <StatusBar handleAddToDo={handleAddToDo}/> */}
            <ul className='status-bar'>
                {statusBarData
                .filter(bar => bar.name === 'Completed')
                .map(bar => 
                <StatusBar handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)}
            </ul>
            <ul>
                {todos
                .filter(todo => todo.status==='Completed')
                .map(todo => 
                <ToDoCard
                key={todo.id}
                todo={todo}
                todos={todos}
                handleEditClick={handleEditClick}
                setTodos={setTodos} />)}
            </ul>
        </section>
        </main>
    </div>
  );
}

export default HomePage;
