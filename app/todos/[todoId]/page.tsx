import { NOTFOUND } from "dns";
import { Todo } from "../../../typings";
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  const todo: Todo = await res.json();
  // console.log('This is the todos', todo)
  console.log('todoIdページが読み込まれた', todo.id)
  return todo;
}

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId)

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}:{todo.title}
      </p>
      <p>Complete: {todo.completed ? "Yes" : "No"}</p>

      <p className="border-t border-black mt-5 text-right">By User: {todo.userId}</p>
    </div>
  );
}

export default TodoPage;

// ビルド時に性的なページを生成する
// export async function generateStaticParams() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
//   const todos: Todo[] = await res.json();

//   // const trimmedTodos = todos.splice(0, 3);

//   return todos.map((todo) => ({
//     todoId: todo.id.toString()
//   }))
// }