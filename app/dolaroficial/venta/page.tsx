import AdsComponent from "@/app/components/Ads/AdsComponent";
import AdsComponentHorizontal from "@/app/components/Ads/AdsComponentHorizontal";
import Conversion_2 from "@/app/components/Conversion_2";
import NavDolar from "@/app/components/NavDolar";
import {
  dolar_oficial_venta,
  dolar_oficial_nombre,
} from "@/app/components/NewApi";
import IndexPage from "@/app/components/sideNavBar/IndexPage";

async function dolarOficialVenta() {
  const dolaroficial_venta = await dolar_oficial_venta();
  const dolaroficial_nombre = await dolar_oficial_nombre();
  const path = "/dolaroficial/compra";
  const path_1 = "/dolaroficial/venta";

  return (
    <>
      <div className="bg-gray-800 py-12">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          {dolaroficial_nombre}
        </h3>
        <IndexPage />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-2">
          <AdsComponent />
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-center text-5xl text-bold my-11">
            ${dolaroficial_venta}
          </p>
          <NavDolar href={path} href_1={path_1} />

          <Conversion_2 dolarblue={parseFloat(dolaroficial_venta)} />
        </div>
        <div className="col-span-12 md:col-span-2">
          <AdsComponent />
        </div>
      </div>
      <AdsComponentHorizontal />
    </>
  );
}

export default dolarOficialVenta;
