import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";

const MovieDetailPage = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/236/321/non_2x/movie-trendy-banner-vector.jpg"
        alt=""
        className="absolute inset-0 brightness-20"
      />

      <div className="relative mx-auto flex max-w-7xl gap-[2.5vw] p-6 py-10">
        <img
          src="https://m.media-amazon.com/images/I/71uUHp9a3bL._AC_SL1000_.jpg"
          alt=""
          className="flex-1/3 overflow-hidden rounded-lg"
        />

        <div className="flex-2/3 text-[1.2vw] text-white">
          <h1 className="mb-2 text-[2vw] font-bold">Movie Title</h1>
          <div className="flex items-center gap-2">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2025-1-1</p>
            <p>Fantasy, Action</p>
          </div>

          <div className="mt-[2vw] mb-[2vw] flex items-center gap-10">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={73} size={3} strokeWidth={0.3} />
              <span>Rating</span>
            </div>
            <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-400 px-2 py-1 transition-all duration-300 hover:bg-gray-600">
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              <span>Trailer</span>
            </button>
          </div>

          <div className="mb-[2vw]">
            <p className="mb-2 text-[1.5vw] font-bold">Overview</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Director</p>
              <p>John Doe</p>
            </div>

            <div>
              <p className="font-bold">Cast</p>
              <p>John Doe, Jane Doe, Jim Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
