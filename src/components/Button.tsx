interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

function Button({ onClick, label, disabled = false }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="btn"
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

export default Button;
