import { dolar_blue_venta } from "./components/NewApi";
import Table from "./components/Table/Table";
import Hero from "./components/Hero";

const Home = async () => {
  const DOVenta = await dolar_blue_venta();

  return (
    <>
      <Hero />
      <Table />
    </>
  );
};

export default Home;

// Kd4bjgmlXI8DkAWQ
