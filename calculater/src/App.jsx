
import { useState } from 'react';
import './App.css'

function App() {

  const [value, setValue] = useState("");
  
 return (

    <>
     <div className='calculater'>
      <div className='printer'>
      <input type="text" value={value} />
      </div>
      <div className='keypad'>
        <div className='col1'>
        <input type="button" value="AC" onClick={e => setValue("")}/>
        <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="c" onClick={e => setValue(value.slice(0,-1))} />
          </div>
      <div className='col2'>
          <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='col3'>
          <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='col4'>
          <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="=" onClick={e => setValue(eval(value))}/>
          </div>
          <div className='col5'>
          <input type="button" value="%" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
        <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
        
          </div>
      </div>
     </div>
    </>
  )
}

export default App
