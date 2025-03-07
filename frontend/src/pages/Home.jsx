import React from 'react'
import Navbar from '../components/homeComponents/Navbar'
import Season from '../components/Landing/Season'
import Location from '../components/homeComponents/Location'
import Vendors from '../components/HomeComponents/Vendor'
import Chat from '../components/chatbot/Chat'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Location/>
      <Vendors/>
      <Season/>
      <Chat/>
    </div>
  )
}
