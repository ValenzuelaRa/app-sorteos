export default function CountDown({ cuentaRegresiva, aumentarCuentaRegresiva, disminuirCuentaRegresiva }) {
    return (
      <div className="flex items-center justify-between mb-3">
        <label className="text-xl font-semibold text-white">Cuenta Regresiva</label>
        <div className="flex items-center">
          <input
            type="number"
            className="border border-gray-300 rounded-md px-2 py-1 w-16"
            value={cuentaRegresiva}
            readOnly
          />
          <div className="flex flex-col ml-2">
            <button onClick={aumentarCuentaRegresiva} className="text-gray-200">
              ▲
            </button>
            <button onClick={disminuirCuentaRegresiva} className="text-gray-200">
              ▼
            </button>
          </div>
        </div>
      </div>
    );
  }
  