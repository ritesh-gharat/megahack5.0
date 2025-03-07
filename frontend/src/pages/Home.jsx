import React from "react";
import Navbar from "../components/homeComponents/Navbar";
import Season from "../components/Landing/Season";
import Chatbot from "../components/Chatbot/Chat";
import Location from "../components/homeComponents/Location";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Location />
      <Season />
      <Chatbot />
    </div>
  );
}
