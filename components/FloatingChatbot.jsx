import React, { useState } from 'react';

const EmojiPicker = ({ onSelectEmoji }) => {
    const emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '😊', '😇',
        '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
        '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
        '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥',
        // Add more emojis as needed
    ];

    const handleEmojiClick = (emoji) => {
        onSelectEmoji(emoji);
    };

    return (
        <div className="flex flex-wrap">
            {emojis.map((emoji, index) => (
                <span
                    key={index}
                    className="cursor-pointer text-2xl p-2 hover:bg-gray-300"
                    onClick={() => handleEmojiClick(emoji)}
                >
                    {emoji}
                </span>
            ))}
        </div>
    );
};

const FloatingChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [inputFile, setInputFile] = useState(null);
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleFileChange = (e) => {
        setInputFile(e.target.files[0]);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                type: 'text',
                content: inputText.trim(),
                timestamp: new Date(),
            };
            setMessages([...messages, newMessage]);
            setInputText('');
        }
    };

    const handleSendFile = () => {
        if (inputFile) {
            const newMessage = {
                type: 'file',
                file: inputFile,
                timestamp: new Date(),
            };
            setMessages([...messages, newMessage]);
            setInputFile(null);
        }
    };

    const handleToggleEmojiPicker = () => {
        setEmojiPickerOpen(!emojiPickerOpen);
    };

    const handleSelectEmoji = (emoji) => {
        setInputText(inputText + emoji);
    };

    const handleCloseChatbot = () => {
        setIsOpen(false);
        setMessages([]);
        setInputText('');
        setInputFile(null);
    };

    return (
        <div className={`fixed bottom-4 right-4 transition-right duration-300 ${isOpen ? 'right-0 h-[7.0in] w-[4.7in] bg-white rounded-md' : ''}`}>
            {isOpen ? (
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4">
                        <div>
                            <h2 className="text-xl font-bold mb-1">Mardia Engineering Canada</h2>
                            <div className="flex items-center">
                                <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
                                <p>We'll reply as soon as we can</p>
                            </div>
                        </div>
                        <button
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={handleCloseChatbot}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className="mb-2">
                                {message.type === 'text' && (
                                    <p>{message.content}</p>
                                )}
                                {message.type === 'file' && (
                                    <div>
                                        <p>File: {message.file.name}</p>
                                        <p>Size: {message.file.size} bytes</p>
                                        <p>Type: {message.file.type}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="p-4">
                        <div className="flex items-center">
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none mr-2"
                                onClick={handleToggleEmojiPicker}
                            >
                                <span role="img" aria-label="Emoji">😃</span>
                            </button>
                            <form onSubmit={handleSendMessage}>
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={handleInputChange}
                                    placeholder="Type a message"
                                    className="mr-2 border rounded-md p-2 flex-grow"
                                />
                                <input type="submit" value="send" />
                            </form>

                            <div className="relative inline-block">
                                <label htmlFor="file-input" className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                    </svg>
                                    <input
                                        id="file-input"
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                        {emojiPickerOpen && (
                            <div className="absolute right-0 mt-8 bg-white shadow-md rounded-md p-2">
                                <button
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                    onClick={handleToggleEmojiPicker}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                                <div className="mt-2">
                                    <EmojiPicker onSelectEmoji={handleSelectEmoji} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    onClick={toggleChatbot}
                >
                    Let's Chat
                </button>
            )}
        </div>
    );
};

export default FloatingChatbot;
