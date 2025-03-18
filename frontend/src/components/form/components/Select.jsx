export default function Select({ defaultValue, name, className, children , onChange }) {
  return (
    <select onChange={onChange} name={name} defaultValue={defaultValue} className={className}>
      {children}
    </select>
  );
}
