import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Send, X, Loader2, Bot, User } from "lucide-react";
import { useLoc } from "../../Context/DistContext";
// import { useContext } from "react";
// import { LocContext } from "../../Context/DistContext";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  // const [state, setState] = useState("Maharashtra");
  const [isLoading, setIsLoading] = useState(false);

  // const distcon = useContext(LocContext);
  // distcon.setdist(state);

  // const district = distcon.dist;

  // const distri = useLoc().dist;
  // useLoc().setdist("thane");
  // console.log(distri);

  const state_c = useLoc().state;

  useEffect(() => {
    setMessages([
      {
        text: "Hello! I'm your farming assistant. How can I help you today?",
        sender: "bot",
      },
    ]);
  }, [state_c]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    const userInput = input;
    setInput("");

    try {
      setIsLoading(true);
      const response = await fetch(
        `http://34.121.0.250:8000/chat/${state_c}/${encodeURIComponent(
          userInput
        )}`
      );
      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;
      const cleanedResponse = botResponse
        .replace(/\*/g, "")
        .replace(/(\d+\.?\d*)/g, "₹$1")
        .trim();

      setMessages((prev) => [
        ...prev,
        { text: cleanedResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true);
          const button = document.querySelector(".chat-button");
          if (button) {
            button.style.display = "none";
          }
        }}
        className="fixed z-20 flex justify-center items-center bottom-4 right-4 rounded-4xl p-4 shadow-lg chat-button"
      >
        <Bot className="w-6 h-10 mr-1" />
        <h3> Chat with us </h3>
      </Button>

      {isOpen && (
        <div
          className="z-20 fixed inset-y-0 right-0 bg-opacity-50 flex items-center p-4
            w-full sm:w-[400px] md:w-[450px]
            transition-all duration-300 ease-in-out"
        >
          <div className="z-20 relative w-full h-full md:h-auto bg-transparent  backdrop-blur-2xl">
            <Button
              onClick={() => {
                setIsOpen(false);
                const button = document.querySelector(".chat-button");
                if (button) {
                  button.style.display = "flex";
                }
              }}
              className="z-20 absolute top-2 right-2 md:-top-2 md:-right-2 rounded-full p-2 bg-red-600 hover:bg-red-700 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="z-20 w-full h-full md:h-auto p-4 bg-gray-500 rounded-lg shadow-xl border-2 border-green-200">
              <h2 className="text-l font-bold text-green-300 mb-4 text-center flex items-center justify-center gap-2">
                <Bot className="w-6 h-6" />
                Farmer Assistant
              </h2>
              <Card className="h-[calc(100vh-280px)] md:h-96 overflow-y-auto p-4  rounded-lg border border-green-100">
                <CardContent>
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`p-3 text-l  font-medium my-2 rounded-lg max-w-xs flex items-start gap-2  ${
                        msg.sender === "user"
                          ? "bg-violet-400 text-white self-end ml-auto"
                          : "bg-green-300 text-green-900"
                      }`}
                    >
                      {msg.sender === "bot" ? (
                        <Bot className="w-4 h-4 mt-1 flex-shrink-0 mr-3 " />
                      ) : (
                        <User className="w-4 h-4 mt-1 flex-shrink-0 ml-3" />
                      )}
                      <span>{msg.text}</span>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="p-3 text-l font-medium my-2 rounded-lg max-w-xs flex items-start gap-2 bg-green-400 text-green-900">
                      <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
                      <div className="flex items-center">
                        <span className="dots-loading">..</span>
                        <style jsx>{`
                          .dots-loading:after {
                            content: "...";
                            animation: dots 1.5s steps(5, end) infinite;
                            display: inline-block;
                            width: 0;
                            overflow: hidden;
                            vertical-align: bottom;
                          }
                          @keyframes dots {
                            0%,
                            20% {
                              width: 0;
                            }
                            40% {
                              width: 0.3em;
                            }
                            60% {
                              width: 0.6em;
                            }
                            80%,
                            100% {
                              width: 1em;
                            }
                          }
                        `}</style>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              <div className="text-l font-medium flex flex-col gap-2 mt-4">
                <div className="flex gap-2"></div>
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSend();
                      }
                    }}
                    placeholder="Ask your question here..."
                    className="flex-1 border-green-200 focus:ring-green-500 focus:border-green-500 text-white"
                  />
                  <Button
                    onClick={handleSend}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
