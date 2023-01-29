import Link from 'next/link';
import { Todo } from '../../typings';

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  // console.log('This is the todos', todos)
  console.log('todoリストが読み込まれた')
  return todos;
}

async function TodoList() {
  const todos = await fetchTodos()
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Tido: {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodoList;

