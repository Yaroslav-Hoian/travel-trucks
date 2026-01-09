import css from "./RVItemHeader.module.css";
import { RVItemProps } from "../RVItem";
import Icon from "@/components/icons/Icon";

const RVItemHeader = ({ rv }: RVItemProps) => {
  return (
    <div className={css.rvInfoHeader}>
      <div className={css.rvInfoTitle}>
        <h2 className={css.rvName}>{rv.name}</h2>
        <div>
          <span className={css.rvPrice}>{rv.price}</span>
          <button className={css.favoriteButton} aria-label="Add to favorites">
            <Icon width={24} height={24} icon="Like" />
          </button>
        </div>
      </div>
      <div className={css.rvInfoLocation}>
        <div>
          <Icon width={16} height={16} icon="Like" />
          <p>Reviews</p>
        </div>
        <div>
            <Icon width={16} height={16} icon="Like" />
          <p>{rv.location}</p>
        </div>
      </div>
    </div>
  );
};

export default RVItemHeader;
