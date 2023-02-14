import {statusBarData} from '../dummyData';
import StatusBar from './StatusBar';
import ToDoCard from './ToDoCard';
import { useSelector } from 'react-redux';

function Section({handleAddToDo, keyword, bar}) {

  const todos = useSelector(state => state.todos.value)

  const filteredTodos = todos.filter(todo => todo.title.includes(keyword) && todo.status === bar.name)

  
  return (
    <section>
        {statusBarData.map(bar => <StatusBar key={bar.id} handleAddToDo={handleAddToDo} bar={bar} todos={todos} />)[bar.id]}
        <ul>
            {filteredTodos
            .map(todo => 
            <ToDoCard
            key={todo.id}
            todo={todo} />)}
        </ul>
    </section>
  )
}

export default Section