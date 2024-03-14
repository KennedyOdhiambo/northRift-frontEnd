type InputFieldProps = {
  label: string;
  type: string;
  id: string;
};

export default function InputField({ label, type, id }: InputFieldProps) {
  return (
    <div className="flex flex-row text-nowrap items-center gap-1">
      <label className=" text-stone-600 text-sm flex-1" htmlFor="passenger-name">
        {label}
      </label>
      <input
        onChange={(e) => {
          e.preventDefault();
        }}
        type={type}
        id={id}
        className="bg-gray-50 flex-1 focus:border-blue-500 focus:ring-1 border p-1.5 outline-none border-gray-300 text-gray-900 text-sm rounded-lg"
      />
    </div>
  );
}
