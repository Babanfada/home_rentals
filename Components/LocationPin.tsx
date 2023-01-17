import { NextPage } from "next";
import React from "react";
import { GoLocation } from "react-icons/go";

interface LocationPinProps {
  address: string;
  lat: number;
  lng: number;
}

const LocationPin: NextPage<LocationPinProps> = ({address}) => {
  return (
    <div>
      <span>
        <GoLocation />
      </span>
      <p>{address}</p>
    </div>
  );
};

export default LocationPin;
