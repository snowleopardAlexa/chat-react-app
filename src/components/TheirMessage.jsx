import MessageForm from "./MessageForm";

const TheirMessage = ({ lastMessage, message }) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== MessageForm.sender.username;

    return (
        <div className="message-row">
           {isFirstMessageByUser && (
               <div 
                 className="message-avatar"
                 style={{backgroundImage: `url(${message?.sender?.avatar})`}}
               />
           )}
        </div>
    )
}

export default TheirMessage;


