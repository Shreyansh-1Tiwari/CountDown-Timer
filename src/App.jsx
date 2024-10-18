import React from 'react'
import Countdown from './Countdown'

const App = () => {
  const handleTimeFinish = () => {

  }
  return (
    <div>
      <div className='stopwatch'>
        <h1>Countdown timer</h1>
        <Countdown initialTime={20} onTimeFinish={handleTimeFinish}/>
      </div>
    </div>
  )
}

export default App