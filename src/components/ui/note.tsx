"use client"

import { useState } from "react"
import axios from "axios"
import prisma from "../../../prisma/client"

interface FormContent{
    title: string,
    content: string,
    id: string
}


export default function Note() {
    
const [form , setForm ] = useState<FormContent>({title: "", content: "", id: ""})


    async function create(data: FormContent) {
        try {
            await axios.post('/api/notes', data)
                .then((data) => {
                    setForm({
                        title: '',
                        content: '',
                        id: ''
                })
            })
        } catch (error) {
            console.log(error)
        }
    }


    const handleSubmit = async (data: FormContent) => {
        try {
            create(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Create Your Notes:</h1>
            <div className="w-full flex justify-center h-full items-center">
                <form onSubmit={e => {
                    e.preventDefault()
                    handleSubmit(form)
                }}
                className="w-[600px] p-10 flex flex-col justify-center itmes-center bg-gray-200 gap-5" 
                >
                    <input type="text"
                        placeholder="Enter Title..."
                        value={form.title}
                        onChange={(e) => setForm({...form , title: e.target.value})}
                        className="border-green-500 border text-black px-2 rounded-md py-1"
                    />
                    <textarea
                        placeholder="Enter Content..."
                        value={form.content}
                        onChange={(e) => setForm({...form, content: e.target.value})}
                        className="border-green-500 border text-black px-2 rounded-md "
                    />

                    <button type="submit" className="bg-green-500 px-10 py-3 uppercase">Add Note </button>

                </form>

                <div>

                    <div>
                        {/* {notes.map((note) => {
                            <span key={note.id}>
                                <span>{note.title}</span>
                                <span>{ note.content }</span>
                            </span>
                        }) } */}
                        </div>

                </div>
            </div>
        </>
)
}