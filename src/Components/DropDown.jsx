import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DropDown() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const options = [
    { lable: "", value: 0, Path: "" },
    { lable: "DHCP", value: 1, Path: "dhcp" },
    {
      lable: "Check Configurations",
      value: 2,
      Path: "configurations",
    },
    {
      lable: "Interfaces",
      value: 3,
      Path: "interfaces",
    },
  ];
  function handleSelect(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <select
        className="from-select outline-none rounded-sm"
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option value={option.value} onClick={() => navigate(option.Path)}>
            {option.lable}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
