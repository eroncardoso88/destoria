import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";

const Mint: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapperMint}>
        <li {...s.shortItem} onClick={() => window.location.href = `/mint`}>Free Mint</li>
      </ul>
    </div>
  );
};

export default Mint;
