import {statusBarData} from '../dummyData';
import StatusBar from './StatusBar';
import ToDoCard from './ToDoCard';

function Section({todos, setTodos, handleAddToDo, handleEditClick, keyword, bar}) {
  return (
    <section>
        {statusBarData.map(bar => <StatusBar key={bar.id} handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)[bar.id]}
        <ul>
            {todos
            .filter(todo => todo.status=== bar.name)
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
  )
}

export default Section