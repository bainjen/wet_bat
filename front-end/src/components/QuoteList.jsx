import * as React from "react";
import { useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { QuoteContext } from "./QuoteContext";

const columns = [
  { field: "id", headerName: "Quote ID", width: 110 },
  { field: "name", headerName: "Name", width: 160 },
  { field: "destination", headerName: "Destination", width: 140 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
  },
];

const QuoteList = ({ height, nRow }) => {
  const { dataState, quoteState } = useContext(QuoteContext);
  const { fullQuoteData } = dataState;
  const { handleQuoteClick } = quoteState;
  const rows = fullQuoteData.map((quote, i) => {
    return {
      id: quote.id,
      name: `${quote.selectedCustomer.first_name} ${quote.selectedCustomer.last_name}`,
      destination: quote.selectedReturn.municipality,
      price: quote.price,
    };
  });

  return (
    <div
      style={{
        height: height,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={nRow}
        onRowClick={(e) => handleQuoteClick(e)}
      />
    </div>
  );
};

export default QuoteList;
