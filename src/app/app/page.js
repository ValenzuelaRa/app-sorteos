import Image from "next/image";
import logo from '/assets/logo.png';

export default function AppPage() {
  return (
    <main role="main" className="w-full">

      <div id="container" className="relative mx-auto max-w-[800px] px-4">

        <div className="flex flex-col items-center justify-center -mx-4 gap-8 w-full">
          {/* Logo */}
          <div className="text-center mt-4 mb-1">
            <Image src={logo} alt="Logo" width={250} height={40} />
          </div>

          {/* Contenedor */}  
          <div className="w-full max-w-[500px] py-10 bg-gradient-to-r from-purple-700 to-pink-500 rounded-lg shadow-2xl">
            <div>
              <h1 className="text-2xl font-bold text-center text-white mb-4 pb-2">Opciones</h1>
            </div>

            <div id="sorteos" className="border-t border-neutral-50 px-4 py-3 w-full">
              <div className="flex items-center justify-between mb-3">
                <label className="font-light text-lg  text-gray-200">Título</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 w-3/4"
                  placeholder="comida"
                />
              </div>

              <div className="flex items-center justify-between mb-3">
                <label className="font-medium text-gray-200"># Ganadores</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="border border-gray-300 rounded-md px-2 py-1 w-16"
                    defaultValue={1}
                  />
                  <button className="ml-2 text-gray-500">▲</button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <label className="font-medium text-gray-200"># Suplentes</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="border border-gray-300 rounded-md px-2 py-1 w-16"
                    defaultValue={0}
                  />
                  <button className="ml-2 text-gray-500">▲</button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <label className="font-medium text-gray-200">Premios</label>
                <button className="bg-purple-600 text-white rounded-md px-4 py-2">
                  Definir
                </button>
              </div>

              <div className="flex items-center justify-between mb-3">
                <label className="font-medium text-gray-200">Filtrar Duplicados</label>
                <div className="flex items-center">
                  <span className="text-gray-200">NO</span>
                  <input
                    type="checkbox"
                    className="ml-2 border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-gray-200">
              <span className="text-sm font-medium">AppSorteos PRO</span>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
