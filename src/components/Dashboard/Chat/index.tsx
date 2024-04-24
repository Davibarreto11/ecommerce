import Image from "next/image";

export default function Chat() {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default xl:col-span-4">
      <h4 className="mb-6 px-7 text-xl font-bold text-black">Chats</h4>

      <div>
        <a
          href="#"
          className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image src={require("@/assets/user/user-01.png")} alt="User" />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-red-600"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black">Devid Heilo</h5>
              <p>
                <span className="text-sm font-medium text-black">
                  Olá, como vai você?
                </span>
                <span className="text-xs"> . 12 min</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
              <span className="text-sm font-medium text-white p-1">3</span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100 dark:hover:bg-meta-4"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image src={require("@/assets/user/user-01.png")} alt="User" />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-600"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Henry Fisher</h5>
              <p>
                <span className="text-sm font-medium">
                  I estou esperando por você
                </span>
                <span className="text-xs"> . 5:54 PM</span>
              </p>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image src={require("@/assets/user/user-01.png")} alt="User" />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-600"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Wilium Smith</h5>
              <p>
                <span className="text-sm font-medium">
                  Onde você está agora?
                </span>
                <span className="text-xs"> . 10:12 PM</span>
              </p>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image src={require("@/assets/user/user-01.png")} alt="User" />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-red-600"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black">Henry Deco</h5>
              <p>
                <span className="text-sm font-medium text-black">
                  Muito obrigado!
                </span>
                <span className="text-xs"> . Sáb</span>
              </p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
              <span className="text-sm font-medium text-white p-1">2</span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image src={require("@/assets/user/user-01.png")} alt="User" />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-600"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Jubin Jack</h5>
              <p>
                <span className="text-sm font-medium">
                  Eu realmente amo isso!
                </span>
                <span className="text-xs"> . Out 23</span>
              </p>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100"
        >
          <div className="relative h-14 w-14 rounded-full">
            <Image src={require("@/assets/user/user-01.png")} alt="User" />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-yellow-600"></span>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium">Wilium Smith</h5>
              <p>
                <span className="text-sm font-medium">
                  Onde você está agora?
                </span>
                <span className="text-xs"> . Set 20</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
