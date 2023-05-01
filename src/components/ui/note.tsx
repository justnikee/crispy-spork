"use client"

import { useState } from "react"
import axios from "axios"


interface FormContent{
    title: string,
    content: string,
    id: string
}

export default function Note() {
    
const [form , setForm ] = useState<FormContent>({title: "", content: "", id: ""})

    async function create(data: FormContent) {
        try {
            await axios.post('/api/create', data)
                .then((res) => {
                    setForm({
                        title: '',
                        content: '',
                        id: ''
                })
            })

            // await fetch(`/api/create`, {
            //     body: JSON.stringify(data),
            //     headers: {
            //         'Content-Type' : 'application/json'
            //     },
            //     method: 'POST'
            // }).then(() => setForm({title: '', content: '', id: ''}))
        } catch (error) {
            
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
                className="w-[600px] p-10 flex flex-col justify-center itmes-center bg-slate-600 gap-5" 
                >
                    <input type="text"
                        placeholder="Enter Title..."
                        value={form.title}
                        onChange={(e) => setForm({...form , title: e.target.value})}
                        className="border-green-500 border text-black"
                    />
                    <textarea
                        placeholder="Enter Content..."
                        value={form.content}
                        onChange={(e) => setForm({...form, content: e.target.value})}
                        className="border-green-500 border text-black"
                    />

                    <button type="submit" className="bg-green-500 px-10 py-3">Add Note </button>

                </form>

                <div>

                </div>
            </div>
        </>
)
}