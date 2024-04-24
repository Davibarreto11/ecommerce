import Chart from "./Chart";

export default function Total() {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7 shadow-default sm:px-7 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-48">
            <span className="mr-2 mt-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#ccc]">
              <span className="block h-3 w-full max-w-3 rounded-full"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#81b390] text-lg">
                Total de revendas
              </p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
          <div className="flex min-w-48">
            <span className="mr-2 mt-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#ccc]">
              <span className="block h-3 w-full max-w-3 rounded-full"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-green-700 text-lg">
                Total de vendas
              </p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-44 justify-end">
          <div className="inline-flex items-center rounded-md bg-gray-100 p-1">
            <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card">
              Dia
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card">
              Semana
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card">
              Mês
            </button>
          </div>
        </div>
      </div>

      <div>
        <Chart />
      </div>
    </div>
  );
}
