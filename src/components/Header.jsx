import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex h-[8vh] items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4">
        <a>
          <img
            src="../../public/netflix.png"
            alt="Logo Netflix"
            className="w-18 sm:w-20 md:w-22 lg:w-24 xl:w-26"
          />
        </a>
        <a href="#!">Phim</a>
        <a href="#!">Truyền Hình</a>
      </div>

      <div>
        <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
