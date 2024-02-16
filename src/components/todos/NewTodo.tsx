'use client';

import { addTodo, deleteCompletedTodos } from "@/app/actions/todo-actions";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";


const NewTodo = () => {
    const [description, setDescription] = useState('')

    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault()
        if (description.trim() === '') return

        await addTodo(description)
        setDescription('')
    }

    return (
        <form className='flex w-full' onSubmit={onSubmit} >
            <input type="text"
                className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                placeholder="¿Qué necesita ser hecho?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
                Crear
            </button>

            <span className='flex flex-1'></span>

            <button
                onClick={() => deleteCompletedTodos()}
                type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
                <IoTrashOutline />
                <span>Borrar completados</span>
            </button>


        </form>
    )
}

export default NewTodo