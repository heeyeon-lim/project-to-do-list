// 컴포넌트 import 하기 
import GreetingBar from '../components/GreetingBar';
import SettingIcon from '../components/SettingIcon'
import SearchBar from '../components/SearchBar';
import StatusBar from '../components/StatusBar'
import ToDoCard from '../components/ToDoCard';

import dummyData from '../dummyData';

import {useState} from 'react'

function HomePage({name, language}) {

    const [todoId, setTodoId] = useState(dummyData.length)
    const [todos, setTodos] = useState(dummyData)
    const [keyword, setKeyword] = useState('')

  const handleEditClick = (e) => {
    const updatedTodos = [...todos];
    const matchedIdx = updatedTodos.findIndex((el) => el.id === Number(e.target.id))
    updatedTodos[matchedIdx].onEdit = true;
    setTodos(updatedTodos)
}

    const handleAddToDo = (e) => {
        console.log('handleAddToDo가 실행됩니다.')
        console.log('e:', e.target.id)
        
        const newTodo = {};
        
        //dummyData.length는 변하지않고, todos.length는 삭제되면서 id값이 변동될 수 있다. 그러므로 id를 상태로 만든다.
        newTodo.id = todoId;

        if (e.target.id === '0') newTodo.status = 'Not Started'
        if (e.target.id === '1') newTodo.status = 'In Progress'
        if (e.target.id === '2') newTodo.status = 'Completed'

        newTodo.title = '';
        newTodo.tags = [];
        newTodo.date = '';
        newTodo.onEdit = false;

        setTodoId(todoId + 1);
        
        console.log('Updated Todos:', [...todos, newTodo]) // 제대로 추가되서 나옵니다.
        setTodos([...todos, newTodo])
        console.log('Updated State', todos) // 상태가 업데이트 되지 않았습니다.
    }

    const handleSaveAll = () => {
        const updatedTodos = todos.map(data => {
            return {...data, onEdit: false}
        });
        setTodos(updatedTodos)
    }

    const statusBarData = [{id: 0, name: 'Not Started', color: ' #fbdbd5'}, {id: 1, name: 'In Progress', color: '#FCE8BC'}, {id: 2, name: 'Completed', color: '#D3E9D3'}]

  return (
    <div className="app" onClick={handleSaveAll}>
        <header className="header">
        <GreetingBar className="greetingBar" name={name} language={language} />
        <SettingIcon />
        </header>
        <div className="search">
        <SearchBar setKeyword={setKeyword}/>
        </div>
        <main className="main">
        <section className="section1">
            <ul className='status-bar'>
                {statusBarData
                .filter(bar => bar.name === 'Not Started')
                .map(bar => 
                <StatusBar key={bar.id} handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)}
            </ul>
            <ul>
                {todos
                .filter(todo => todo.status==='Not Started')
                .filter(todo => todo.title.includes(keyword))
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
            <ul className='status-bar'>
                {statusBarData
                .filter(bar => bar.name === 'In Progress')
                .map(bar => 
                <StatusBar key={bar.id} handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)}
            </ul>
            <ul>
                {todos
                .filter(todo => todo.status==='In Progress')
                .filter(todo => todo.title.includes(keyword))
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
            <ul className='status-bar'>
                {statusBarData
                .filter(bar => bar.name === 'Completed')
                .map(bar => 
                <StatusBar key={bar.id} handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)}
            </ul>
            <ul>
                {todos
                .filter(todo => todo.status==='Completed')
                .filter(todo => todo.title.includes(keyword))
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
