import Greeting from './components/Greeting'
import './App.css'
import Message from './components/Message'

const nameUser = "Іван"
const randomText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, deleniti corporis doloremque sunt rerum possimus eveniet magni asperiores, voluptas in labore laudantium nisi earum fuga saepe officia, porro vel temporibus!"

function App() {


  return (
    <>
      <Greeting name={nameUser}/>
      <Message text={randomText}/>
    </>
  )
}

export default App
