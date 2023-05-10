import Table from "./components/Table/Table";
import Hero from "./components/Hero";
import CookieComponent from "./components/CookieComponent";
const Home = async () => {
  return (
    <>
      <CookieComponent />
      <Hero />
      <Table />
    </>
  );
};

export default Home;
