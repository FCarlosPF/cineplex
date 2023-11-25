const TableComponent = () => {
  return (
      <table className="min-w-full text-center">
        <thead className="">
          <tr className="">
            <th
              scope="col"
              className="text-sm font-medium text-black px-6 py-4"
            >
              Indicadores
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-black px-6 py-4"
            >
              2022
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-black px-6 py-4"
            >
              2021
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-green-100 border-green-200">
            <td className="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
              Primera Circulante
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              61.14%
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              66.42%
            </td>
          </tr>
          <tr className="border-b bg-green-100 border-green-200">
            <td className="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
              Dia Inventario
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              -10.21
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              -26.51
            </td>
          </tr>
          <tr className="border-b bg-green-100 border-green-200">
            <td className="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
              Día Cobranza
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              -12.33
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              -21.57
            </td>
          </tr>
          <tr className="border-b bg-green-100 border-green-200">
            <td className="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
              Razón deuda
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              80.34%
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              83.30%
            </td>
          </tr>
          <tr className="border-b bg-green-100 border-green-200">
            <td className="text-sm text-black font-medium px-6 py-4 whitespace-nowrap">
              Margen Utilidad Neta
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              3.64%
            </td>
            <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              -66.11%
            </td>
          </tr>
        </tbody>
      </table>
  );
};

export default TableComponent;
