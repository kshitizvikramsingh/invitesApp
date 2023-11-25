import Button from "./Button"
import { useState,useEffect } from "react"
import Axios from "axios"


function App () {
    let display,names
    const [guestEntry,setGuestEntry]=useState([])
   const [title,setTitle]=useState(false)
   const [name,setName]=useState("")
   
    const handleClick=()=>{
       console.log("ascjask")
       setTitle(!title)
   }
const handleChange=(event)=>{
setName(event.target.value)
}
    const handleSubmit=(event)=>{
        event.preventDefault()
        saveToDb(name)
    }
    if(title){
         display=<input type="text" className="border-2" onChange={handleChange} value={name} placeholder="Enter your Name"/>
    }
  const saveToDb=(name)=>{
    Axios.post("http://52.201.239.183/attendance",{
        name
    })
  }

  const guests=async()=>{
    let guests=await Axios.get("http://52.201.239.183/guests")
 
    setGuestEntry(guests.data)
    
   
   
    
  }
  
  useEffect(()=>{
    guests()
},[])

const list=guestEntry.map((entry,index)=>{
return <div>
  <h1>{entry.name}</h1>
</div>
})

    return <div>
        <div className="flex font-sans md:container md:mx-auto my-60">
  <div className="flex-none w-56 relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.55)]">
    <img src="https://cdn.firstcry.com/education/2022/12/12101916/Flower-Names-In-English-For-Kids.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form className="flex-auto p-6" onSubmit={handleSubmit}>
    <div className="flex flex-wrap">
      <h1 className="flex-auto font-medium text-slate-900">
        Cordial Invite to the Wedding Reception
      </h1>
      <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
        Paras Weds Shanu
      </div>
     
    </div>
    
   
    <div className="flex space-x-4 mb-5 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"  onClick={handleClick}>
       Mark Your Attendance
        </button>
        
      </div>
    </div>
    <div className="flex-none">{display}</div> 
    <p className="text-sm text-slate-500">
      Venue Address:
    </p>
  </form>

</div>
<h1>Steps to mark your attendance:</h1>
<h1>1. Click on "Mark Your Attendance Button"</h1>
<h1>2. Enter your Name in the input box that will display below and press Enter</h1>
<div>{name}</div>

<h1>The guest List is shown below:{guestEntry.length}</h1>
<div>{list}</div>
<div><b>Designed and Developed by Kshitiz Vikram Singh</b></div>
    </div>
    
}

export default App