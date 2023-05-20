import Table from "./components/Table/Table";
import Hero from "./components/Hero";
import CookieComponent from "./components/CookieComponent";
import AdsDisplay from "./components/Ads/AdsDisplay";
const Home = async () => {
  return (
    <>
      <CookieComponent />
      <Hero />
      <div className="flex flex-col mx-auto items-center mt-1">
        <AdsDisplay />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-2"></div>
        <div className="col-span-12  md:col-span-8">
          <Table />
        </div>
        <div className="col-span-12 md:col-span-2 "></div>
        <div className="col-span-12 mx-auto items-center mb-1">
          {/* <AdsDisplay /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
