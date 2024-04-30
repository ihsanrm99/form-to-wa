import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [message,setMessage] = useState("")
  

  const sendMessageToWhatsapp = () => {
    const urlToWhatsapp = `https://wa.me/6281212901337?text=Halo, nama saya ${name}, ${message}`
    window.open(urlToWhatsapp, '_blank')
    setName("");
    setMessage("");
  }

  return (
    <div className='max-w-xl w-full mx-auto text-center min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold sm:text-3xl'>Form To Whatsapp</h1>
      <form action='#' className='mx-auto mb-0 mt-8 max-w-md space-y-4' onSubmit={() => sendMessageToWhatsapp()}>
        <input
          type='text'
          className='w-full rouded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-blue-500 focus:outline-none'
          placeholder='masukan nama anda'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='text'
          className='w-full rouded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm focus:border-blue-500 focus:outline-none'
          placeholder='masukan pesan anda...'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          type='submit'
          className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white w-full'
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  )
}

export default App
