import AdsDisplay from "@/app/components/Ads/AdsDisplay";
import Conversion_2 from "@/app/components/Conversion_2";
import NavDolar from "@/app/components/NavDolar";
import { dolar_ccl_compra, dolar_ccl_nombre } from "@/app/components/NewApi";
import IndexPage from "@/app/components/sideNavBar/IndexPage";

async function dolarCclVenta() {
  const dolarccl_compra = await dolar_ccl_compra();
  const dolarccl_nombre = await dolar_ccl_nombre();
  const path = "/dolarccl/compra";
  const path_1 = "/dolarccl/venta";

  return (
    <>
      <div className="bg-gray-800 py-12">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          {dolarccl_nombre}
        </h3>
        <IndexPage />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-2"></div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-center text-5xl text-bold my-11">
            ${dolarccl_compra}
          </p>
          <NavDolar href={path} href_1={path_1} />

          <Conversion_2 dolarblue={parseFloat(dolarccl_compra)} />
        </div>
        <div className="col-span-12 md:col-span-2"></div>
      </div>
      <div className="flex flex-col mx-auto items-center ">
        <AdsDisplay />
      </div>
    </>
  );
}

export default dolarCclVenta;
