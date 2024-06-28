import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../../components/ui/table";
  
  export default function TableTemplates() {
    return (
      <>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-0">
                <span className="sr-only">Avaliable For Purchase</span>
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>CREATED AT</TableHead>
              <TableHead className="w-0">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
          </TableBody>
        </Table>
      </>
    );
  }
  