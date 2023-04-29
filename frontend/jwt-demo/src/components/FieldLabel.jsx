// eslint-disable-next-line react/prop-types
function FieldLabel({ name, htmlFor }) {
  return (
    <label className="text-lg text-slate-400" htmlFor={htmlFor}>
      {name}
    </label>
  );
}

export default FieldLabel;
