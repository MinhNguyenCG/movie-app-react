import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWUzYzVjNTJjYzUxZmRkNDc3YTg3OTYzYzFiNGFjYyIsIm5iZiI6MTc1NDg3NTA3OS4yOSwic3ViIjoiNjg5OTQ0YzczNWUwZTJkMjEwNmQ2Y2ZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.l1UIJwtyWJZ26vDMBmmWa2EZCX47kbFonJ6lT2CcpfQ
const Movie = () => {
  return (
    <>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dhcy4lv-a0f28cdf-287d-4c7e-8730-683e7c397f7d.jpg/v1/fill/w_1280,h_656,q_75,strp/inside_out_2__2024__textless_banner__01_by_mintmovi3_dhcy4lv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjU2IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kaGN5NGx2LWEwZjI4Y2RmLTI4N2QtNGM3ZS04NzMwLTY4M2U3YzM5N2Y3ZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JbEf0NEe-SjsQhaHK3rB6-PoZ240dhgkWamOrOwmWGc"
        alt="Inside Out"
        className="aspect-video w-full brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 text-white sm:w-1/2">
        <p className="mb-2 font-bold sm:text-[2vw]">Inside Out</p>
        <div className="sm:text-[1.5vw]">
          <p className="inline border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="mt-2">1h 55m</p>
        </div>

        <div>
          <div className="mt-4 hidden text-[1.5vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              Inside Out là bộ phim kể về câu chuyện của một cô gái tên là
              Riley, cô ấy có 5 bộ não con là Joy, Sadness, Fear, Anger và
              Disgust. Cô ấy sống trong não của mình và phải điều hành các cảm
              xúc của mình để giúp cô ấy sống hạnh phúc.
            </p>
          </div>

          <div className="mt-4">
            <button className="mr-2 rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} />
              Play
            </button>
            <button className="rounded bg-slate-400/35 px-4 py-2 text-[10px] text-white lg:text-lg">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
