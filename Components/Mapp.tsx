import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { BiSearch } from "react-icons/bi";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styles from "../styles/mapp.module.scss";

interface currency {
  value: string;
  label: string;
}

const currencies: currency[] = [
  {
    value: "USD",
    label: "All type",
  },
  {
    value: "EUR",
    label: "Nigeria",
  },
  {
    value: "BTC",
    label: "Uk",
  },
  {
    value: "JPY",
    label: "Canada",
  },
];
const NeigbourHood: currency[] = [
  {
    value: "USD",
    label: "NeighbourHood",
  },
  {
    value: "EUR",
    label: "Nigeria",
  },
  {
    value: "BTC",
    label: "Uk",
  },
  {
    value: "JPY",
    label: "Canada",
  },
];

export function SelectTextFields(): ReactJSXElement {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0, width: "25ch",  },
        display: "flex",
        background: "#FFFFFF",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label=""
          defaultValue="Nigeria"
          placeholder="All Type"
          style={{ width: "fit-content", background: "white" }}
          // helperText="Where are you looking for?"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label=""
          defaultValue="Nigeria"
          placeholder="Neighbourhood"
          style={{ width: "fit-content", background: "white" }}
          // helperText="Where are you looking for?"
        >
          {NeigbourHood.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className={styles.search}>
        <BiSearch fontSize="21px" />
      </div>
    </Box>
  );
}

export const MapSearch = ({}) => {
  return (
    <div>
      <SelectTextFields />
      {/* <SelectTextFields /> */}
    </div>
  );
};

const Mapp = ({}) => {
  return (
    <div className={styles.wrapper}>
      <p>The Most Affordable Place To Stay In The San Francisco Bay Area</p>
      <div className={styles.div}>
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=muritala&t=k&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <div>
          <MapSearch />
        </div>
      </div>
    </div>
  );
};

export default Mapp;
