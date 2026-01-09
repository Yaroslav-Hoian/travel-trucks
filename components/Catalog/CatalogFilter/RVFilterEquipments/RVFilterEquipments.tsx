import Icon from "@/components/icons/Icon";
import css from "./RVFilterEquipments.module.css";
import clsx from "clsx";

interface RVFilterEquipmentsProps {
  label: string;
  icon: string;
  checked: boolean;
  onChange: () => void;
}

const RVFilterEquipment = ({
  label,
  icon,
  checked,
  onChange,
}: RVFilterEquipmentsProps) => {
  return (
    <button
      type="button"
      className={clsx(css.checkBox, checked && css.active)}
      onClick={onChange}
      aria-pressed={checked}
    >
      <Icon width={32} height={32} icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default RVFilterEquipment;
