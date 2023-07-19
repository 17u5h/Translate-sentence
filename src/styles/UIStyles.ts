import {styled} from "styled-components";
import {vars} from "./_vars";

type Props = {
	$isConfirmSignVisible?: boolean
}

export const UIButton = styled.button<Props>`
  position: absolute;
  border: none;
  background: #fff;
  background: linear-gradient(90deg, #fff 0%, #f3f3f3 100%);
  width: 60%;
  height: 8vh;
  border-radius: 6vh;
  box-shadow: 4px 4px 4px ${vars.$colorThemeShadows}, -1px -1px 4px #fff;
  font-size: ${vars.$fontsizeRegular};
  font-weight: 600;
  z-index: 1;
  transition: transform 1s;
  transform: ${(props) => (props.$isConfirmSignVisible ? 'translateY(50px)' : 'translateY(0)')};
	
  &:active {
    box-shadow: inset 4px 4px 4px ${vars.$colorThemeShadows}, inset -1px -1px 4px #fff;
    background: linear-gradient(90deg, #f3f3f3 0%, #fff 100%);
    transform: translate(4px, 4px);
  }
`