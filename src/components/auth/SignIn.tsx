import { Input } from "@/components/ui/input";
import signIn from '@/assets/signupin.png';
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserSignInSchema, UserSignInSchemaType } from "@/lib/schema";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';

 type inputs ={
    email:string;
    password:string;
 }

 const   SignIn = () => {

    const [showPassword,setShowPassword]=useState(false)
    const [passType,setPassType]=useState("password")
    const navigate=useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError]=useState("")



    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
      } = useForm<inputs>()
       

      //onSubmit handler
      const onSubmit =async ()=>{
        const formData = getValues();
       
        try {
            // Make an HTTP POST request using Axios
            setIsLoading(true); 

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`,formData);
            navigate('/')
        
            console.log('Response:', response.data);
            localStorage.setItem('token', response.data.token);
            // Optionally, perform actions based on the response (e.g., show success message)
        
          } catch (error:any) {
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.error);
              }
          }finally {
            setIsLoading(false); // Set loading state back to false after request completes
          }
        
       
       }

    const handleShowPassword=()=>{
        if(passType=="password")setPassType("text")
            else setPassType("password")
         setShowPassword(!showPassword)
    }
  return (
    <div className="w-full lg:grid lg:min-h-[90vh] lg:grid-cols-2 xl:min-h-[60vh] mt-10 lg:mt-0">
      <div className="hidden lg:flex items-center justify-center dark:lg:bg-gray-800">
        <img alt="Image" src={signIn} className="aspect-square object-cover" width="800" height="800" />
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-auto space-y-6 shadow-md border w-[80vw] lg:w-[33vw] border-gray-100 p-4 md:px-10 py-10 rounded-xl">
          <div className="flex justify-between space-y-2">
            <h1 className="text-3xl font-bold text-[#3A244A] ">Fill what we know<span className="text-[#D72638]">!</span></h1>
          </div>
          <form className="space-y-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

          <div className="space-y-2">
              <Input
                className="border-0 border-b focus:border-b focus-visible:ring-transparent"
                placeholder="Email"
               
                {...register("email")}
              />
               {errors.email && <span className="text-red-400">{errors.email.message}</span>}
            </div>
          
            <div className="relative space-y-2">
            <Input
                className="border-0 border-b  pr-2 focus:border-b focus-visible:ring-transparent" 
                placeholder="Password"
                type={passType}           
                {...register("password")}
            />
            {showPassword?<FaEyeSlash className="absolute right-2 top-2 text-gray-400"  onClick={handleShowPassword}  />:<FaEye onClick={handleShowPassword} className="absolute right-2 top-2 text-gray-400" /> }
            {errors.password && <span className="text-red-400">{errors.password.message}</span>}
            </div>
           
            
            <Button className="w-full bg-[#3A244A] rounded-xl p-5" type="submit" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
            <Link to="/"><Button className="w-full bg-transparent border-2 border-[#3A244A] rounded-xl p-5 text-black hover:bg-[#3A244A] hover:text-white " type="submit">
              Sign up
            </Button></Link>
          </form>
          <p className="text-red-500 m-4">{error}</p>

        </div>
      </div>
    </div>
  );
}

export default  SignIn;