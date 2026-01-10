import { RVItemProps } from "@/components/Catalog/CatalogGrid/RVItem/RVItem";
import css from "./CamperIdReviews.module.css";

const CamperIdReviews = ({ rv }: RVItemProps) => {
  return (
    <ul className={css.reviews}>
      {rv.reviews.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.reviewItemHeader}>
            <div className={css.avatar}></div>
            <div className={css.reviewerInfo}>
              <h4 className={css.reviewName}>{review.reviewer_name}</h4>
              <p>{review.reviewer_rating}</p>
            </div>
          </div>
          <p className={css.reviewItemText}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperIdReviews;
