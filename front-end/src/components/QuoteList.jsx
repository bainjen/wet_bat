import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "destination", headerName: "Destination", width: 130 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue('destination') || ''} ${params.getValue('lastName') || ''}`,
  // },
];

const rows = [
  { id: 1, Name: "Snow", destination: "Jon", price: 35 },
  { id: 2, Name: "Lannister", destination: "Cersei", price: 42 },
  { id: 3, Name: "Lannister", destination: "Jaime", price: 45 },
  { id: 4, Name: "Stark", destination: "Arya", price: 16 },
  { id: 5, Name: "Targaryen", destination: "Daenerys", price: null },
  { id: 6, Name: "Melisandre", destination: null, price: 150 },
  { id: 7, Name: "Clifford", destination: "Ferrara", price: 44 },
];

const QuoteList = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default QuoteList;

// id
// name
// destination
// price
