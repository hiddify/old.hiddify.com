import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = HTMLProps<HTMLDivElement>;
const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        "mx-auto max-w-7xl  ps-5 pe-5 sm:ps-8 sm:pe-8 ",
        className
      )}
    />
  );
};

export default Container;
