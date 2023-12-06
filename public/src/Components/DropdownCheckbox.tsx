import { Box } from "@mui/material";
import ParentCheckbox from "./ParentCheckBox";

const checkBoxData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DropdownCheckbox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
        bgcolor: "whitesmoke",
        color: "black",
      }}
    >
      {checkBoxData.map((ele) => (
        <ParentCheckbox data={ele} />
      ))}
    </Box>
  );
};

export default DropdownCheckbox;
