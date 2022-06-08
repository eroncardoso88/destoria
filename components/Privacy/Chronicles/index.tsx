import s from "./styles";
import { FunctionComponent } from "react";

const Lore: FunctionComponent = function () {
  return (
    <section {...s.lore} style={{ maxWidth: "1440px", width: "100%" }}>
      <div {...s.loreContent}>
          Privacy Policy
      </div>
    </section>
  );
};
export default Lore;

//garagem 412
