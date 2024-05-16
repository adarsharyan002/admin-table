
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
    accessorKey: "ratings_average",
    header: "Ratings",
   

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
    accessorKey: "author_top_work",
    header: "Top Work",
  },
  {
    id: "actions",
    
    cell: () => <CellAction  />,
  },
];
