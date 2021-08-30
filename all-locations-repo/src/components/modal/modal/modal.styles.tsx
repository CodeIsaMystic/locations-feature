import styled from "styled-components"

import { typeScale, fontColor, marginY, neutral } from "../../../utils/css"

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 17, 34, 0.6);
  z-index: 500;
`

export const StyledModal = styled.div`
  background: ${neutral[100]};
  position: relative;
  margin: auto;
  border-radius: 2px;
  z-index: 100;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Heading4 = styled.h4`
  font-weight: 500;
  line-height: 2.3rem;
  font-size: ${typeScale.header4};
  color: ${fontColor[600]};
  margin: ${marginY[5]};
  padding: 1.1rem 0;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  width: 1.14rem;
  height: 1.14rem;
  padding: 0;
  z-index: 1000;

  font-size: 0.85rem;
  border: none;
  margin-left: 0.5rem;
  background: none;
  padding: 1.1rem 0;

  :hover {
    cursor: pointer;
  }

  & img {
    opacity: 0.5;
    width: 1.2em;
    height: 1.2em;
    transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  width: 440px;
  max-height: 350px;
  overflow-x: hidden;
  overflow-y: auto;
`
