function Button({ children, href, type = "button", onClick }) {
  if (href) {
    return (
      <a href={href} className="btn">
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className="btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;