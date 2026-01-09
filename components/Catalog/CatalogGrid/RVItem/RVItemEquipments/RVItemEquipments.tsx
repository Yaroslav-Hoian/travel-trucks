import { RVItemProps } from "../RVItem";
import css from "./RVItemEquipments.module.css";
import Icon from "@/components/icons/Icon";

const RVItemEquipments = ({ rv }: RVItemProps) => {
  const equipmentMap = [
    {
      key: "AC",
      label: "AC",
      value: rv.AC,
      icon: <Icon width={20} height={20} icon="AC" />,
    },
    {
      key: "bathroom",
      label: "Bathroom",
      value: rv.bathroom,
      icon: <Icon width={20} height={20} icon="Bathroom" />,
    },
    {
      key: "kitchen",
      label: "Kitchen",
      value: rv.kitchen,
      icon: <Icon width={20} height={20} icon="Kitchen" />,
    },
    {
      key: "TV",
      label: "TV",
      value: rv.TV,
      icon: <Icon width={20} height={20} icon="TV" />,
    },
    {
      key: "radio",
      label: "Radio",
      value: rv.radio,
      icon: <Icon width={20} height={20} icon="Radio" />,
    },
    {
      key: "refrigerator",
      label: "Refrigerator",
      value: rv.refrigerator,
      icon: <Icon width={20} height={20} icon="Refrigerator" />,
    },
    {
      key: "microwave",
      label: "Microwave",
      value: rv.microwave,
      icon: <Icon width={20} height={20} icon="Microwave" />,
    },
    {
      key: "gas",
      label: "Gas",
      value: rv.gas,
      icon: <Icon width={20} height={20} icon="Gas" />,
    },
    {
      key: "water",
      label: "Water",
      value: rv.water,
      icon: <Icon width={20} height={20} icon="Water" />,
    },
  ];
  return (
    <ul className={css.equipmentList}>
      {equipmentMap
        .filter((item) => item.value)
        .map((item) => (
          <li key={item.key} className={css.equipmentItem}>
            <div className={css.equipmentContent}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default RVItemEquipments;
