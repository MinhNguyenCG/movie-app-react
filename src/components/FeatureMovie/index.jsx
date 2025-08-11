import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";

const FeatureMovie = () => {
  return (
    <div className="relative">
      <Movie />

      <PaginateIndicator />
    </div>
  );
};

export default FeatureMovie;
