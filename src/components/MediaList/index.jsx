import MovieCard from "../MovieCard";
import { useState, useEffect } from "react";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    };

    fetch(url, options)
      .then(async (res) => {
        const data = await res.json();
        const trendingMediaList = data.results.slice(0, 12);
        setMediaList(trendingMediaList);
      })
      .catch((err) => console.error(err));
  }, [activeTabId, tabs]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>

        <ul className="flex gap-4 rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${
                activeTabId === tab.id ? "bg-white text-black" : ""
              }`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
