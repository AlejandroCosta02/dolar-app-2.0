import Table from "./components/Table/Table";
import Hero from "./components/Hero";
import CookieComponent from "./components/CookieComponent";
import AdsComponent from "./components/Ads/AdsComponent";
import AdsComponentHorizontal from "./components/Ads/AdsComponentHorizontal";
const Home = async () => {
  return (
    <>
      <CookieComponent />
      <Hero />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-2">
          <AdsComponent />
        </div>
        <div className="col-span-12  md:col-span-8">
          <Table />
        </div>
        <div className="col-span-12 md:col-span-2 ">
          <AdsComponent />
        </div>
        <div className="col-span-12">
          <AdsComponentHorizontal />
        </div>
      </div>
    </>
  );
};

export default Home;
