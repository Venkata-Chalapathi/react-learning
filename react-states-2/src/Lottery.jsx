import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function LotteryTicket( {n = 3, winCondition} ){

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket) ;

    let buyNewTicket = () => {
        setTicket(genTicket(3));
    }

    return (
    
        <div>
            <h1>Lottery Ticket</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyNewTicket}> Buy New Ticket </button>
            <h3>{isWinning === true ? "Congrats U Won" : ""}</h3>
        </div>
    );
}