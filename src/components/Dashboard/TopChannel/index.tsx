import Image from "next/image";

export default function TopChannel() {
  return (
    <div className="col-span-12 xl:col-span-8">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-3 pt-6 shadow-default sm:px-7 xl:pb-1">
        <h4 className="mb-6 text-xl font-bold text-black">Top Channels</h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-100 sm:grid-cols-5">
            <div className="p-3 xl:p-5">
              <h5 className="text-base font-medium text-gray-500 uppercase xsm:text-base">
                Source
              </h5>
            </div>
            <div className="p-3 text-center xl:p-5">
              <h5 className="text-base font-medium text-gray-500 uppercase xsm:text-base">
                Visitors
              </h5>
            </div>
            <div className="p-3 text-center xl:p-5">
              <h5 className="text-base font-medium text-gray-500 uppercase xsm:text-base">
                Revenues
              </h5>
            </div>
            <div className="hidden p-3 text-center sm:block xl:p-5">
              <h5 className="text-base font-medium text-gray-500 uppercase xsm:text-base">
                Sales
              </h5>
            </div>
            <div className="hidden p-3 text-center sm:block xl:p-5">
              <h5 className="text-base font-medium text-gray-500 uppercase xsm:text-base">
                Conversion
              </h5>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            <div className="flex items-center gap-3 p-3 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={require("@/assets/logo/brand-01.svg")}
                  alt="Brand"
                />
              </div>
              <p className="hidden font-medium text-black sm:block">Google</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-black">3.5K</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-[#81b398]">$5,768</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-black">590</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-green-600">4.8%</p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            <div className="flex items-center gap-3 p-3 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={require("@/assets/logo/brand-02.svg")}
                  alt="Brand"
                />
              </div>
              <p className="hidden font-medium text-black sm:block">Twitter</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-black">2.2K</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-[#81b398]">$4,635</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-black ">467</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-green-600">4.3%</p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-stroke sm:grid-cols-5">
            <div className="flex items-center gap-3 p-3 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={require("@/assets/logo/brand-03.svg")}
                  alt="Brand"
                />
              </div>
              <p className="hidden font-medium text-black sm:block">Github</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-black">2.1K</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-[#81b398]">$4,290</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-black">420</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-green-600">3.7%</p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            <div className="flex items-center gap-3 p-3 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={require("@/assets/logo/brand-04.svg")}
                  alt="Brand"
                />
              </div>
              <p className="hidden font-medium text-black sm:block">Vimeo</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-black">1.5K</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-[#81b398]">$3,580</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-black">389</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-green-600">2.5%</p>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5">
            <div className="flex items-center gap-3 p-3 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={require("@/assets/logo/brand-05.svg")}
                  alt="Brand"
                />
              </div>
              <p className="hidden font-medium text-black sm:block">Facebook</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-black">1.2K</p>
            </div>

            <div className="flex items-center justify-center p-3 xl:p-5">
              <p className="font-medium text-[#81b398]">$2,740</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-black">230</p>
            </div>

            <div className="hidden items-center justify-center p-3 sm:flex xl:p-5">
              <p className="font-medium text-green-600">1.9%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
