import { ReactNode } from "react";
import TodoList from "./TodoList";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        {/* バグ対策 */}
        {/* @ts-ignore */}
        <TodoList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  )
}