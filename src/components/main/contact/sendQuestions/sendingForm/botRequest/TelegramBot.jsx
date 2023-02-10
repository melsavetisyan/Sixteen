import React, { useState } from 'react';

function TelegramBot(props) {
  const [response, setResponse] = useState(null);

  const sendMessage = async () => {
    if(props.clickbly){
      const API_URL = `https://api.telegram.org/bot${props.token}/sendMessage`;
      const message = { chat_id: props.chat_id, text: props.body };
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      };

      try {
        const res = await fetch(API_URL, options);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        console.error(err);
      }
      props.clear()
    }else{
      props.error()
    }
  }

  
  return (
      <button className={props.className} onClick={sendMessage}>{props.children}</button>
  );
}

export default TelegramBot;
