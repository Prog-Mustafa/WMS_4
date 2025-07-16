const dataTableData = {
  columns: [
    { Header: "id", accessor: "id" },
    { Header: "name", accessor: "name" },
    { Header: "category", accessor: "category" },
    { Header: "quantity", accessor: "quantity" },
    { Header: "price", accessor: "price" },
  ],
  rows: [
    { id: 1, name: "Widget A", category: "Hardware", quantity: 150, price: "$25.00" },
    { id: 2, name: "Gadget B", category: "Electronics", quantity: 80, price: "$99.99" },
    { id: 3, name: "Spare Part C", category: "Hardware", quantity: 40, price: "$15.50" },
  ],
};

export default dataTableData;
