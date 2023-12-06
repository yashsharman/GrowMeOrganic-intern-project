import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";




interface CheckBoxProps {
  data:{
    department: string,
    sub_departments:string[],
  },
}

const ParentCheckbox = ({ data }:CheckBoxProps) => {
  //sets all array elements to false
  const [checked, setChecked] = React.useState(
    Array(data.sub_departments.length).fill(false)
  );
  const [childrenVisible, setChildrenVisible] = React.useState(false);

  //sets all checked index with true
  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(Array(data.sub_departments.length).fill(event.target.checked));
  };
  
  const handleChildChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedChecked = [...checked];
      updatedChecked[index] = event.target.checked;
      setChecked(updatedChecked);
    };

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <FormControlLabel
          label={data.department}
          control={
            <Checkbox
              checked={checked.every(Boolean)}
              indeterminate={!checked.every(Boolean) && checked.some(Boolean)}
              onChange={handleParentChange}
            />
          }
        />
        {childrenVisible ? (
          <KeyboardArrowUpIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setChildrenVisible(false)}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setChildrenVisible(true)}
          />
        )}
      </Box>
      {childrenVisible && (
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          {data.sub_departments.map((child, index) => {
            return (
              <FormControlLabel
                key={index}
                label={child}
                control={
                  <Checkbox
                    checked={checked[index]}
                    onChange={handleChildChange(index)}
                  />
                }
              />
            );
          })}
        </Box>
      )}
    </>
  );
};

export default ParentCheckbox;
