const Icon = ({ name, size, color }: {name: string, size: string, color: string}) => {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: size, color }}>
      {name}
    </span>
  );
};

export default Icon;