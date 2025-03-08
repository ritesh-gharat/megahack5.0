import Vendors from '../components/HomeComponents/Vendor'
import Chat from '../components/Chatbot/Chat'
import Location from '../components/HomeComponents/Location'
import Navbar from '../components/HomeComponents/Navbar'
import Season from '../components/Landing/Season'
import ActiveBids from '../components/ActiveBids'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Location/>
      <ActiveBids/>
      <Vendors/>
      <Season/>
      <Chat/>
    </div>
  );
}
