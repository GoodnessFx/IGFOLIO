import Styles from './ContactStyles.module.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  function handleSubmit(event) {
    event.preventDefault()
    if (!formRef.current) return
    setStatus({ state: 'sending', message: 'Sending…' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    emailjs
      .sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(() => {
        setStatus({ state: 'sent', message: 'Message sent! I will get back to you soon.' })
        formRef.current?.reset()
      })
      .catch(() => {
        setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
      })
  }

  return (
   <section id="contact" className={Styles.container}>
    <h1 className="sectionTitle">Contact</h1>
   <form ref={formRef} onSubmit={handleSubmit}>
    <div className="formGroup">
        <label htmlFor="name" hidden>
          Name
        </label>

        <input 
        type ="text"
        name ="from_name"
        id="name"
        placeholder="Name" required />
       
    </div>
     <div className="formGroup">
        <label htmlFor="email" hidden>
            Email
        </label>

        <input 
        type ="email"
        name="reply_to"
        id="email"
        placeholder="Email" required />
       
    </div>
     <div className="formGroup">
        <label htmlFor="message" hidden>
           Message
        </label>

     <textarea
       
       name="message"
        id="message"
        placeholder="Message" 
        required></textarea>
       
    </div>
    <input className="hover btn" type="submit"
    value={status.state === 'sending' ? 'Sending…' : 'Submit'} disabled={status.state === 'sending'} />
    {status.message && <p aria-live="polite">{status.message}</p>}
   </form>
   </section>
  );
}

export default Contact