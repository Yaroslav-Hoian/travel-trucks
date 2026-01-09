import Icon from "@/components/icons/Icon";
import css from "./RVFilterVehicleType.module.css";
import clsx from "clsx";
import { RVForm } from "@/types/RV";

interface RVFilterVehicleTypeProps {
  label: string;
  icon: string;
  value: RVForm;
  selected: RVForm | null;
  onSelect: (value: RVForm) => void;
}

const RVFilterVehicleType = ({
  label,
  icon,
  value,
  selected,
  onSelect,
}: RVFilterVehicleTypeProps) => {
  const isActive = selected === value;
  return (
    <button
      type="button"
      className={clsx(css.radio, isActive && css.active)}
      onClick={() => onSelect(value)}
      aria-pressed={isActive}
    >
      <Icon width={32} height={32} icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default RVFilterVehicleType;
