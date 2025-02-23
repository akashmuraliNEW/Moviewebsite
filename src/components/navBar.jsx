import React from 'react'
import "../../src/styles/style.css"

function Navbar(){
  return (
    <div>
     {/* =================== nav bar section =========================== */}
     <nav>
      <div className='nav-bar'>
        <h1 className='web-name'>Movie Mania</h1>
        <div className='home-contents'> 
        <a href="">home</a>
        <a href="">about</a> 
        <a href="">contact us</a>  </div>

        <input type="text" /><button>search</button>     
      </div>
     </nav>
     <div className='container'>
      
      <div className="head 1">head 2</div>
      <div className="head 2">head 3</div>
      <div className="head 3">head 4</div>
      <div className="head 4">head 5</div>
      <div className="head 5">head 6</div>
      <div className="head 5">head 6</div>
      <div className="head 5">head 6</div>
      <div className="head 5">head 6</div>
      <div className="head 5">head 6</div>
      

     </div>


     <div className='animation'>

      <a href="">click mee</a>
      

     </div>
        

        
            

       
    </div>
  )
}

export default Navbar