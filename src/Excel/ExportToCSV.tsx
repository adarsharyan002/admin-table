import React from "react";
import Button from "react-bootstrap/Button";
import FileSaver from "file-saver"
import * as XLSX from "xlsx";

type Props = {
  csvData: any[];
  fileName: string;
};

export const ExportCSV: React.FC<Props> = ({ csvData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData: any[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver(data, fileName + fileExtension);
    
  };

  return (
    <Button variant="warning" onClick={() => exportToCSV(csvData, fileName)}>
      Download Data
    </Button>
  );
};
