const dataTableData = {
  columns: [
    { Header: "transfer", accessor: "transfer" },
    { Header: "from", accessor: "from" },
    { Header: "to", accessor: "to" },
    { Header: "date", accessor: "date" },
    { Header: "status", accessor: "status" },
  ],
  rows: [
    { transfer: "TR-5001", from: "Warehouse A", to: "Warehouse B", date: "2023-08-12", status: "In Transit" },
    { transfer: "TR-5002", from: "Warehouse B", to: "Warehouse C", date: "2023-08-13", status: "Completed" },
    { transfer: "TR-5003", from: "Warehouse C", to: "Warehouse A", date: "2023-08-14", status: "Pending" },
  ],
};

export default dataTableData;
