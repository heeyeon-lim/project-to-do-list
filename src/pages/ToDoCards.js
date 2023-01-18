import StatusBar from "../components/StatusBar";
import ToDoCard from "../components/ToDoCard";
import dummyTodos from '../tododata'
import {useState} from 'react';

const ToDoCards = ({isEditMode, setEditMode, handleEditClick}) => {

    const [todos, setTodos] = useState(dummyTodos)

    // const createNewToDo = () => {

    //     const [todos, setTodos] = useState(dummyTodos)

    //     [...tododata.filter(), //input이 빈 상태인, editmode의 ToDoCard]

    // }


    return(

        <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {/* <Tweet tweet={dummyTweets[0]} /> */}
            {todos.map( (todo) => <ToDoCard key={todo.id} todo={todo} />)};
        </ul>

        // create 아이콘 클릭

        // 투두를 작성할 수 있는 새로운 카드 만들기. 

        // 카드가 save되면 투두 리스트 중 가장 마지막에 추가하기. 
        // <>
        // <StatusBar createNewToDo={createNewToDo}/>
        // <br/>
        // <ToDoCard isEditMode={isEditMode} setEditMode={setEditMode} handleEditClick={handleEditClick} />
        // </>
    )

}

export default ToDoCards