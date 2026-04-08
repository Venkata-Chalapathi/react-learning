import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import LotteryTicket from './Lottery'
// import TicketNum from './TicketNum'
import Ticket from './Ticket'
function App() {

  return (  
    <>
      {/* <LudoBoard /> */}
      {/* < TodoList /> */}
      <br />
      <Ticket ticket = {[0, 1, 2]} />
    </>
  )
}

export default App
