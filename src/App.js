import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar';
function App() {
  let [link,setLink]=useState('')
  let [error,setError]=useState(false)
  function isValidURL(url) {
    const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  }
  const linkCheck= async(e)=>{
    e.preventDefault()
    if(link===''||!isValidURL(link)||link.length<=4){
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
      await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
      mode: 'no-cors',
      method: "post",
      headers: {
           "Content-Type": "application/json"
      },
      // body: JSON.stringify(link)
    })
  .then(response =>  response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



  }
  return (
    <div className=" h-screen w-screen">
    <section className='flex flex-col'>
      <Navbar/>
      <span className='flex lg:flex-row flex-col-reverse justify-between items-center lg:pl-28'>
            <span className='lg:items-start items-center flex flex-col gap-1 '>
              <h1 className='font-poppins lg:font-extrabold text-5xl w-[25rem] lg:text-start text-center text-[#3b3054]'>More than just shorter links</h1>
              <p className='lg:w-[22.5rem] w-[15.63rem] text-center lg:text-start text-[#3b3054]'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
              <button className='bg-[#2acfcf] lg:p-3 p-3 pl-9 pr-9 w-fit rounded-3xl mt-4 text-white font-poppins' >Get Started</button>
            </span>
            <img src="assets/illustration-working.svg" alt="hero-img" />
      </span>
      <div className='bg-[#3a3053] lg:pt-6 p-3 lg:pb-5 lg:p-10  bg-center lg:w-[75rem]  m-auto  bg-cover bg-no-repeat bg-fixed mt-12 rounded' style={{backgroundImage:"url('assets/bg-shorten-desktop.svg')"}}>
        <form action="" className='flex lg:gap-6 gap-3 justify-center lg:flex-row flex-col '>
          <input type="text" className={ !error?'lg:w-[61.3rem] h-12 w-80 pl-5 rounded-sm':'lg:w-[61.3rem] h-12 w-80 pl-5 rounded-sm placeholder:text-[#f46262] '} placeholder='Shorten a link here...' value={link} onChange={(e)=>setLink(e.target.value)}  />
          <button className='bg-[#2acfcf]  lg:w-fit p-2 w-80 rounded text-white font-poppins' onClick={linkCheck} >Shorten It!</button>
        </form>
        <p className={error?'mt-4 text-[#f46262] font-poppins text-xs':'mt-4 text-[#f46262] font-poppins text-xs hidden'}>Please add a link</p>
      </div>
    </section>
    </div>
  );
}

export default App;
