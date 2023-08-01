'use client'

import React from 'react';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-12 px-4 mx-auto bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        This chatbot could be tailored to your needs
      </h2>
      <div className="overflow-y-auto h-72">
        {messages.length > 0
          ? messages.map((m) => (
              <div
                key={m.id}
                className={`whitespace-pre-wrap ${
                  m.role === 'user' ? 'text-blue-600' : 'text-green-600'
                }`}
              >
                <strong>{m.role === 'user' ? 'User: ' : 'AI: '}</strong>
                {m.content}
              </div>
            ))
          : null}
      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}
