const TextArea = ({ label, name, value = null, onChange, error = false, type = "text" }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <textarea
                type={type}
                className={`form-control ${error ? "is-invalid" : ""}`}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
export default TextArea
