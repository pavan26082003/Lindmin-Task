const SectionHeader = ({ label, title, subtitle, centered = false }) => {
  const alignment = centered ? "text-center items-center" : "items-start";
  
  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignment}`}>
      {label && (
        <span className="text-sm font-semibold tracking-widest uppercase text-cyan-brand">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
        {title}
        <span className="block mt-2 h-1 w-16 bg-cyan-brand rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-500 max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
