import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


export default function Convert() {
    const [word, setWord] = useState('')
    const [conCode, setConCode] = useState(uuidv4())
    const [getWord, setGetWord] = useState('')
    const [found, setFound] = useState('')
    const [mes,setMes] = useState('')
    const [messages, loading] = useCollectionData(
        firebase.firestore().collection('messages')
    )
    if (loading) {
        return 'loading'
    }
    const getCode = e => {
        e.preventDefault()
        if (word === '') {
            alert('Empty field')
        } else {
            setConCode(uuidv4())
            firebase.firestore().collection('messages').add({
                word: word, conCode: conCode
            })
            alert(`Your code : ${conCode} copy and save it!`)
            setMes('Sended')
            setWord('')
        }
    }

    const getWordDB = e => {
        e.preventDefault();
        messages.map((message) => (
            message.conCode === getWord ?
                setFound(message.word)
                : null
        ))
        setGetWord('')
    }
    return (
        <div>
            <h4>Welcome to secret code converter</h4>
            <form onSubmit={getCode}>
                <label htmlFor="code">Enter your word</label><br />
                <input type="text" value={word} onChange={(e) => setWord(e.target.value)} name='code' aria-required />
                <button type='submit'>Submit</button>
            </form>
            <div className="message">
                {mes}
            </div><br /><hr />
            <form onSubmit={getWordDB}>
                <label htmlFor='secret-code'>Find word by secret code</label><br />
                <input type="text" value={getWord} onChange={(e) => setGetWord(e.target.value)} name="secret-code" />
                <button type='submit'>Submit</button>
            </form>
            <div>
                Founded word: {found}
            </div>
        </div>
    )
}
