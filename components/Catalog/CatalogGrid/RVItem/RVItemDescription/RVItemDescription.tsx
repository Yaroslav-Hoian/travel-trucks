import { RVItemProps } from "../RVItem";
// import css from " ./RVItemDescription.module.css";

const RVItemDescription = ({ rv }: RVItemProps) => {
  return <div>{rv.description}</div>;
};

export default RVItemDescription;
