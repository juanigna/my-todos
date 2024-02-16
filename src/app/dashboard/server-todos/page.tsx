export const dynamic = 'auto'
export const revalidate = 0;

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/components/todos";


export const metadata = {
    title: 'Listado de todos',
    description: 'Listado de todos',
};

export default async function ServerTodoPage() {

    const todos = await prisma.todo.findMany({
        orderBy: {
            description: 'asc'
        }
    })

    return (
        <>
            <span className="text-3xl mb-10">Server Actions</span>
            <div className="w-full px-5 mx-5 mb-5">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </>
    );
}