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
           
                {message?.attachements?.length > 0 
                    ? (
                        <img 
                           src={message.attachements[0].file}
                           alt="message-attachment"
                           className="message-image"
                           style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                        />
                    ) : (
                        <div className="message" style={{ float: 'left', backgroundColor: '#016064'}}>
                          {message.text}
                        </div> 
                    )
                }
        </div>
    )
}

export default TheirMessage;


