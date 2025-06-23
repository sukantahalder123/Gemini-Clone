import React from 'react';
import { PlusOutlined, HistoryOutlined, SettingOutlined, QuestionCircleOutlined } from '@ant-design/icons'; // Added icons for sidebar items
import './Layout.css'; // You can create a specific CSS for Layout if it gets complex

const Layout = ({ handlelayout }) => {
  return (
    <div className="sidebar">
      {/* New Chat Button */}
      <div className="new-chat-button">
        <PlusOutlined />
        <span>New Chat</span>
      </div>

      {/* Recent Chats Section */}
      <h3>Recent</h3>
      <ul>
        <li>
          <HistoryOutlined />
          <span>My Recent Chat 1</span>
        </li>
        <li>
          <HistoryOutlined />
          <span>My Recent Chat 2</span>
        </li>
        <li>
          <HistoryOutlined />
          <span>Chat about Web Dev</span>
        </li>
        {/* Add more recent chats as needed */}
      </ul>

      {/* Bottom options */}
      <ul style={{ marginTop: 'auto', width: '100%' }}> {/* Pushes items to the bottom */}
        <li>
          <SettingOutlined />
          <span>Settings</span>
        </li>
        <li>
          <QuestionCircleOutlined />
          <span>Help & Feedback</span>
        </li>
      </ul>

      {/* Close Sidebar Button */}
      <button onClick={() => handlelayout(false)} className="close-button">
        Close Sidebar
      </button>
    </div>
  );
};

export default Layout;