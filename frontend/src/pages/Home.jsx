import Vendors from '../components/HomeComponents/Vendor'
import Chat from '../components/chatbot/Chat'
import Location from '../components/HomeComponents/Location'
import Navbar from '../components/HomeComponents/Navbar'
import Season from '../components/HomeComponents/Season'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Location/>
      <Vendors/>
      <Season/>
      <Chat/>
    </div>
  );
}
