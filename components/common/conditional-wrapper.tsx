import type { ReactElement } from "react";

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
};

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => {
  return condition ? wrapper(children) : children;
};
