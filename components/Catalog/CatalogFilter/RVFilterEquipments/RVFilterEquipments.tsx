import css from "./RVFilterEquipments.module.css";
import clsx from "clsx";
import IconJust from "@/components/icons/IconJust";

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
      className={clsx(css.btn, checked && css.active)}
      onClick={onChange}
      aria-pressed={checked}
    >
      <IconJust width={32} height={32} icon={icon} />
      <p className={css.text}>{label}</p>
    </button>
  );
};

export default RVFilterEquipment;
