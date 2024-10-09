import React from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/material";
import { DropDownMenu } from "./components/FileDropDown";
import DatePicker from "../DatePicker/DatePicker";

// Define styles for various components
const styles = {
  tableHead: {
    backgroundColor: "#F5F5F5",
    borderBottom: "2px solid #ccc",
    color: "black",
    height: "50px",
  },
  tableContainer: {
    boxShadow: "none", // No shadow on the container
  },
  tablePaper: {
    boxShadow: "none", // No shadow on the Paper (table wrapper)
  },
  pagination: {
    backgroundColor: "#F5F5F5",
    borderRadius: "20px",
    "& .Mui-selected": {
      backgroundImage: "linear-gradient(to right, red, black)",
      color: "white",
    },
  },
};

const ReusableTable = ({ columns, data }) => {
 

  const table = useMaterialReactTable({
    columns,
    data,
    // enableStickyHeader: true, // Ensure sticky header is enabled
    muiTableHeadProps: {
      sx: styles.tableHead,
    },
    muiTableContainerProps: {
      sx: styles.tableContainer,
    },
    muiTablePaperProps: {
      sx: styles.tablePaper,
    },
    muiTableHeadRowProps: {
      sx: styles.tableHead, // Reusing the same styles as the head
    },
    paginationDisplayMode: "pages",
    muiPaginationProps: {
      sx: styles.pagination,
    },
    renderEmptyRowsFallback: () => (
      <Box sx={{ textAlign: 'center', color: 'gray' }}>
        No data present
      </Box>
    ),
    renderTopToolbarCustomActions: (table) => {
      // console.log("table", table);
      return (
        <div className=" relative flex gap-2 text-sm text-gray-500 z-[1000] h-10 bg-red-900">
          <DropDownMenu columns={columns} data={data} />
        </div>
      );
    },
  });

  return (
    <div>
      {/* Table content with lower z-index */}
      <div className="relative w-full h-full">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default ReusableTable;
