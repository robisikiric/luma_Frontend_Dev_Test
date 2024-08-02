const RoundCheckbox = ({ label } : {label : string}) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="round-checkbox"
      />
      <span className="text-white">{label}</span>
    </label>
  );
};

export default RoundCheckbox;
