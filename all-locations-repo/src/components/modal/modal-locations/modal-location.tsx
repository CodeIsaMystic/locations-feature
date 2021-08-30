import React from "react"

import {
  Heading5,
  ListItem,
  IconList,
  ModalFooter,
  ListText,
  Description,
} from "./modal-location.styles"
import { marginBottom } from "../../../utils/css"

import usersSVG from "../../../assets/icons/Users.svg"
import timeZoneSVG from "../../../assets/icons/Timezone.svg"
import viewsSVG from "../../../assets/icons/Views.svg"

import { getDateUIFormat } from "../../../utils/helpers/getDateUIFormat"

import { ModalLocationProps } from "../../../models/modal-location-props.interface"

export const ModalLocation: React.FC<ModalLocationProps> = (props) => {
  const dateFormatted = getDateUIFormat(props.createdAt)

  return (
    <React.Fragment>
      <ul style={{ marginBottom: marginBottom[20] }}>
        <ListItem>
          <IconList src={usersSVG} alt="user icon" />
          <ListText>{props.userCount}</ListText>
        </ListItem>
        <ListItem>
          <IconList src={timeZoneSVG} alt="timezone icon" />
          <ListText>{dateFormatted}</ListText>
        </ListItem>
        <ListItem>
          <IconList src={viewsSVG} alt="views icon" />
          <ListText>
            {props.count} {props.count > 1 ? "Views" : "View"}
          </ListText>
        </ListItem>
      </ul>
      <Heading5>Description</Heading5>
      <Description style={{ marginBottom: marginBottom[25] }}>
        {props.description}
      </Description>
      <ModalFooter>
        <button onClick={props.onTaskTODO}>Done</button>
      </ModalFooter>
    </React.Fragment>
  )
}
