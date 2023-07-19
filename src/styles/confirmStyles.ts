import {styled} from "styled-components";

export const ConfirmBlock = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	width: 100%;
	height: 12vh;
  //transition: transform 1s;
  //transform: translateY(0) ;
	//
	//&:active{
  //  animation: appearance 1s forwards;
  //
  //}
	
	
	
  @keyframes appearance {
    0% {
      transform: translateY(0);
      
    }
    100% {
      transform: translateY(20%);
      
    }
  }
`
