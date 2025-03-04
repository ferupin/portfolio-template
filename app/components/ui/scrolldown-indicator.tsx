import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Fade in/out animation
    const fadeInterval = setInterval(() => {
      setOpacity(prev => {
        if (prev <= 0.3) return 0.3
        if (prev >= 1) return 0.99  // Avoid getting stuck at exactly 1
        return prev > 0.65 ? prev - 0.01 : prev + 0.01
      })
    }, 30)

    // Hide on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(fadeInterval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center transition-all duration-700 ease-in-out"
      style={{ opacity }}
    >
      <p className="text-md font-medium mb-2 text-center bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
        Role para explorar
      </p>
      
      <div className="flex flex-col items-center">
        <ChevronDown className="animate-bounce w-6 h-6 text-pink-400" />
      </div>
    </div>
  )
}

export default ScrollDownIndicator