interface ApiResponse {
  [key: string]: any; // Change the value type to match the API response.
}

const apiUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

export const getApiData = async (): Promise<ApiResponse[]> => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
};
// DOLAR BLUE
export const dolar_blue_compra = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_blue_compra = data[1]?.casa?.compra;

  if (!dolar_blue_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_blue_compra;
};
export const dolar_blue_nombre = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_blue_nombre = data[1]?.casa?.nombre;

  if (!dolar_blue_nombre) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_blue_nombre;
};
export const dolar_blue_venta = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_blue_venta = data[1]?.casa?.venta;

  if (!dolar_blue_venta) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_blue_venta;
};
// DOLAR OFICIAL
export const dolar_oficial_compra = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_oficial_compra = data[0]?.casa?.compra;

  if (!dolar_oficial_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_oficial_compra;
};
export const dolar_oficial_venta = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_oficial_venta = data[0]?.casa?.venta;

  if (!dolar_oficial_venta) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_oficial_venta;
};
export const dolar_oficial_nombre = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_oficial_nombre = data[0]?.casa?.nombre;

  if (!dolar_oficial_nombre) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_oficial_nombre;
};
// DOLAR BOLSA
export const dolar_bolsa_compra = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_bolsa_compra = data[4]?.casa?.compra;

  if (!dolar_bolsa_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  const rounded_dolar_bolsa_compra = parseFloat(dolar_bolsa_compra).toFixed(2);

  return rounded_dolar_bolsa_compra;
};
export const dolar_bolsa_venta = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_bolsa_venta = data[4]?.casa?.venta;

  if (!dolar_bolsa_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }
  const rounded_dolar_bolsa_venta = parseFloat(dolar_bolsa_venta).toFixed(2);
  return rounded_dolar_bolsa_venta;
};
export const dolar_bolsa_nombre = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_bolsa_nombre = data[4]?.casa?.nombre;

  if (!dolar_bolsa_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_bolsa_nombre;
};
// DOLAR CCL
export const dolar_ccl_nombre = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_ccl_nombre = data[3]?.casa?.nombre;

  if (!dolar_ccl_nombre) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_ccl_nombre;
};
export const dolar_ccl_compra = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_ccl_compra = data[3]?.casa?.compra;

  if (!dolar_ccl_compra) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_ccl_compra;
};
export const dolar_ccl_venta = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_ccl_venta = data[3]?.casa?.venta;

  if (!dolar_ccl_venta) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_ccl_venta;
};
// DOLAR TURISTA
export const dolar_turista_venta = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_turista_venta = data[6]?.casa?.venta;

  if (!dolar_turista_venta) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_turista_venta;
};
export const dolar_turista_nombre = async (): Promise<string> => {
  const data = await getApiData();

  const dolar_turista_nombre = data[6]?.casa?.nombre;

  if (!dolar_turista_nombre) {
    throw new Error("Unable to fetch casa venta data from API");
  }

  return dolar_turista_nombre;
};
//DOLAR TARJETA
