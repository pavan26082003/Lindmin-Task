const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-orange-brand text-white hover:bg-orange-dark focus:ring-orange-brand shadow-lg hover:shadow-orange-brand/30",
    secondary: "bg-navy text-white hover:bg-navy-light focus:ring-navy",
    ghost: "border-2 border-white text-white hover:bg-white hover:text-navy",
    outline: "border-2 border-cyan-brand text-cyan-brand hover:bg-cyan-brand hover:text-navy",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
