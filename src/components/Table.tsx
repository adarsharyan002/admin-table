// import BreadCrumb from "@/components/BreadCrumb";
import { UserClient } from "@/components/Client";
import {  useNavigate } from "react-router-dom";



import {columns} from '@/components/columns'
import { useEffect } from "react";
// const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function Table() {

  const navigate = useNavigate();

  useEffect(()=>{
   const token = localStorage.getItem('token');
    if(!token){
      navigate('/')
     
    }
  },[navigate])

 
  return (
    <>
      <div className="flex-1 space-y-4  p-2">
        
        <UserClient   columns={columns}  />
      </div>
    </>
  );
}
