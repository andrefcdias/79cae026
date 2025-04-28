import { useEffect, useRef, useState } from "react";
import "./Assistant.css";

const FancyLoader = () => {
  return <div className="fancy-loader"></div>;
};

type Chat = {
  sender: "user" | "assistant" | "loading";
  text: string;
};

export const Assistant = () => {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [chats, setChats] = useState([] as Chat[]);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleOpenAssistant = () => {
    setAssistantOpen(true);
  };

  const handleCloseAssistant = () => {
    setAssistantOpen(false);
  };

  const handleQuerySubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const query = (event.target as HTMLInputElement).value;
      console.log("logged", chats);

      setChats((currentChats) =>
        currentChats.concat({ sender: "user", text: query })
      );

      // simulate a loading state
      setTimeout(() => {
        setChats((currentChats) =>
          currentChats.concat({ sender: "loading", text: "" })
        );

        setTimeout(() => {
          setChats((currentChats) => {
            console.log(currentChats);
            const lastChat = currentChats[currentChats.length - 1];
            const newChats = currentChats;
            if (lastChat.sender === "loading") {
              newChats.pop();
            }

            return newChats.concat({
              sender: "assistant",
              text: "I'm afraid that I am not sentient at all and can't answer this question... yet.",
            });
          });
        }, 1000 + Math.random() * 2000);
      }, 200);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollBy({
      top: chatRef.current.scrollHeight,
    });
  }, [chats]);

  return (
    <>
      {assistantOpen && (
        <div className="assistant">
          <div className="assistant-header">
            <h1>AI Assistant</h1>
            <button onClick={handleCloseAssistant}>x</button>
          </div>
          <div ref={chatRef} className="assistant-chat">
            <div className="assistant-chat-message assistant-chat-welcome">
              Please ask our AI assistant your most difficult questions!
            </div>
            {chats.map((chat) => (
              <>
                {chat.sender === "loading" && (
                  <div className="assistant-response-loading">&nbsp;</div>
                )}
                {chat.sender !== "loading" && (
                  <div
                    className={`assistant-chat-message ${
                      chat.sender !== "user" && "assistant-response"
                    }`}
                  >
                    {chat.text}
                  </div>
                )}
              </>
            ))}
          </div>
          <input className="assistant-query" onKeyUp={handleQuerySubmit} />
        </div>
      )}
      <button className="assistant-trigger" onClick={handleOpenAssistant}>
        AI
      </button>
    </>
  );
};
