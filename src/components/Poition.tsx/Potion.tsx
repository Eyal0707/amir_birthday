import { useState } from "react";

interface PotionProps {
  src: string;
  color: string;
  onSelect: () => void;
}

function Potion({ src, color, onSelect }: PotionProps) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected((prev) => !prev);
    onSelect(); // Notify the parent component
  }

  return (
    <div
      style={{
        border: isSelected ? `4px solid ${color}` : "",
        borderColor: isSelected ? color : "",
      }}
      onClick={handleClick}
    >
      <img src={src} className="poison" alt="poison" width="200px" />
    </div>
  );
}

export default Potion;
