import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
  });
  const navigate= useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("Form-Data", JSON.stringify(formData));
    navigate('/secondPage')
  };

  return (
    <Box sx={{ bgcolor: "whitesmoke", p: 2, m:"auto", maxWidth:"35rem"}}>
      <Typography variant={"h4"} color={"black"} fontWeight={"bold"}>
        Please fill below form to proceed!😊
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="outlined-basic"
            name="Name"
            label="Name"
            variant="outlined"
            required
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="Email"
            label="Email"
            variant="outlined"
            required
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="PhoneNumber"
            label="Phone Number"
            variant="outlined"
            required
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ py: 2, fontSize: "1.25rem" }}
          >
            Save 👍
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default FormPage;
