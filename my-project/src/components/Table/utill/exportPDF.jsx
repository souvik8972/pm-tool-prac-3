import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

 export const generatePDF = (data, columns) => {
    const doc = new jsPDF();
   
    const tableData = data.map((item) => Object.values(item)); 

    const tableHeaders = Object.keys(data[0]);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("table-data.pdf");
  };