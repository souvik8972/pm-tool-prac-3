import { downloadExcel } from "react-export-table-to-excel";

export const exportToExcel = (data ,columns) => {
    const tableData = data.map((item) => Object.values(item)); 
 
console.log(data)
const tableHeaders = Object.keys(data[0]);
    downloadExcel({
        fileName: "pm-tool",
      
        tablePayload: {
          header: tableHeaders,
       
          body: tableData,
        },
      });


}