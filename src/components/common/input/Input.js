import "./Input.css";

const Input = ({
  type,
  placeholder,
  name,
  id,
  //   label,
  className,
  width = "345px",
  height = "36px",
}) => {
  return (
    <div className="input-container">
      {/* {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )} */}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={`input ${className || ""}`}
        style={{ width, height }}
      />
    </div>
  );
};

export default Input;
