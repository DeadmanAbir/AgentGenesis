// src/app/(app)/components/Chatbot.tsx
import React, { useEffect } from 'react';

const Chatbot: React.FC = () => {
  useEffect(() => {
    // Create and append the configuration script for Chatbase
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "CgIoEqUF_3FxcQasT8MFb",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(configScript);

    // Load the Chatbase embed script
    const chatbotScript = document.createElement('script');
    chatbotScript.src = 'https://www.chatbase.co/embed.min.js';
    chatbotScript.setAttribute('chatbotId', 'CgIoEqUF_3FxcQasT8MFb');
    chatbotScript.setAttribute('domain', 'www.chatbase.co');
    chatbotScript.setAttribute('defer', '');
    document.body.appendChild(chatbotScript);

    // Cleanup scripts on component unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(chatbotScript);
    };
  }, []);

  return null; // No additional UI elements needed
};

export default Chatbot;
