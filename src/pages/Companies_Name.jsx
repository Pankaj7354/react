import { useRef } from "react";

function Companies(){

    const userRef=useRef() ;
    const userPinRef=useRef();


    const handelForm =(e)=>{
        e.preventDefault();
        let user= document.querySelector('#user').value;
        let password= document.querySelector('#password').value;
        console.log(user,password);

    };
    const handelFromRef=(e)=>{
        e.preventDefault();
        let user=userRef.current.value;
        let userPin=userPinRef.current.value;
        console.log(user,userPin);



    };

    return(
        <>
        <h1> UncontrolCompponent</h1>
        <form action='' method="POST" onSubmit={handelForm} >
            <label>User Name :-</label>
            <input type='text' id ='user' placeholder="Enter Your Name" />
            <br/>
            <label>User PIN :- </label>
            <input type ='password' id='password' placeholder ="Enter Your Password" />
            <br/>
            <button >LogIn</button>

        </form> 
    
        <hr/>

         <h1>ControllCompponent</h1>
         <form methord='post' action='' onSubmit={handelFromRef} >
            <label>User Name :-</label>
            <input type='text' ref={userRef}  placeholder="Enter Your Name" />
            <br/>
            <label>User PIN :- </label>
            <input type ='password' ref={userPinRef}  placeholder ="Enter Your Password" />
            <br/>
            <button >LogIn</button>
         </form>
        </>
    )
}
export default Companies;