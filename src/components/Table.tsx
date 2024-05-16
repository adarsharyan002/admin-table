// import BreadCrumb from "@/components/BreadCrumb";
import { UserClient } from "@/components/Client";



import {columns} from '@/components/columns'
// const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function Table() {

 
  return (
    <>
      <div className="flex-1 space-y-4  p-2">
        
        <UserClient   columns={columns}  />
      </div>
    </>
  );
}
