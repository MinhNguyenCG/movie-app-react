import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWUzYzVjNTJjYzUxZmRkNDc3YTg3OTYzYzFiNGFjYyIsIm5iZiI6MTc1NDg3NTA3OS4yOSwic3ViIjoiNjg5OTQ0YzczNWUwZTJkMjEwNmQ2Y2ZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.l1UIJwtyWJZ26vDMBmmWa2EZCX47kbFonJ6lT2CcpfQ",
      },
    };

    fetch(url, options)
      .then(async (res) => {
        const data = await res.json();
        const trendingMediaList = data.results.slice(0, 12);
        setMediaList(trendingMediaList);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex gap-4 rounded border border-white">
          <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded px-2 py-1">TV Show</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => (
          <MovieCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
