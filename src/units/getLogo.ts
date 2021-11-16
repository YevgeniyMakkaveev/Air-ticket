import aeroflot from "../assets/aeroflotW.png";
import airFrance from "../assets/air-franceW.png";
import airBalti from "../assets/air-baltiW.png";
import alitalia from "../assets/alitalia.png";
import brussels from "../assets/brusselsW.png";
import finnAir from "../assets/finn-airW.png";
import klm from "../assets/klmW.png";
import lot from "../assets/lotW.png";
import pegas from "../assets/pegas.png";
import turkish from "../assets/turkishW.png";
import noName from "../assets/generic.png";

const getLogo = (uid: string) => {
  switch (uid) {
    case "AF":
      return airFrance;
    case "KL":
      return klm;
    case "SU1":
      return aeroflot;
    case "TK":
      return turkish;
    case "AY":
      return finnAir;
    case "BT":
      return airBalti;
    case "AZ":
      return alitalia;
    case "PC":
      return pegas;
    case "SN":
      return brussels;
    case "LO":
      return lot;
    default:
    return noName;
  }
};
export default getLogo