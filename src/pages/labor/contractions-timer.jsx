import React, { useState, useEffect } from 'react'

const ContractionsTimer = () => {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [currentTime, setCurrentTime] = useState()
  const [timeDifference, setTimeDifference] = useState()
 
  
  const handleStartClick = () => {
    setIsActive(!isActive)
    const time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }

  const calculateTimeDifference = (start, end) => {
    start = start.split(":")
    end = end.split(":")
    const startDate = new Date(0, 0, 0, start[0], start[1], start[2])
    const endDate = new Date(0, 0, 0, end[0], end[1], end[2])
    let diff = endDate.getTime() - startDate.getTime()
    const hours = Math.floor(diff / 1000 / 60 / 60)
    diff -= hours * 1000 * 60 * 60
    const minutes = Math.floor(diff / 1000 / 60)
    const seconds = Math.floor(diff /1000)

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + ":" + (seconds <= 9 ? "0" : "") + seconds

  }

  const handleStopClick = () => {
    setCount(count + 1)
    setIsActive(!isActive)
    const time = new Date().toLocaleTimeString()
    const diff = calculateTimeDifference(currentTime, time)
    setTimeDifference(diff)
  }

  const resetClick = () => {
    setSeconds(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <>
      {/* time contraction lasts */}
      <div>{seconds}s</div>
      {/* Number of contractions */}
      <div>{count}</div>
      {/* Time between start of contraction and end of contraction, but really want time between end of last contraction and start of next one */}
      <div>{timeDifference}</div>
      {!isActive && <button onClick={handleStartClick}>Start</button>}
      {isActive && <button onClick={handleStopClick}>Stop</button>}
      <button onClick={resetClick}>Reset</button>    
    </>
  )
}

export default ContractionsTimer