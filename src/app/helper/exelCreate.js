var xlsx = require("xlsx");

// data = [{
//   name: "John Doe",
//   email: "6o0V2@example.com",
//   phone : 797897977
// },{
//   name: "John Doe",
//   email: "6o0V2@example.com",
//   phone : 797897977
// },{
//   name: "John Doe",
//   email: "6o0V2@example.com",
//   phone : 797897977
// },]
export const createExcel = (data, name) => {
  
  const workSheet = xlsx.utils.json_to_sheet(data);
  const workBook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workBook, workSheet, "Sheet1");
  xlsx.writeFile(workBook,`${name}.xlsx` || "workbook.xlsx");
}