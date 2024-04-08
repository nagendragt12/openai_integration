import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from'axios'


function App() {
  const [question, setQuestion] = useState("");
  const[answer, setAnswer] =useState("");

  async function handleSubmit(evt){
    evt.preventDefault();
    const date =await axios.post(`http://localhost:3000/${question}`);
    console.log(JSON.stringify(date));
    setAnswer(date.date);
  }

  return (
    <>
     <div className='container'>
      <h1> Open AI Developer API Integration </h1>
      <form>
        <label className='form-label' htmlFor='textQuestion'> Please Enter Your Question</label>
        <input className='form-control' type='text'id='textQuestion'name='textQuestion' onChange={(evt)=>setQuestion(evt.target.value)}/>
        <button className='btn btn-primary mt-3' onClick={(evt)=> handleSubmit(evt)}>Ask Our AI System A Question</button>
        {answer&& <h2 className='text-danger'>{answer}</h2>}
      </form>
      
     </div>
    </>
  )
}

export default App
