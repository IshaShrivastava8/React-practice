import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
   {
   href: "https://openai.com/index/chatgpt/",
   target:"_blank"
   },
   'Chatgpt!!!'
)

createRoot(document.getElementById('root')).render(

    // reactElement
    // anotherElement
    <App />

)
