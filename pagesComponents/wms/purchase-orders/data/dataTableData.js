const dataTableData = {
  columns: [
    { Header: "po", accessor: "po" },
    { Header: "supplier", accessor: "supplier" },
    { Header: "date", accessor: "date" },
    { Header: "status", accessor: "status" },
    { Header: "total", accessor: "total" },
  ],
  rows: [
    { po: "PO-1001", supplier: "Acme Corp", date: "2023-08-01", status: "Open", total: "$15,000" },
    { po: "PO-1002", supplier: "Globex", date: "2023-08-05", status: "Received", total: "$9,450" },
    { po: "PO-1003", supplier: "Innotech", date: "2023-08-07", status: "Canceled", total: "$2,350" },
  ],
};

export default dataTableData;
