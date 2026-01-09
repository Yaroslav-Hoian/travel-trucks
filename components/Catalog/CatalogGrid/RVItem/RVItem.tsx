import { RV } from "@/types/RV";
import Image from "next/image";
import css from "./RVItem.module.css";
import RVItemHeader from "./RVItemHeader/RVItemHeader";
import RVItemDescription from "./RVItemDescription/RVItemDescription";
import RVItemEquipments from "./RVItemEquipments/RVItemEquipments";
import Link from "next/link";

export interface RVItemProps {
  rv: RV;
}

const RVItem = ({ rv }: RVItemProps) => {
  return (
    <li className={css.rvItem}>
      <Image
        src={rv.gallery[0].thumb}
        alt={rv.name}
        className={css.rvImage}
        width={292}
        height={320}
      />
      <div className={css.rvInfo}>
        <RVItemHeader rv={rv} />
        <RVItemDescription rv={rv} />
        <RVItemEquipments rv={rv} />
        <button>
          <Link href={`/campers/${rv.id}`}>Show more</Link>
        </button>
      </div>
    </li>
  );
};

export default RVItem;
