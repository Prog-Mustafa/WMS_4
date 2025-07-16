const dataTableData = {
  columns: [
    { Header: "receipt", accessor: "receipt" },
    { Header: "po", accessor: "po" },
    { Header: "date", accessor: "date" },
    { Header: "status", accessor: "status" },
  ],
  rows: [
    { receipt: "RC-3001", po: "PO-1001", date: "2023-08-06", status: "Pending" },
    { receipt: "RC-3002", po: "PO-1002", date: "2023-08-07", status: "Received" },
    { receipt: "RC-3003", po: "PO-1003", date: "2023-08-08", status: "Canceled" },
  ],
};

export default dataTableData;
