import { NavigationButton, NavigationContainer } from "../StyledComponents";

type NavigationProps = {
  onPrevClick: () => void;
  onNextClick: () => void;
  prevDisabled: boolean;
  nextDisbled: boolean;
};

const Navigation = ({
  onPrevClick,
  onNextClick,
  prevDisabled,
  nextDisbled,
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
      Következő
    </NavigationButton>
  </NavigationContainer>
);

export default Navigation;
