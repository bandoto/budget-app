import React from "react";

import "./Loader.scss";

interface LoaderProps {
  text: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return <h1 className="loader">{text}</h1>;
};

export default Loader;
