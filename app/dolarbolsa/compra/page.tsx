import AdsDisplay from "@/app/components/Ads/AdsDisplay";
import Conversion_2 from "@/app/components/Conversion_2";
import NavDolar from "@/app/components/NavDolar";
import {
  dolar_bolsa_compra,
  dolar_bolsa_nombre,
} from "@/app/components/NewApi";
import IndexPage from "@/app/components/sideNavBar/IndexPage";

async function BB_Compra() {
  const dolarBolsa_compra = await dolar_bolsa_compra();
  const dolarBolsa_nombre = await dolar_bolsa_nombre();
  const path = "/dolarbolsa/compra";
  const path_1 = "/dolarbolsa/venta";

  return (
    <>
      <div className="bg-gray-800 py-12">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          {dolarBolsa_nombre}
        </h3>
        <IndexPage />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-2"></div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-center text-5xl text-bold my-11">
            ${dolarBolsa_compra}
          </p>
          <NavDolar href={path} href_1={path_1} />

          <Conversion_2 dolarblue={parseFloat(dolarBolsa_compra)} />
        </div>
        <div className="col-span-12 md:col-span-2"></div>
      </div>
      <div className="flex flex-col mx-auto items-center pb-8 ">
        <AdsDisplay />
      </div>
    </>
  );
}

export default BB_Compra;
