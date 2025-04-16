import  "../App.css"
import {useState } from "react"


const Post = ({Mydata}) => {

    
    const [show,setShow] = useState(false)

    const [searchOutput,setSearchOutput] = useState([])

    const [userInput,setUserInput] = useState()

  
  
  
  const search = (e) => {
    e.preventDefault()
  
    // searchClick(userInput)
  
    const newData = Mydata.filter((value)=>{
      const filterData = value.title.toLowerCase().startsWith(userInput.toLowerCase()) || value.body.toLowerCase().startsWith(userInput.toLowerCase()) || value.author.name.toLowerCase().startsWith(userInput.toLowerCase())
      return filterData
  
    

     
    })
  
    
 
   setSearchOutput(newData)
   setShow(true)
   
  
  }

 
    
    return(
        <>

<form className="header">

<input type="text" placeholder="Search Here.." className="search" onChange={(e)=>setUserInput(e.target.value)}  />
 <button className="btn" onClick={search}>Search</button>
      </form>


      <div className="container">
 {
    show ? searchOutput.map((value)=>{
    
       return   <div key={value.id} className="post">
        <h3 style={{color:"green"}}>Title:<span style={{color:"blue"}}>{value.title}</span></h3>
        <h3 style={{color:"green"}}>Description:<span style={{color:"blue"}}>{value.body}</span></h3>
        <h3 style={{color:"green"}}>Tags:<span style={{color:"blue"}}>{value.tags.map((tag)=>{
           return tag
        })}</span></h3>
        <h3>Author:<a href={value.author.profilePicture}>{value.author.name}</a></h3>

    </div>
    
    
}):




    Mydata.map((value)=>{
        return <div key={value.id} className="post">
        <h3 style={{color:"green"}}>Title:<span style={{color:"blue"}}>{value.title}</span></h3>
        <h3 style={{color:"green"}}>Description:<span style={{color:"blue"}}>{value.body}</span></h3>
        <h3 style={{color:"green"}}>Tags:<span style={{color:"blue"}}>{value.tags.map((tag)=>{
           return tag
        })}</span></h3>
        <h3>Author:<a href={value.author.profilePicture}>{value.author.name}</a></h3>
    </div>
    })
 }  
     

      </div>
        </>
    )
}

export default Post