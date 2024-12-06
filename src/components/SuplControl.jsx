export default function SuplControl({ suplentes, aumentarSuplentes, disminuirSuplentes }) {
  return (
    <div className="flex items-center justify-between mb-3 ">
      <label className="text-xl font-semibold text-white"># Suplentes</label>
      <div className="flex items-center">
        <input
          type="number"
          className="border border-gray-300 rounded-md px-2 py-1 w-16"
          value={suplentes}
          readOnly
        />
        <div className="flex flex-col ml-2">
          <button onClick={aumentarSuplentes} className="text-gray-200">
            ▲
          </button>
          <button onClick={disminuirSuplentes} className="text-gray-200">
            ▼
          </button>
        </div>
      </div>
    </div>
  );
}
