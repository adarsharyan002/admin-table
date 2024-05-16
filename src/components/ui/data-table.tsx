import axios from 'axios'
import {
    ColumnDef,
    PaginationState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
  } from "@tanstack/react-table";

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Input } from "./input";
  import { Button } from "./button";
  import { ScrollArea, ScrollBar } from "./scroll-area";
import { useEffect, useState } from "react";

  
  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchKey: string;

  }



  
  export function DataTable<TData, TValue>({
    columns,
    data,
    searchKey,
    
  }: DataTableProps<TData, TValue>) {
    
    
   
    /* this can be used to get the selectedrows 
    console.log("value", table.getFilteredSelectedRowModel()); */
    const [books, setBooks] = useState([]);
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })

    const pageSizeOptions = [10, 20, 30, 40, 50,100];

    

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const res = await axios.get('https://openlibrary.org/subjects/literature.json', {
  //                 params: {
  //                      // Change 'your_search_query' to your actual search query
                       
  //                     limit: pagination.pageSize,
  //                     offset: ((pagination.pageIndex+1) - 1) * pagination.pageSize
  //                 }
  //             });

  //             setBooks(res?.data?.works);

  //             const authorsKeys= res?.data?.works?.map((item:any)=>item.authors[0].key)

  //             console.log(authorsKeys[0])



  //             const res2 = await axios.get(`https://openlibrary.org/${authorsKeys[0]}.json`, {
               
  //           });

  //             console.log("this is authors",res2)

             
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };

  //     fetchData(); // Call fetchData when pagination changes
  // }, [pagination]);
   

  useEffect(() => {
    const fetchData = async () => {
        try {
            // Fetch books data
            const booksResponse = await axios.get('https://openlibrary.org/subjects/literature.json', {
                params: {
                    limit: pagination.pageSize,
                    offset: (pagination.pageIndex+1) * pagination.pageSize
                }
            });
            const booksData = booksResponse.data.works || [];

            // Fetch authors data for each book
            const booksWithAuthorsData = await Promise.all(booksData.map(async (book:any) => {
                const authorKey = book.authors[0]?.key;
                if (authorKey) {
                    try {
                        const authorResponse = await axios.get(`https://openlibrary.org${authorKey}.json`);
                        const authorData = authorResponse.data;
                        return { ...book, authorData };
                    } catch (error) {
                        console.error(`Error fetching author data for book with key ${authorKey}:`, error);
                        return { ...book, authorData: null };
                    }
                } else {
                    return { ...book, authorData: null };
                }
            }));

            setBooks(booksWithAuthorsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData(); // Call fetchData when pagination changes
}, [pagination]);


  console.log("this is all bookd",books)

    const table = useReactTable({
      data:books,
      columns,
      state:{
        pagination,
      },
      onPaginationChange: setPagination,
      manualPagination:true,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
    });

    console.log(data)
    
     
     if (!books?.length) {
      return <div>Loading...</div>; 

  
    }
  
    return (
      <>
        <Input
          placeholder={`Search ${searchKey}...`}
          value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchKey)?.setFilterValue(event.target.value)
          }
          className="w-full md:max-w-sm"
        />
        <ScrollArea className="rounded-md border h-[calc(80vh-220px)]">
          <Table className="relative">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
            <div className="flex items-center space-x-2">
              <p className="whitespace-nowrap text-sm font-medium">
                Rows per page
              </p>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value:string) => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {pageSizeOptions.map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-x-2">
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              // disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              // disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </>
    );
  }
  