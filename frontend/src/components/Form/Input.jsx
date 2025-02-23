export default function Input({ type, value, onChange, required, classname, placeholder }) {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required === true ? true : undefined} 
        className={classname}
        placeholder={placeholder}
      />
    );
  }
  