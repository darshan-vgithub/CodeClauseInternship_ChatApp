import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import "./app.css"
import ChatProvider from "./Context1/ChatProvider1";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chats" element={<ChatPage />} />
            </Routes>
          </ChatProvider>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
