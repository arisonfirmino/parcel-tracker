import Logo from "./assets/logo.png";

import { BsSearch } from "react-icons/bs";

const App = () => {
  return (
    <div className="relative h-screen w-full bg-container-color md:flex md:flex-col md:items-center md:justify-center">
      <div className="bg-white p-2.5 md:w-[525px] md:rounded-xl">
        <div className="flex items-center">
          <figure>
            <img src={Logo} alt="logo" className="w-[120px] md:w-[90px]" />
          </figure>

          <div>
            <h1 className="text-xl font-medium text-blue-tracker">
              Rastreie sua encomenda
            </h1>

            <p className="text-sm text-[#868686]">
              Para rastrear sua encomenda, digite seu código de rastreio.
            </p>
          </div>
        </div>

        <form className="mt-5">
          <div className="relative px-2.5">
            <input
              type="text"
              placeholder="AA123456785BR"
              className="w-full rounded-lg border border-solid border-container-color p-2.5 outline-none"
            />

            <button
              type="submit"
              className="absolute right-0 mr-6 mt-2.5 text-blue-tracker"
            >
              <BsSearch size={24} />
            </button>
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 mt-5 h-[700px] w-full bg-white p-5 md:relative md:h-[500px] md:w-[525px] md:rounded-xl"></div>
    </div>
  );
};

export default App;
