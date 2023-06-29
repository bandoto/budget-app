import React, { ReactNode } from "react";

import "./Container.scss";

interface ContainerProps {
  children: ReactNode | undefined;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={className ? `container ${className}` : "container"}>
      {children}
    </div>
  );
};
