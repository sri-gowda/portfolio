import appConfig from "../../constants/config";
import { StyledWelcomeText } from "./styles";

const WelcomeText = () => {
  return <StyledWelcomeText>{appConfig.about.welcomeText}</StyledWelcomeText>;
};

export default WelcomeText;
