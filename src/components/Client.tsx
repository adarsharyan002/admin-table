

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Book } from "@/utils/data";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";





interface ProductsClientProps<T> {
  
  columns: ColumnDef<T>[];
  
}

export const UserClient: React.FC<ProductsClientProps<Book>> = React.memo(({ columns }) => {


//   const router = useRouter();

  return (
    <>
       <Heading
          title={"Books"}
          description=""
        />
      
      
      <Separator />
      <DataTable searchKey="author_name" columns={columns} />
    </>
  );
});
