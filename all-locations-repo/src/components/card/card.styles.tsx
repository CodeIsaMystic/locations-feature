import styled from "styled-components"

import { typeScale, fontColor, neutral, margin, marginY } from "../../utils/css"

export const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0;
  width: 1.85rem;
  height: 1.85rem;
  padding: 0;
  background-color: ${neutral[200]};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.2s linear;

  & img {
    opacity: 0.5;
    width: 1em;
    height: 1em;
    margin-top: 4px;
    margin-right: 2px;
    transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 1;
    }
  }
`

export const CardSM = styled.div`
  position: relative;
  width: 24.3rem;
  margin: ${margin[13]};
  border-radius: 3px;
  box-shadow: none;
  background-color: ${neutral[200]};

  &:hover ${EditButton} {
    opacity: 1;
  }
`

export const Heading4 = styled.h4`
  font-weight: 600;
  line-height: 2.3rem;
  font-size: ${typeScale.header4};
  color: ${fontColor[600]};
  margin: ${marginY[5]};
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const Paragraph = styled.p`
  line-height: 1.7em;
  font-size: 1em;
  color: ${fontColor[600]};
  font-weight: 500;
  margin: 0 0 0 0.6rem;
  padding: 0;
`

export const IconList = styled.img`
  font-size: 1em;
  stroke: ${neutral[400]};
  opacity: 0.2;
`
