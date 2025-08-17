import React from "react";
import ImageComponent from "@components/ImageComponent";

const TVShowInformation = ({ movieInfo: TVShowInfo }) => {
  console.log(TVShowInfo);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Infomation</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{TVShowInfo?.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {TVShowInfo?.origin_country?.map(
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
        <p>{TVShowInfo?.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Networks</p>
        <div className="flex flex-wrap gap-2">
          {TVShowInfo?.networks?.map((network) => (
            <ImageComponent
              key={network.id}
              src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
              alt={network.name}
              className="invert"
            />
          ))}
        </div>
      </div>

      <div className="mb-4"></div>
    </div>
  );
};

export default TVShowInformation;
