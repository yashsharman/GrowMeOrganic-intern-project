import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

interface DataTableProps {
  tableData?: any[];
}

export default function DataTable({ tableData }: DataTableProps) {
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "userId",
      headerName: "User ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "body",
      headerName: "Body",
      width: 600,
    },
  ];

  const rows = tableData || [];

  return (
    <Box sx={{ height: "auto", width: "100%", bgcolor: "whitesmoke" }}>
      {tableData  && (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      )}
    </Box>
  );
}
