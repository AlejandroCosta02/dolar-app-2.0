import Conversion_2 from "@/app/components/Conversion_2";
import NavDolar from "@/app/components/NavDolar";
import { dolar_blue_compra, dolar_blue_nombre } from "@/app/components/NewApi";
import IndexPage from "@/app/components/sideNavBar/IndexPage";
// const getDolar = async () => {
//   const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

//   if (!res.ok) {
//     throw new Error("Error al obtener el dolar");
//   }
//   return res.json();
// };

async function DB_Compra() {
  // const dolars = await getDolar();
  // const dolarblue_compra = dolars.blue.value_buy;
  const dolarblue_compra = await dolar_blue_compra();
  const dolarblue_nombre = await dolar_blue_nombre();
  const path = "/dolarblue/compra";
  const path_1 = "/dolarblue/venta";
  return (
    <>
      <div className="bg-gray-800 py-12">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          {dolarblue_nombre}
        </h3>
        <IndexPage />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-2"></div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-center text-5xl text-bold my-11">
            ${dolarblue_compra}
          </p>
          <NavDolar href={path} href_1={path_1} />

          <Conversion_2 dolarblue={parseFloat(dolarblue_compra)} />
        </div>
        <div className="col-span-12 md:col-span-2"></div>
      </div>
    </>
  );
}

export default DB_Compra;
