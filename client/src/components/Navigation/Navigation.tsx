import { NavigationButton, NavigationContainer } from "../StyledComponents";

type NavigationProps = {
  onPrevClick: () => void;
  onNextClick: () => void;
  prevDisabled: boolean;
  nextDisbled: boolean;
  isOnLastStage: boolean;
};

const Navigation = ({
  onPrevClick,
  onNextClick,
  prevDisabled,
  nextDisbled,
  isOnLastStage,
}: NavigationProps) => (
  <NavigationContainer>
    <NavigationButton
      disabled={prevDisabled}
      onClick={onPrevClick}
      variant="contained"
    >
      Előző
    </NavigationButton>
    <NavigationButton
      disabled={nextDisbled}
      onClick={onNextClick}
      variant="contained"
    >
      {isOnLastStage ? "Befejezés" : "Következő"}
    </NavigationButton>
  </NavigationContainer>
);

export default Navigation;
