function Button ({onClick}) {
   
   const handleClick=(event)=>{
        if (event){
            return <div>
            <h1>Clicked Button</h1>
        </div>
        }
        
   }
   
   return <div>
      <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" onClick={handleClick}>   Mark Your Attendance</button>
      {handleClick}
    </div>
}


export default Button