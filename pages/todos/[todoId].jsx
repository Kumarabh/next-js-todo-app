import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const todo = {
    id: '',
    userId: '',
    title: '',
    completed: ''
}

const TodoId = (props) => {

    const [todo, setTodo] = useState({
        id: '',
        userId: '',
        title: '',
        completed: ''
    })
    const todoId = useRouter().query.todoId;
    console.log('todoId', todoId)

    const getTodoListById = async() => {
        let url = 'https://jsonplaceholder.typicode.com/todos/'+ todoId;
        console.log('url', url);
        const response = await fetch(url);
        const jsonData = await response.json();
        setTodo(jsonData);
        console.log('todoListById', todo);

    }

    useEffect(() => {
        getTodoListById();
    }, [])

    console.log('props', props)
    return (
        <div className="card-container">
                    <div className="card-header">
                        Title: {todo.title}
                    </div>
                    <div className="card-body">
                        UserId: {todo.userId} <br />
                        id: {todo.id}
                    </div>
                    <div className="card-footer">
                        Completed: {todo.status ? '✔️' : '❌'}
                    </div>
                </div>
    )
}

export default TodoId