import React, { useState, useEffect } from 'react';

const TypedText = ({ texts, typingSpeed = 100, loop = true }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // index within current word
  const [wordIndex, setWordIndex] = useState(0); // index of current word

  useEffect(() => {
    const fullText = texts[wordIndex % texts.length];

    if (index < fullText.length) {
      // keep typing
      const typingTimer = setTimeout(() => {
        setText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimer);
    } else {
      // full word typed → immediately go to next word
      const nextWordTimer = setTimeout(() => {
        setIndex(0);
        setWordIndex(loop ? (wordIndex + 1) % texts.length : wordIndex);
        setText(''); // reset text for new word
      }, typingSpeed); // no pause → just use typingSpeed delay

      return () => clearTimeout(nextWordTimer);
    }
  }, [index, wordIndex, texts, typingSpeed, loop]);

 return <span>{text || '\u00A0'}</span>; 
};

export default TypedText;
