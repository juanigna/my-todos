"use client"

import { Todo } from "@prisma/client"
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"
import { startTransition, useOptimistic } from "react"
import { toggleTodo } from "@/app/actions/todo-actions"

interface Props {
    todo: Todo
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

const TodoItem = ({ todo }: Props) => {
    const [todoOptimistic, toggleTodoOptmistic] = useOptimistic(
        todo,
        (state, newCompleteValue: boolean) => ({ ...state, complete: newCompleteValue })
    )

    const onToggleTodo = async () => {
        try {
            startTransition(() => toggleTodoOptmistic(!todoOptimistic.complete))
            await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
        } catch (err) {
            startTransition(() => toggleTodoOptmistic(!todoOptimistic.complete))
        }
    }

    return (
        <div className={` ${todoOptimistic.complete ? ' todoDone ' : ' todoPending '} `}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

                <div
                    onClick={onToggleTodo}
                    className={`
                    flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100
                `}>
                    {
                        todoOptimistic.complete ? (
                            <IoCheckboxOutline size={30} className="text-green-500" />
                        ) : (
                            <IoSquareOutline size={30} className="text-red-500" />
                        )
                    }
                </div>

                <div className="text-center sm:text-left">
                    {todoOptimistic.description}
                </div>

            </div>
        </div >
    )
}

export default TodoItem