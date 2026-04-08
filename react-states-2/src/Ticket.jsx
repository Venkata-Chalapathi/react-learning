import TicketNum from "./TicketNum";

export default function Ticket({ticket}){
    return (
        <div>
            { ticket.map((Number, idx) => (
                <TicketNum num={num} />
            )) }
        </div>
    );
}