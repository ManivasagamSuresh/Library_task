import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Editbook() {
  useEffect(()=>{
    let data = async()=>{
let b = await axios.get(`https://63450500dcae733e8fe7f213.mockapi.io/products/${params.id}`)
formik.setValues(b.data);
    }
    data()
  },[])
    let params = useParams()
    const formik =  useFormik({
        initialValues:{
            name : "",
            author : "",
            description :"",
            book :"",
        },
        validate:(values)=>{
          let error= {}
          if(!values.name){
            error.name="Please fill the name"
          }
          if(!values.author){
            error.author="Please fill the author"
          }
          if(!values.image){
            error.image="Please fill the image"
          }
          
          if(!values.book){
            error.book="Please fill the book"
          }
          if(values.book && values.book.length <50){
            error.book="book must contains minimum 50 letters"
          }
          return error
              },
        onSubmit : async(value)=>{
            try{let data = await axios.put(`https://63450500dcae733e8fe7f213.mockapi.io/products/${params.id}`,value)
            alert('success')
        }
        catch(error){
            alert('error')
        }
    }    
    })
    
  return (
    <div className='position-relative ' >
    <form onSubmit={formik.handleSubmit} style={{width:"500px",height:"250px"}} className={"position-absolute top-50 start-50"}>
       
    
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Book Name</label>
    <input type="text" class={`form-control ${formik.touched.name && formik.errors.name ? "error-box" : ""} ${formik.touched.name&&!formik.errors.name ? "success-box" : ""}`} id="exampleInputEmail1" aria-describedby="emailHelp" name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
    {
   formik.touched.name&& formik.errors.name ? <span style={{color:"red"}}>{formik.errors.name}</span> : null
   }
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Author Name</label>
    <input type="text" class={`form-control ${formik.touched.author && formik.errors.author ? "error-box" : ""} ${formik.touched.author&&!formik.errors.author ? "success-box" : ""}`} id="exampleInputPassword1" name='author' onChange={formik.handleChange} value={formik.values.author} onBlur={formik.handleBlur}/>
    {
   formik.touched.author&& formik.errors.author ? <span style={{color:"red"}}>{formik.errors.author}</span> : null
   }
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Book Image Link</label>
    <input type="text" class={`form-control ${formik.touched.image && formik.errors.image ? "error-box" : ""} ${formik.touched.image&&!formik.errors.image ? "success-box" : ""}`} id="exampleInputPassword1" name='image' onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur}/>
    {
   formik.touched.image&& formik.errors.image ? <span style={{color:"red"}}>{formik.errors.image}</span> : null
   }
  </div>
        
        <div class="input-group mt-4" >
  <span class="input-group-text"> Description</span>
  <textarea class="form-control" aria-label="With textarea" name='description' onChange={formik.handleChange} value={formik.values.description} ></textarea>
</div>
<div class="input-group mt-4" style={{height:"250px"}}>
  <span class="input-group-text"> Book    </span>
  <textarea class={`form-control ${formik.touched.book && formik.errors.book ? "error-box" : ""} ${formik.touched.book&&!formik.errors.book ? "success-box" : ""}`} aria-label="With textarea" name='book' onChange={formik.handleChange} value={formik.values.book} onBlur={formik.handleBlur}></textarea>
  {
   formik.touched.book&& formik.errors.book ? <span style={{color:"red"}}>{formik.errors.book}</span> : null
   }
</div> 
<button type="submit" class="btn btn-primary mt-3">Submit</button> 
        
    </form>
    </div>

    
  )
}

export default Editbook