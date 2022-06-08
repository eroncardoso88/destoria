import s from "./styles";
import { FunctionComponent, useRef } from "react";

const Lore: FunctionComponent = function () {
  return (
    <section {...s.lore} style={{ maxWidth: "1440px", width: "100%" }}>
      <div {...s.loreContent}>
          The chronicles of destoria
      </div>
    </section>
  );
};
export default Lore;

//garagem 412
