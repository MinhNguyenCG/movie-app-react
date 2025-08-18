import React from "react";
import { useParams } from "react-router-dom";
import ImageComponent from "@components/ImageComponent";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import LoadingPage from "@components/Loading";
import { GENDER_MAP } from "@/libs/constants";

const PeopleDetailPage = () => {
  const { id } = useParams();
  const { data: peopleInfo, isLoading } = useFetch({
    url: `/person/${id}?append_to_response=combined_credits`,
  });

  console.log(peopleInfo);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl gap-[3.5vw]">
        <div className="flex-1">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original/${peopleInfo.profile_path}`}
            alt="actor"
            className="mb-4 w-full rounded-lg"
            width={276}
            height={350}
          />

          <div>
            <p className="mb-6 text-[1.6vw] font-bold">Personal Information</p>
            <div className="space-y-2 text-[1.4vw]">
              <div>
                <p className="font-bold">Known For</p>
                <p>{peopleInfo.known_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>{GENDER_MAP[peopleInfo.gender]}</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{peopleInfo.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Birthday</p>
                <p>{peopleInfo.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-2">
          <p className="mb-4 text-[1.6vw] font-bold">{peopleInfo.name}</p>
          <div className="mb-4 text-[1.4vw]">
            <p className="font-bold">Biography</p>
            <p className="text-[1.2vw] whitespace-pre-line">
              {peopleInfo.biography}
            </p>
          </div>

          <RelatedMediaList
            title="Known For"
            mediaList={peopleInfo.combined_credits?.cast || []}
          />
        </div>
      </div>
    </div>
  );
};

export default PeopleDetailPage;
