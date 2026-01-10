import css from "../RVFilterEquipments/RVFilterEquipments.module.css";
import clsx from "clsx";
import { RVForm } from "@/types/RV";
import IconJust from "@/components/icons/IconJust";

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
      className={clsx(css.btn, isActive && css.active)}
      onClick={() => onSelect(value)}
      aria-pressed={isActive}
    >
      <IconJust width={32} height={32} icon={icon} />
      <p className={css.text}>{label}</p>
    </button>
  );
};

export default RVFilterVehicleType;
