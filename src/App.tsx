import {FormEvent, useContext, useState} from 'react'
import './App.css'
import AuthContext from "./contexts/AuthContext.ts";

function App() {
    const {token, setToken} = useContext(AuthContext)
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        setToken({...token})
    }

    return (
        <form action="" onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: 5}}>
            <input type="text" placeholder="Email: "/>
            <input type="text" placeholder="Password: "/>
        </form>
    )
}

export default App
