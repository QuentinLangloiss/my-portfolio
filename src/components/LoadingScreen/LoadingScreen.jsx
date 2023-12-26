import { useState, useEffect } from 'react';
import './LoadingScreen.scss';

const greetings = [
  "Bonjour", // Français
  "Hello",   // Anglais
  "Hola",    // Espagnol
  "Ciao",    // Italien
  "こんにちは", // Japonais
  "안녕하세요", // Coréen
  "Hallo",   // Allemand
  "Привет",  // Russe
  "नमस्ते",    // Hindi
  "Hej"      // Danois
];

const LoadingScreen = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loading-screen">
      <h1>{greetings[greetingIndex]}</h1>
    </div>
  );
};

export default LoadingScreen;
