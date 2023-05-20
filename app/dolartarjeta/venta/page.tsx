import AdsDisplay from "@/app/components/Ads/AdsDisplay";
import ConverionVenta from "@/app/components/ConversionVenta";
import { dolar_oficial_venta } from "@/app/components/NewApi";
import IndexPage from "@/app/components/sideNavBar/IndexPage";

async function DTarjeta_Venta() {
  const dolartarjeta_venta = await dolar_oficial_venta();
  const dolarTarjetaVentaAsNumber = parseFloat(dolartarjeta_venta);
  const newDolarTarjetaVenta = dolarTarjetaVentaAsNumber * 1.75;
  const dolartarjeta_nombre = "Dolar tarjeta";
  return (
    <>
      <div className="bg-gray-800 py-12">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          {dolartarjeta_nombre}
        </h3>
        <IndexPage />
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-2"></div>
        <div className="col-span-12 md:col-span-8">
          <p className="text-center text-5xl text-bold my-11">
            ${newDolarTarjetaVenta}
          </p>
          <ConverionVenta dolarValue={newDolarTarjetaVenta} />
        </div>
        <div className="col-span-12 md:col-span-2"></div>
      </div>
      <div className="flex flex-col mx-auto items-center ">
        <AdsDisplay />
      </div>
    </>
  );
}

export default DTarjeta_Venta;
