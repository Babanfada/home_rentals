import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import { location } from "./Data";

interface MapProps {
  zoomlevel: number;
}

const Map = ({ zoomLevel }: any) => {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCi8J-gNwFQ_S_7TYSBD6nWNrffTjx87FU" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          address={location.address}
          lat={location.lat}
          lng={location.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
