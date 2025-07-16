const dataTableData = {
  columns: [
    { Header: "order", accessor: "order" },
    { Header: "customer", accessor: "customer" },
    { Header: "date", accessor: "date" },
    { Header: "status", accessor: "status" },
    { Header: "total", accessor: "total" },
  ],
  rows: [
    { order: "SO-2001", customer: "Alpha LLC", date: "2023-08-02", status: "Open", total: "$5,600" },
    { order: "SO-2002", customer: "Beta Inc", date: "2023-08-03", status: "Shipped", total: "$1,250" },
    { order: "SO-2003", customer: "Gamma Co", date: "2023-08-04", status: "Closed", total: "$7,890" },
  ],
};

export default dataTableData;
