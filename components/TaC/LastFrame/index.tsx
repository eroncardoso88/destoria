import { FunctionComponent } from "react";
import History from "components/TaC/History";
import Footer from 'components/Footer'

const LastFrame: FunctionComponent = function () {
  return (
    <div className="bg-no-repeat bg-characters">
      <History />
      <Footer />
    </div>
  );
};
export default LastFrame;