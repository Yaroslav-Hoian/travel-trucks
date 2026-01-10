import IconJust from "@/components/icons/IconJust";
import css from "./RVFilterLocation.module.css";

interface RVFilterLocationProps {
  location: string;
  setLocation: (location: string) => void;
}

const RVFilterLocation = ({ location, setLocation }: RVFilterLocationProps) => {
  return (
    <label className={css.locationLabel}>
      <p className={css.locationTitle}>Location</p>
      <div className={css.locationInputContainer}>
        <input
          className={css.locationInput}
          type="text"
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
          placeholder="City"
        />
        <IconJust
          width={20}
          height={20}
          icon="Map"
          className={css.locationIcon}
        />
      </div>
    </label>
  );
};

export default RVFilterLocation;
