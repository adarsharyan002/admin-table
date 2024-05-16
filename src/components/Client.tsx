

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Book,books } from "@/utils/data";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { ExportCSV } from "@/Excel/ExportToCSV";





interface ProductsClientProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  
}

export const UserClient: React.FC<ProductsClientProps<Book>> = React.memo(({ data,columns }) => {


//   const router = useRouter();

  return (
    <>
       <Heading
          title={"Books"}
          description=""
        />
      
      <div className="flex items-start justify-between">
        <div className="bg-red-400 p-2 text-white rounded">
       
       <ExportCSV  csvData={books} fileName="text-excel-doc" />
       </div>
        
      </div>
      <Separator />
      <DataTable searchKey="author_name" columns={columns} data={data} />
    </>
  );
});
