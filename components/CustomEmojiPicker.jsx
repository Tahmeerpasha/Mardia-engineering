import React from 'react';
import { EmojiPicker } from 'emoji-picker-react';

const CustomEmojiPicker = ({ onSelectEmoji }) => {
    const handleEmojiClick = (event, emojiObject) => {
        onSelectEmoji(emojiObject.emoji);
    };

    return (
        <div>
            <EmojiPicker onEmojiClick={handleEmojiClick} disableAutoFocus={true} />
        </div>
    );
};

export default CustomEmojiPicker;
