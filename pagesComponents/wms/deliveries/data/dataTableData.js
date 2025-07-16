const dataTableData = {
  columns: [
    { Header: "delivery", accessor: "delivery" },
    { Header: "salesOrder", accessor: "salesOrder" },
    { Header: "date", accessor: "date" },
    { Header: "status", accessor: "status" },
  ],
  rows: [
    { delivery: "DL-4001", salesOrder: "SO-2001", date: "2023-08-09", status: "Scheduled" },
    { delivery: "DL-4002", salesOrder: "SO-2002", date: "2023-08-10", status: "Shipped" },
    { delivery: "DL-4003", salesOrder: "SO-2003", date: "2023-08-11", status: "Delivered" },
  ],
};

export default dataTableData;
