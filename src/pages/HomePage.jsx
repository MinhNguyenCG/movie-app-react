import Header from "@components/Header";
import FeatureMovie from "@components/FeatureMovie";
import MediaList from "@components/MediaList";
import { TRENDING_TABS, RATED_TABS } from "@libs/constants";

function HomePage() {
  return (
    <>
      <FeatureMovie />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={RATED_TABS} />
    </>
  );
}

export default HomePage;
