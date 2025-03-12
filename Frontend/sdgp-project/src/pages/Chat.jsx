import React, { useEffect, useRef, useState } from "react";
import "../style/Chat.css";
import Header from "../components/Header";
function Chat() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState(true);
  const [role, setRole] = useState("");
  const [question, setQuestion] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  // voice assistance
  const startListening = () => {
    if (!SpeechRecognition) {
      console.error("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }

      setUserInput(finalTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      if (userInput.trim() !== "") {
        handleSubmit(new Event("submit"));
      }
    };

    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speak = (text) => {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    synthesis.speak(utterance);
  };

  useEffect(() => {
    if (chatHistory.length > 0) {
      const lastResponse = chatHistory[chatHistory.length - 1].bot;
      speak(lastResponse);
    }
  }, [chatHistory]);
  // end voice assistant

  // event handlers
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let isQuestion = false;
      let generatedText = "";

      if (initial) {
        const response = await fetch(`http://localhost:8080/generate-question?role=${userInput}`);
        if (!response.ok) throw new Error("Failed to fetch");
        setRole(userInput);
        generatedText = await response.text();
        setInitial(!initial);
        isQuestion = true; // This is a question
        setChatHistory([...chatHistory, { user: userInput, bot: generatedText, isQuestion }]);
        setUserInput("");
        setInitial(!initial);
      } else if (!question) {
        const response = await fetch(`http://localhost:8080/generate-alternate-question?role=${role}`);
        if (!response.ok) throw new Error("Failed to fetch");
        generatedText = await response.text();
        isQuestion = true; // Alternate question, still a question
        setChatHistory([...chatHistory, { user: userInput, bot: generatedText, isQuestion }]);
        setUserInput("");
        setQuestion(!question);
      } else {
        const lastQuestion = chatHistory[chatHistory.length - 1].bot;
        const response = await fetch(`http://localhost:8080/generate-feedback?question=${encodeURIComponent(lastQuestion)}&answer=${encodeURIComponent(userInput)}`);
        if (!response.ok) throw new Error("Failed to fetch");
        generatedText = await response.text();
        isQuestion = false; // This is feedback
        setChatHistory([...chatHistory, { user: userInput, bot: generatedText, isQuestion }]);
        setUserInput("");
        setQuestion(!question);

      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };


  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleClear = () => {
    setChatHistory([]);
    setUserInput("");
  };

  return (
    <div>
      <Header />
      <div className="chat-component">
        <button className="chat-button" onClick={toggleInput}>
          {showInput ? "Close Chat" : "Ask a Question"}
        </button>
        {showInput && (
          <div className={`chat-box ${showInput ? "show" : ""}`}>
            <div id="container">
              <div className="container-inner">
                <div className="content">
                  {chatHistory.length === 0 ? (
                    <p className="welcome-message">
                      Welcome to the Interview! Tell me the job you prefer to start a conversation
                      with the Interviwer Emilian.
                    </p>
                  ) : (
                    chatHistory.map((chat, index) => (
                      <div key={index}>
                        <p className="user-message">
                          <strong>You:</strong> {chat.user}
                        </p>
                        <p className="teacher-response">
                          <strong>{chat.isQuestion ? "Interviewer:" : "Feedback:"}</strong> {chat.bot}
                        </p>
                      </div>
                    ))
                  )}
                </div>
                <div className="input-container">
                  {question ? (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        value={userInput}
                        onChange={handleUserInput}
                        placeholder={initial ? "Type your job..." : "Type your answer..."}
                        required
                      />
                      {SpeechRecognition && (
                        <button
                          type="button"
                          onMouseDown={startListening}
                          onMouseUp={stopListening}
                          onTouchStart={startListening}
                          onTouchEnd={stopListening}
                        >
                          {isListening ? "Listening..." : "Hold to Speak"}
                        </button>
                      )}
                      <button type="submit" disabled={loading}>
                        <i className="send-icon">{loading ? "Sending..." : "➤"}</i>
                        <span>Send</span>
                      </button>
                    </form>
                  ) : (
                    <button onClick={handleSubmit}>
                      Next Question
                    </button>
                  )}
                </div>
                {chatHistory.length > 0 && (
                  <div className="buttons">
                    <button
                      type="button"
                      className="confirm"
                      onClick={toggleInput}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="cancel"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Chat;