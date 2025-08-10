import { useState } from 'react'
import './password.css';
const Password = () => {

    const [name, setName] = useState("");
    function copy(){
      navigator.clipboard.writeText(name)
      alert("Password Copy !")
    }
  return (
    <>
       <h1>Enter the Name</h1>
       <input className='copy-view' value={name} onChange={(e) => setName(e.target.value)} />
        <button id="generate" onClick={copy}>Copy</button>
    </>
  )
}

export default Password;
