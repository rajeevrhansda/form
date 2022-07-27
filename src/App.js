import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  // const [username, setUsername] = useState("");
  const usernameRef = useRef();

  console.log("re-rendered");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(usernameRef);
  }

  console.log(usernameRef);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="Username" refer={usernameRef} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Something" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
