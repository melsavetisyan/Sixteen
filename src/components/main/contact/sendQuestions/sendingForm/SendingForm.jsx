import React, { useState, useRef } from "react";
import TelegramBot from "./botRequest/TelegramBot";
import formStyle from './formStyle.module.css'

export default function SendingForm(){
    const [data, setData] = useState({
        name:'',
        e_mail:'',
        subject:'',
        message:'',
    })
    const [nameRef, emailRef, subjectRef, messageRef] = [useRef(null), useRef(null),useRef(null),useRef(null) ]
    const refs = [nameRef, emailRef, subjectRef]
    const changeInput = (e, changedItem) => {
        setData({...data, [changedItem]: e.target.value})
        changedItem !== 'message'?
        e.target.className = e.target.value? formStyle.input: formStyle.errInput
        :e.target.className = e.target.value?  formStyle.textarea: formStyle.errTextArea
    }
    const handleSubmit = e => e.preventDefault()
    const token = '5785024906:AAGE2t7E3pQAoBWStaWryM-7HT9BCzcSb9w'
    const chat_id = '1440524069'

    const clearInputs = () => setData({
        name:'',
        e_mail:'',
        subject:'',
        message:''
    })
    const inpitError = () =>{
        refs.map(ref => ref.current.className = !ref.current.value? formStyle.errInput : formStyle.input)
        messageRef.current.className = !messageRef.current.value? formStyle.errTextArea : formStyle.textarea
    }
    return (
        <form onSubmit={handleSubmit} className={formStyle.form}>
            <input type="text"  ref={nameRef} value={data.name} className={formStyle.input} onInput={(e)=>changeInput(e, "name")} placeholder="Full Name"/> 
            <input type="email" ref={emailRef} value={data.e_mail} className={formStyle.input} onInput={(e)=>changeInput(e, "e_mail")} placeholder="E-Mail Adress"/> 
            <input type="text"  ref={subjectRef} value={data.subject} className={formStyle.input} onInput={(e)=>changeInput(e, "subject")} placeholder="Subject"/> 
            <textarea type="text"  ref={messageRef} value={data.message} className={formStyle.textarea} onInput={(e)=>changeInput(e, "message")} placeholder="Your Message"/> 
            <TelegramBot error={inpitError} clickbly={data.name && data.e_mail && data.subject && data.subject && data.message} clear={clearInputs} className={formStyle.button} token={token} chat_id={chat_id} body={`User: {\nName: ${data.name}\nE-mail: ${data.e_mail}\nSubject: ${data.subject}\n}\n\nMessage: ${data.message}`}>Send Message</TelegramBot>
        </form>
    )
}