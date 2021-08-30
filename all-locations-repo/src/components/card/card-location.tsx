import React from "react"
import { Modal } from "../modal/modal/modal"
import { useModal } from "../../hooks/useModal"
import { useCounter } from "../../hooks/useCounter"

import { ModalLocation } from "../modal/modal-locations/modal-location"

import {
  CardSM,
  Heading4,
  ListItem,
  IconList,
  Paragraph,
  EditButton,
} from "./card.styles"
import { marginLeft } from "../../utils/css"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"

import usersSVG from "../../assets/icons/Users.svg"
import timeZoneSVG from "../../assets/icons/Timezone.svg"
import viewsSVG from "../../assets/icons/Views.svg"
import editSVG from "../../assets/icons/Edit.svg"

import { getDateUIFormat } from "../../utils/helpers/getDateUIFormat"

import { CardLocationProps } from "../../models/card-location-props.interface"

const CardLocation: React.FC<CardLocationProps> = ({ locationCustomer }) => {
  const { isShown, toggle } = useModal()
  const { count, increment } = useCounter()
  const dateFormatted = getDateUIFormat(locationCustomer.createdAt)

  const onTaskTODO = () => {
    console.log("doneTask")
    toggle()
  }

  const cardClicked = () => {
    toggle()
    increment()
  }

  return (
    <React.Fragment>
      <CardSM data-testid="card-component" onClick={cardClicked}>
        <CardActionArea>
          <CardContent style={{ marginLeft: marginLeft[25] }}>
            <Heading4>{locationCustomer.name}</Heading4>
            <ul>
              <ListItem>
                <IconList src={usersSVG} alt="user icon" />
                <Paragraph>{locationCustomer.userCount} Users</Paragraph>
              </ListItem>
              <ListItem>
                <IconList src={timeZoneSVG} alt="timezone icon" />
                <Paragraph>{dateFormatted}</Paragraph>
              </ListItem>
              <ListItem>
                <IconList src={viewsSVG} alt="views icon" />
                <Paragraph>
                  {count} {count > 1 ? "Views" : "View"}
                </Paragraph>
              </ListItem>
            </ul>
          </CardContent>
        </CardActionArea>
        <EditButton>
          <img src={editSVG} alt="pencil icon" />
        </EditButton>
      </CardSM>
      <Modal
        isShown={isShown}
        hide={toggle}
        count={count}
        name={locationCustomer.name}
        modalContent={
          <ModalLocation
            onTaskTODO={onTaskTODO}
            count={count}
            description={locationCustomer.description}
            userCount={locationCustomer.userCount}
            createdAt={locationCustomer.createdAt}
          />
        }
      />
    </React.Fragment>
  )
}

export default CardLocation
