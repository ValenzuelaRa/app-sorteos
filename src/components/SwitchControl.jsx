export default function SwitchControl({ label, checked, onChange, id }) {
    return (
      <div className="flex items-center justify-between mb-3">
        <label className="text-xl font-semibold text-white">{label}</label>
        <div className="flex items-center space-x-2">
          <label htmlFor={id} className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              id={id}
              checked={checked}
              onChange={onChange}
              className="sr-only peer text-black"
            />
            <span
              className={`block w-full h-full rounded-full transition-all duration-300 ${
                checked ? "bg-green-500" : "bg-gray-300"
              }`}
            ></span>
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                checked ? "translate-x-6" : ""
              }`}
            ></span>
          </label>
        </div>
      </div>
    );
  }
  