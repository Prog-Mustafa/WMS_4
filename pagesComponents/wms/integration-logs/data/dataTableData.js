const dataTableData = {
  columns: [
    { Header: "id", accessor: "id" },
    { Header: "timestamp", accessor: "timestamp" },
    { Header: "message", accessor: "message" },
    { Header: "status", accessor: "status" },
  ],
  rows: [
    { id: 1, timestamp: "2023-08-10 08:00", message: "Sync started", status: "Success" },
    { id: 2, timestamp: "2023-08-10 09:15", message: "Orders imported", status: "Success" },
    { id: 3, timestamp: "2023-08-10 10:30", message: "Failed to update item", status: "Error" },
  ],
};

export default dataTableData;
