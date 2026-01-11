import css from "./RVItemHeader.module.css";
import { RVItemProps } from "../RVItem";
import IconJust from "@/components/utils/IconJust";

const RVItemHeader = ({ rv }: RVItemProps) => {
  return (
    <div className={css.rvInfoHeader}>
      <div className={css.rvInfoTitle}>
        <h2 className={css.rvName}>{rv.name}</h2>
        <div className={css.rvPriceWrapper}>
          <span className={css.rvPrice}>€{rv.price.toFixed(2)}</span>
          <button className={css.favoriteButton} aria-label="Add to favorites">
            <IconJust
              width={24}
              height={24}
              icon="Like"
              className={css.favoriteIcon}
            />
          </button>
        </div>
      </div>
      <div className={css.rvInfoReviewrsLocation}>
        <div className={css.rvInfoReviewrsLocationWrapper}>
          <IconJust
            width={16}
            height={16}
            icon="Star"
            className={css.starFilled}
          />
          <p className={`${css.rvInfoReviewrsLocationText} ${css.underline}`}>
            {rv.rating} ({rv.reviews.length} Reviews)
          </p>
        </div>
        <div className={css.rvInfoReviewrsLocationWrapper}>
          <IconJust width={16} height={16} icon="Map" />
          <p className={css.rvInfoReviewrsLocationText}>{rv.location}</p>
        </div>
      </div>
    </div>
  );
};

export default RVItemHeader;
