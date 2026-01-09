import { IconProps } from "@/types/RV";

const Icon = ({ width, height, icon }: IconProps) => {
  return (
    <span>
      <svg width={width} height={height}>
        <use href={`/sprite/sprite.svg#icon-${icon}`} />
      </svg>
    </span>
  );
};

export default Icon;
