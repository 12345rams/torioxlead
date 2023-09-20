// Chatbot.js

import React, { Component } from 'react';
import './chatbot.css';

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userInput: '',
      isOpen: false,
    };

    this.defaultQuestions = [
      "Tell me about your products.",
      "How can I contact customer support?",
      "What are your business hours?",
    ];
  }

  toggleChatbot = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleUserSubmit = () => {
    const userInput = this.state.userInput.trim();

    if (userInput) {
      this.addMessage({ text: userInput, type: 'user' });
      this.setState({ userInput: '' });

      // Process the user input and generate a chatbot response
      const botResponse = this.generateChatbotResponse(userInput);

      this.addMessage({ text: botResponse, type: 'bot' });
    }
  };

  generateChatbotResponse = (userInput) => {
    // Add your custom logic here to generate chatbot responses based on user input.
    // You can use conditional statements, switch cases, or call external APIs for more advanced responses.

    // For demonstration purposes, let's provide a simple response.
    if (userInput.toLowerCase().includes('product')) {
      return 'Our products include a wide range of electronics and gadgets.';
    } else if (userInput.toLowerCase().includes('contact')) {
      return 'You can contact our customer support team at support@example.com.';
    } else if (userInput.toLowerCase().includes('business hours')) {
      return 'Our business hours are from 9:00 AM to 6:00 PM, Monday to Friday.';
    } else {
      return 'I am a chatbot. How can I assist you further?';
    }
  };

  addMessage = (message) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, message],
    }));
  };

  componentDidMount() {
    // Add a welcome message when the chatbot is opened
    this.addMessage({ text: 'Welcome! How can I assist you?', type: 'bot' });

    // Add default questions to the chat
    this.defaultQuestions.forEach((question) => {
      this.addMessage({ text: question, type: 'bot' });
    });
  }

  render() {
    return (
      <div className={`chatbot-container ${this.state.isOpen ? 'open' : 'closed'}`}>
        <div className="chatbot-header">
          Chatbot
          <button className="close-button" onClick={this.toggleChatbot}>
            {this.state.isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        <div className="message-history">
          {this.state.messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={this.state.userInput}
          onChange={this.handleUserInput}
          className="user-input"
        />
        <button onClick={this.handleUserSubmit} className="send-button">
          Send
        </button>
      </div>
    );
  }
}

export default ChatBot;
