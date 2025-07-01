const url = "https://localhost:7064/";
module.exports = {
   createRecord: `${url}Passanger/AddPassagners`,
   readRecord: "https://localhost:7064/Passanger/GetPassangersById/",
   deleteRecord: "https://localhost:7064/Passanger/GetPassangersDeleteById/",
   updateRecord: "https://localhost:7064/Passanger/GetPassangersUpdateById/",
   allRecord: "https://localhost:7064/Passanger/GetallPassangers"
}