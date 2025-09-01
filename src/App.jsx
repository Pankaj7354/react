import { useState } from "react";

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [skill,setSkill]=useState([]);
  const handelSkill=(event)=>{
    console.log(event.target.checked,event.target.value);
    const value=event.target.value;
    if(event.target.checked){
      setSkill([...skill,value])
    }else{
      setSkill(skill.filter((e)=>e!==value))
    }
  }
  const [gender,setGender]=useState("");
  const [country,setCountry]=useState("");


  return(
  <>
  <div>
    <h1>Register User's</h1>
    <input type="text" value={name} onChange={(event)=>setName(event.target.value) } placeholder="Enter Name" />
    <h1>{name}</h1>
    <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
    <h2 >{email}</h2> 
    <input type ="text" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
    <h3>{password}</h3>
    <div>
      <h3>Select Your Skill's</h3>
    <input onChange={handelSkill} type="checkbox" id = "php" value="php"  />
    <label htmlFor="php">PHP</label>
    <input onChange={handelSkill} type="checkbox" id = "js" value="js"  />
    <label htmlFor="js">JS</label>
    <input onChange={handelSkill} type="checkbox" id = "python" value="python"  />
    <label htmlFor="python">Python</label>
    <h2>{skill.toString()}</h2>
    <br />
    </div>
    <div>
    <h3>Gender</h3>
    <input type="radio" onChange={(event)=>setGender(event.target.value)}
     name='others' id="others"  value={"Others"} checked={gender=='Others'} />
    <label htmlFor="others"  >Others</label>
    <input type="radio" onChange={(event)=>setGender(event.target.value)}
     name="gender" id="male" value={"Male"} checked={gender=='Male'} />
    <label htmlFor="male">Male</label>
    <input type="radio" onChange={(event)=>setGender(event.target.value)}
     name="gender" id="Female" value={"Female"} checked={gender=='Female'} />
    <label htmlFor="Female">Female</label> 
    <h2>{gender}</h2>
    </div>
    <select value={country} onChange={(event)=>setCountry(event.target.value)}>
      <option value="" disabled>Select Country</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
      <option value="Canada">Canada</option>
      <option value="Australia">Australia</option>
    </select>
    <h1>{country}</h1>
    
    <button onClick={()=>setName('')} >submit</button>
  </div>
  </>

)
}
export default App;