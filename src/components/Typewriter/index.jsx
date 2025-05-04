import { useState, useEffect } from 'react';

const texts = ['profissionais', 'empresas', 'serviços'];

export default function Typewriter({ speed = 100, pause = 1500 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentText('');
        setTextIndex((textIndex + 1) % texts.length);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, pause, speed, textIndex]);

  return (
    <h2 className="text-xl font-semibold">
      {currentText}
      <span className="animate-pulse"></span>
    </h2>
  );
}
