const Input = ({ label, type, name, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <br />
            <input
                type={type}
                name={name}
                autoComplete="off"
                onChange={(e) => onChange(e.target.value)}
            />
            <br />
        </div>
    );
};

const ShowErrors = ({ errors }) => {
    return (
        <div>
            <ul style={{ color: "red" }}>
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        </div>
    );
};

export { Input, ShowErrors };
