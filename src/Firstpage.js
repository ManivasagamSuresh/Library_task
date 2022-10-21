import React from 'react'
import { useNavigate } from 'react-router-dom'

function Firstpage() {
    let navigate = useNavigate()
    function admin(){
        navigate("/BookListAdmin");
    }
    function View(){
        navigate("/Viewers");
    }
  return (
    <div className='container text-center ' style={{background:"#F0E68C",height:"100vh"}}>
        <div className='row '>
            <div className='col-lg-12 position-relative'>
                <div style={{position:"absolute",top:"200px",left:"200px"}}>
        <h1>Hello ! Welcome you to our Website </h1>
        <span>Here you can find your favourites books</span><br/>
        <button onClick={admin} className='m-3 btn btn-outline-warning'>Admin</button><button onClick={View} className='m-3 btn btn-outline-warning'>Viewers</button>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Firstpage