const dataTableData = {
  columns: [
    { Header: "item", accessor: "item" },
    { Header: "warehouse", accessor: "warehouse" },
    { Header: "quantity", accessor: "quantity" },
  ],
  rows: [
    { item: "Widget A", warehouse: "Warehouse A", quantity: 120 },
    { item: "Gadget B", warehouse: "Warehouse B", quantity: 45 },
    { item: "Spare Part C", warehouse: "Warehouse C", quantity: 200 },
  ],
};

export default dataTableData;
