import { FunctionComponent } from "react";
import s from "./styles";
import Header from "components/Header";
import Chronicles from 'components/TaC/Chronicles'
const FirstFrame: FunctionComponent = function () {
  return (
    <div {...s.majorContainer} >
      <div {...s.contentLayer}>
        <Header />
        <Chronicles />
      </div>
    </div>
  );
};

export default FirstFrame;
