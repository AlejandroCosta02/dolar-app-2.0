import ConverionVenta from "@/app/components/ConversionVenta";
import {
  dolar_turista_nombre,
  dolar_turista_venta,
} from "@/app/components/NewApi";
import IndexPage from "@/app/components/sideNavBar/IndexPage";

async function DT_Venta() {
  const dolarturista_venta = await dolar_turista_venta();
  const dolarturista_nombre = await dolar_turista_nombre();
  return (
    <>
      <div className="bg-gray-800 py-12">
        <h3 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
          {dolarturista_nombre}
        </h3>
        <IndexPage />
      </div>
      <p className="text-center text-5xl text-bold my-11">
        ${dolarturista_venta}
      </p>
      <ConverionVenta dolarValue={parseFloat(dolarturista_venta)} />
    </>
  );
}

export default DT_Venta;
