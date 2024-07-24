// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Hook7 from './components/hook/Hook7';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
        {
          show ? <Hook7 /> : "hidden"
        }
        <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
