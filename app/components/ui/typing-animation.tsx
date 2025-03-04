import React, { useState, useEffect, useRef } from 'react'

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [showFlag, setShowFlag] = useState(false)
  
  // Hello World in different languages with their respective country flags
  const phrases = [
    { text: 'Hello World.', flag: '🇺🇸' },
    { text: 'Olá Mundo.', flag: '🇧🇷' },
    { text: 'Bonjour le Monde.', flag: '🇫🇷' },
    { text: 'こんにちは世界。', flag: '🇯🇵' },
    { text: 'Hallo Welt.', flag: '🇩🇪' },
    { text: 'Hola Mundo.', flag: '🇪🇸' },
    { text: 'Ciao Mondo.', flag: '🇮🇹' },
    { text: '你好，世界。', flag: '🇨🇳' },
  ]

  // Fix: properly type the timer ref to accept NodeJS.Timeout
  const timer = useRef<NodeJS.Timeout | null>(null)

  // For client-side only execution in Remix
  useEffect(() => {
    // Only run the effect on the client
    const currentPhrase = phrases[currentPhraseIndex].text
    
    // Set typing speed - faster when deleting
    const speed = isDeleting ? typingSpeed / 2 : typingSpeed
    
    // Clear previous timeout
    if (timer.current) clearTimeout(timer.current)
    
    // Handle typing and deleting logic
    if (!isDeleting && displayText === currentPhrase) {
      // Show flag when phrase is complete
      setShowFlag(true)
      // Pause at the end of typing a complete phrase
      timer.current = setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && displayText === '') {
      // Hide flag when completely deleted
      setShowFlag(false)
      // Move to next phrase when current one is fully deleted
      setIsDeleting(false)
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
      // Pause before starting the next phrase
      timer.current = setTimeout(() => {}, 500)
    } else {
      // Handle typing and deleting
      timer.current = setTimeout(() => {
        setDisplayText(prev => 
          isDeleting 
            ? prev.substring(0, prev.length - 1) 
            : currentPhrase.substring(0, prev.length + 1)
        )
      }, speed)
    }
    
    // Cleanup
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [displayText, isDeleting, currentPhraseIndex, typingSpeed])

  return (
    <div className="max-w-lg">
      <h1 className="text-5xl flex flex-wrap items-center">
        <span className="break-words">{displayText}</span>
        <span className="inline-block w-1 h-12 bg-current animate-[pulse_1s_infinite]">
          {/* Intentionally empty - the styling creates the cursor */}
        </span>
        {showFlag && (
          <span className="ml-4 text-2xl opacity-100 transition-opacity duration-500">
            {phrases[currentPhraseIndex].flag}
          </span>
        )}
      </h1>
    </div>
  )
}