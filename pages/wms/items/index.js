import { useEffect, useState } from "react";
import Card from "@mui/material/Card";

import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";
import DataTable from "/examples/Tables/DataTable";

import columns from "/pagesComponents/wms/items/data/dataTableData";
import { useAuth } from "/context/auth";
import { apiFetch } from "/utils/api";

function Items() {
  const { token } = useAuth();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      if (!token) return;
      try {
        const data = await apiFetch("/items", {}, token);
        setRows(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchItems();
  }, [token]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Items
            </MDTypography>
          </MDBox>
          <DataTable table={{ columns, rows }} canSearch />
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Items;
