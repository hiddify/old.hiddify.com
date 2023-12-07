import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = HTMLProps<HTMLDivElement>;
const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={twMerge("mx-auto max-w-7xl  pe-5 ps-5 sm:pe-8 sm:ps-8 ", className)}
    />
  );
};

export default Container;
