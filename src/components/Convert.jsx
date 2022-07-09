import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Swal from 'sweetalert2'
import Loader from '../components/Loader'
import '../css/convert.css'


export default function Convert() {
    const [word, setWord] = useState('')
    const [conCode, setConCode] = useState(uuidv4())
    const [getWord, setGetWord] = useState('')
    const [found, setFound] = useState('')
    const [mes, setMes] = useState('')
    const [messages, loading] = useCollectionData(
        firebase.firestore().collection('secretcode')
    )
    if (loading) {
        return <Loader />
    }
    const getCode = e => {
        e.preventDefault()
        if (word === '') {
            Swal.fire({
                title:'Error',
                text:'Empty field',
                icon:'error',
                confirmButtonText:'Okay'
            })
        } else {
            setConCode(uuidv4())
            firebase.firestore().collection('secretcode').add({
                word: word, conCode: conCode
            })
            Swal.fire({
                title: 'Congrats!',
                text: `Your secret code: ${conCode}`,
                icon: 'success',
                confirmButtonText: 'Copy to clipboard'
            })
            setMes('Sended')
            navigator.clipboard.writeText(conCode)
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
        <div className='cont-convert'>
            <h4>Welcome to secret code converter</h4>
            <h6>Enter your word and get code send this code to friend and with code he can read your secret word</h6>
            <div>
                <form onSubmit={getCode}>
                    <label htmlFor="code">Enter your word</label><br />
                    <input type="text" className='form-control' value={word} onChange={(e) => setWord(e.target.value)} name='code' aria-required />
                    <button type='submit' className='btn btn-success'>Submit</button>
                </form>
                <div className="message">
                    {mes}
                </div>
            </div>
            <div className='getword'>
                <form onSubmit={getWordDB}>
                    <label htmlFor='secret-code'>Find word by secret code</label><br />
                    <input type="text" className='form-control' value={getWord} onChange={(e) => setGetWord(e.target.value)} name="secret-code" />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
                <div>
                    Founded word(if not showing wait 15sec,refresh page and retry): {found}
                </div>
            </div>
        </div>
    )
}
