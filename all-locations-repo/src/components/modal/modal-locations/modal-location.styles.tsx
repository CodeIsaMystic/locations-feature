import styled from "styled-components"

import {
  typeScale,
  fontColor,
  marginY,
  primary,
  neutral,
} from "../../../utils/css"

export const Heading5 = styled.h5`
  font-weight: 600;
  line-height: 2rem;
  font-size: ${typeScale.header5};
  color: ${fontColor[600]};
  margin: ${marginY[5]};
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const ListText = styled.p`
  margin: 0 0 0 0.6rem;
  padding: 0;
`

export const Description = styled.p`
  margin: 0;
  padding: 0;
`

export const IconList = styled.img`
  font-size: 1em;
  opacity: 0.2;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${marginY[20]};

  & button {
    padding: 5px 15px;
    background-color: ${primary[300]};
    color: ${neutral[100]};
    outline: none;
    font-size: ${typeScale.button};
    line-height: 1.7rem;
    border: none;
    border-radius: 20px;
    transition: all 0.2s ease-in;

    &:hover {
      opacity: 0.8;
    }
  }
`
