import { RV } from "@/types/RV";
import css from "./RVList.module.css";
import RVItem from "../RVItem/RVItem";
interface RVListProps {
  items: RV[];
}

const RVList = ({ items }: RVListProps) => {
  return (
    <ul className={css.rvList}>
      {items.map((rv) => (
        <RVItem key={rv.id} rv={rv} />
      ))}
    </ul>
  );
};

export default RVList;
