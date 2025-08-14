import React from "react";
import { formatCurrency } from "@/libs/utils";
const MovieInformation = ({ movieInfo }) => {
  console.log(movieInfo);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Infomation</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{movieInfo?.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {movieInfo?.origin_country?.map(
          (countryCode) =>
            countryCode && (
              <img
                key={countryCode}
                src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                alt={countryCode}
                className="h-[2vw] w-[2vw]"
              />
            ),
        )}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfo?.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{formatCurrency(movieInfo?.budget)}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{formatCurrency(movieInfo?.revenue)}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
