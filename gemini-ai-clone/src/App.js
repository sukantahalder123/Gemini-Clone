import React, { useState, useEffect } from "react";
// import InputBox from './components/InputBox';
import "./App.css";
import Chat from "./Chat"; 
import { MenuOutlined, PlusOutlined, HistoryOutlined, SettingOutlined, QuestionCircleOutlined } from "@ant-design/icons";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [chatKey, setChatKey] = useState(0); 

  const handleSidebarToggle = (open) => {
    setIsSidebarOpen(open);
  };

  // Function to handle starting a new chat
  const handleNewChat = () => {
    setChatKey(prevKey => prevKey + 1); 
    setIsSidebarOpen(false);
    console.log("New Chat initiated!");
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isSidebarOpen]);

  return (
    <div className="LayoutContainer">
      {/* Menu button, always visible and fixed */}
      <div className="button-toggle">
        <span onClick={() => handleSidebarToggle(!isSidebarOpen)}>
          <MenuOutlined style={{ fontSize: "25px" }} />
        </span>
      </div>

      {/* Conditional Sidebar Rendering (Expanded or Collapsed) */}
      {isSidebarOpen ? (
        // --- EXPANDED SIDEBAR CONTENT (formerly Layout.js) ---
        <div className="sidebar">
          {/* New Chat Button */}
          <div className="new-chat-button" onClick={handleNewChat}>
            <PlusOutlined />
            <span>New Chat</span>
          </div>

          {/* Recent Chats Section */}
          <h3>Recent</h3>
          <ul>
            <li onClick={() => console.log("Recent Chat 1 clicked")}> 
              <HistoryOutlined />
              <span>My Recent Chat 1</span>
            </li>
            <li onClick={() => console.log("Recent Chat 2 clicked")}> 
              <HistoryOutlined />
              <span>My Recent Chat 2</span>
            </li>
            <li onClick={() => console.log("Chat about Web Dev clicked")}> 
              <HistoryOutlined />
              <span>Chat about Web Dev</span>
            </li>
          </ul>

          {/* Bottom options */}
          <ul style={{ marginTop: 'auto', width: '100%' }}>
            <li onClick={() => console.log("Settings clicked")}> 
              <SettingOutlined />
              <span>Settings</span>
            </li>
            <li onClick={() => console.log("Help & Feedback clicked")}> 
              <QuestionCircleOutlined />
              <span>Help & Feedback</span>
            </li>
          </ul>

          {/* Close Sidebar Button */}
          <button onClick={() => handleSidebarToggle(false)} className="close-button">
            Close Sidebar
          </button>
        </div>
      ) : (
        // --- COLLAPSED SIDEBAR CONTENT (formerly MiniSidebar.js) ---
        <div className="mini-sidebar">
          {/* New Chat Icon */}
          <div className="mini-sidebar-item new-chat-icon" onClick={handleNewChat}> 
            <PlusOutlined style={{ fontSize: "20px" }} />
          </div>

          {/* Recent History Icons */}
          <div className="mini-sidebar-item" onClick={() => handleSidebarToggle(true)}>
            <HistoryOutlined style={{ fontSize: "20px" }} />
          </div>
          <div className="mini-sidebar-item" onClick={() => handleSidebarToggle(true)}>
            <HistoryOutlined style={{ fontSize: "20px" }} />
          </div>

          {/* Bottom Icons */}
          <div className="mini-sidebar-bottom">
            <div className="mini-sidebar-item" onClick={() => handleSidebarToggle(true)}>
              <SettingOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="mini-sidebar-item" onClick={() => handleSidebarToggle(true)}>
              <QuestionCircleOutlined style={{ fontSize: "20px" }} />
            </div>
          </div>
        </div>
      )}

      <div className="App" style={{ width: `${isSidebarOpen ? "calc(100vw - 250px)" : "calc(100vw - 60px)"}` }}>
        <h1>Gemini AI</h1>
        <Chat key={chatKey} />
      </div>
    </div>
  );
}

export default App;