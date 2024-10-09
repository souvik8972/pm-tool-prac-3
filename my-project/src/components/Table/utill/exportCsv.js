import { mkConfig, generateCsv, download } from "export-to-csv";


export const exportToCsv = (data) => {
    console.log(data,"CSV")
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  });

  
  // Generate the CSV data
  const csv = generateCsv(csvConfig)(data);

  // Trigger the download
  download(csvConfig)(csv)
};
