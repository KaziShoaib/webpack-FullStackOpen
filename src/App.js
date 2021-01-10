import './index.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


//for internet explorer
import PromisePolyfill from 'promise-polyfill';

//for internet explorer
if (!window.Promise) {
  window.Promise = PromisePolyfill
}


const useNotes = (url) => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    axios.get(url)
      .then(response => setNotes(response.data));
  }, [url]);

  return notes;
};


const App = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState([]);
  const notes = useNotes(BACKEND_URL);


  const handleClick = () => {
    setValue(value.concat(counter));
    setCounter(counter + 1);  
  }

  return (
    <div className='container'>
      hello webpack {counter} clicks
      <button onClick={handleClick}>
        press
      </button>
      <div>{notes.length} notes are on server {BACKEND_URL}</div>
    </div>
  );
}

export default App;