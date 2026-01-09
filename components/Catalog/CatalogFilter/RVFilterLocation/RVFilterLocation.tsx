interface RVFilterLocationProps {
  location: string;
  setLocation: (location: string) => void;
}

const RVFilterLocation = ({ location, setLocation }: RVFilterLocationProps) => {
  return (
    <label>
      <h3>Location</h3>
      <input
        value={location}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLocation(e.target.value)
        }
        placeholder="City"
      />
    </label>
  );
};

export default RVFilterLocation;
