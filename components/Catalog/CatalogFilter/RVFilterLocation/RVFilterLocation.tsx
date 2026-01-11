import IconJust from "@/components/utils/IconJust";
import css from "./RVFilterLocation.module.css";

interface RVFilterLocationProps {
  location: string;
  setLocation: (location: string) => void;
}

const RVFilterLocation = ({ location, setLocation }: RVFilterLocationProps) => {
  return (
    <div className={css.locationContainer}>
      <label htmlFor="location" className={css.locationLabel}>
        Location
      </label>
      <div className={css.locationInputContainer}>
        <input
          id="location"
          name="location"
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
    </div>
  );
};

export default RVFilterLocation;
