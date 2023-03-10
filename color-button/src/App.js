import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor.charAt(0).toUpperCase() + newButtonColor.slice(1)}
      </button>

      <input type="checkbox" />
    </div>
  );
}

export default App;
