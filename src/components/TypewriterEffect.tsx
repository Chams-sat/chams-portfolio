
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 1500,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isWaiting) {
        timeout = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenPhrases);
        return;
      }
      
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          timeout = setTimeout(handleTyping, typingSpeed);
        } else {
          setIsWaiting(true);
          timeout = setTimeout(handleTyping, delayBetweenPhrases);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
          timeout = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          timeout = setTimeout(handleTyping, typingSpeed);
        }
      }
    };
    
    timeout = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, isWaiting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return (
    <span className="inline-block relative">
      {currentText}
      <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-highlight animate-blink"></span>
    </span>
  );
};

export default TypewriterEffect;
