import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ShowTable from "./ShowTable";
import DropdownCheckbox from "./DropdownCheckbox";
import { useNavigate } from "react-router-dom";

function SecondPage() {
  const [fetchedData, setFetchedData] = useState([]);
  const navigate = useNavigate();
  const loacalData = localStorage.getItem("Form-Data");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setFetchedData(data);
  };

  useEffect(() => {
    fetchData();
    if (!loacalData) {
      alert("Please fill Form data first!");
      navigate("/");
    }
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <DropdownCheckbox />
      <ShowTable data={fetchedData} />
    </Box>
  );
}

export default SecondPage;
