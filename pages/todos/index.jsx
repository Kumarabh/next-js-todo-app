import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Todos = () => {

    const [todoList, setTodoList] = useState([]);

    const getTodoList = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await response.json();
        setTodoList(jsonData.splice(0, 10)); 
    }

    useEffect(() => {
        getTodoList();
    }, [])

  return (
    <>
        {
        todoList.map((todo, index) => {
            return (
                <div>
                    <Link href={'todos/' +todo.id} key={index}>todo: {todo.id}</Link>
                </div>
            )
        })}
    </>
  )
}

// export const getStaticProps = async() => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await data.json();
//     console.log('getStaticProps', posts);
//     return {
//         props: {
//             posts
//         }
//     }
// }


export default Todos