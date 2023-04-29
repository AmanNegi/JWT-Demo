import FieldLabel from "./FieldLabel";

// eslint-disable-next-line react/prop-types
function InputField({ name, id, onChange, value = "" }) {
  return (
    <>
      <FieldLabel name={name} htmlFor={id} />
      <input
        value={value}
        onChange={(v) => onChange(v)}
        className="bg-slate-200 focus:dark:bg-gray-900 dark:bg-gray-900 bg-opacity-40 block w-full h-[6vh] mt-2 mb-5 px-5 dark:text-white"
        type="text"
        id={id}
      />
    </>
  );
}

export default InputField;
