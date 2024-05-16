// import BreadCrumb from "@/components/BreadCrumb";
import { UserClient } from "@/components/Client";
import { books } from "@/utils/data";


import {columns} from '@/components/columns'
// const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function Table() {

 
  return (
    <>
      <div className="flex-1 space-y-4  pt-2">
        
        <UserClient  data={books} columns={columns} />
      </div>
    </>
  );
}
