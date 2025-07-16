const dataTableData = {
  columns: [
    { Header: "count", accessor: "count" },
    { Header: "warehouse", accessor: "warehouse" },
    { Header: "date", accessor: "date" },
    { Header: "status", accessor: "status" },
  ],
  rows: [
    { count: "CC-6001", warehouse: "Warehouse A", date: "2023-08-15", status: "In Progress" },
    { count: "CC-6002", warehouse: "Warehouse B", date: "2023-08-16", status: "Completed" },
    { count: "CC-6003", warehouse: "Warehouse C", date: "2023-08-17", status: "Scheduled" },
  ],
};

export default dataTableData;
