import { RVItemProps } from "@/components/Catalog/CatalogGrid/RVItem/RVItem";
import css from "./CamperIdGallery.module.css";
import Image from "next/image";

const CamperIdGallery = ({ rv }: RVItemProps) => {
  return (
    <ul className={css.camperIdGalleryContainer}>
      {rv.gallery.map((image, index) => (
        <li key={index} className={css.camperIdGalleryItem}>
          <Image
            src={image.thumb}
            alt={`${rv.name} image ${index + 1}`}
            width={292}
            height={312}
            className={css.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default CamperIdGallery;
