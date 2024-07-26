import {Link } from "react-router-dom"
import {
    createUserWithEmailAndPassword , 
    getAuth
} from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase"

const Signup = () => {
      const [email , setEmail] = useState("");
      const [password , setPassword] = useState("");
      const [confPassword , setConfPassword] = useState("");
      const [error , setError] = useState("");
      const [errormessage , setErrormessage] = useState("");

      const handleChange = (e)=>{
        const {name , value} = e.target;

        if(name==="email") setEmail(value)
        if(name==="password") setPassword(value)
        if(name==="conf-password") setConfPassword(value)
        
      };

      const handleSubmit = async(e)=>{
        e.preventDefault();
        if(password !== confPassword){
            setError(true)
            setErrormessage('Password doesnot match')
            return
        }
        
        // try {

        //     const userCredentail = await createUserWithEmailAndPassword (auth , email , password);
        //     const user = userCredentail.user

        // } catch (error) {
        //     const errorMessage = error.message;
        //     const errorCode = error.code;
        //   setError(true)

        //   switch(errorCode){

        //     case "auth/weak-password" :
        //         setErrormessage("The password is too weak");
        //         break;
        //     case "auth/email-already-in-use" :
        //         setErrormessage("The email is already used , please register with some other email");
        //         break;
        //     case "auth/invalid-email" :
        //         setErrormessage("The email is invalid");
        //         break;
        //     case "auth/operation-not-allowed" :
        //         setErrormessage("Email / password accounts are not enabled");
        //         break;
        //     default :
        //        setErrormessage(errorMessage)
        //        break;
        //   }
        // }
      }

      return(
        <div>
           {/* <div className="flex justify-center mt-20">
             <div className="relative w-full max-w-7xl">
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit}>
                 <div className="mb-4 flex flex-col md:flex-row md:items-center">
                    <label htmlFor="email" className="block text-gray-700 md:w-1/3">Email</label>
                    <input
                     type="email" placeholder=" Enter your email" onChange={handleChange}
                     name="email" value={email} id="email"
                     className="w-full md:w-2/3 px-3 py-2 mt-1 md:mt-0 bg-gray-200"
                    />
                 </div>
                 <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                     type="password" placeholder="Enter your password" onChange={handleChange}
                     name="password" value={password} id="password"
                    />
                 </div>
                 <div className="flex flex-col">
                    <label htmlFor="conf-password">Confirm Password</label>
                    <input
                     type="password" placeholder="Enter your password" onChange={handleChange}
                     name="conf-password" value={confPassword} id="conf-password"
                    />
                 </div>
                 <button type="submit" >Sign Up</button>
                 {error && <p>{errormessage}</p>}
                </form>

                <div>
                    <p>
                        Already have an account ? 
                        <Link to="/signin">SignIn</Link>
                    </p>
                </div>
             </div>
           </div> */}
        </div>
      )
}


export default Signup