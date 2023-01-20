import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export function SelectTextFields1() {
  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        // label="Select"
        label="Select City"
        style={{
          width: 318,
          height: 56,
          background: "#F9F9F9",
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
export function SelectTextFields2() {
  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        // label="Select"
        label="Select State"
        style={{
          width: 318,
          height: 56,
          background: "#F9F9F9",
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
export function SelectTextFields3() {
  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        // label="Select"
        label="Select Room Type"
        style={{
          width: 318,
          height: 56,
          background: "#F9F9F9",
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
