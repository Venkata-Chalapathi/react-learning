import TicketNum from "./TicketNum";
import "./Ticket.css"
 
export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p>TICKET</p>
            { ticket.map((Number, idx) => (
                <TicketNum num={Number} key={idx } />
            )) }
        </div>
    );
}