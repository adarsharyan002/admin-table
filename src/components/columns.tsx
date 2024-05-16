
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Book} from "@/utils/data";

import { Checkbox } from "@/components/ui/checkbox";


export const columns: ColumnDef<Book>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "author_name",
    header: "Author",
    cell: ({row}) => <p>{row?.original?.authorData.name}</p>,

  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "first_publish_year",
    header: "Published On",
  },

  {
    accessorKey: "author_birth_date",
    header: "Author's DOB",
    cell: ({row}) => <p>{row?.original?.authorData.birth_date}</p>,

  },
 
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({row}) => <p>{row?.original?.subject[0]}</p>,

  },
  {
    id: "actions",
    
    cell: () => <CellAction  />,
  },
];
