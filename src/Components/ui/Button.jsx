import "./ui.css";
import { motion } from "framer-motion";

function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  target,
  rel,
  onClick,
  download = false,
  disabled = false,
  className = "",
  icon = null,
  iconPosition = "left",
}) {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        target={target}
        rel={rel}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );
}

export default Button;