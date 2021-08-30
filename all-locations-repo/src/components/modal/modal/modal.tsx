import React, { FunctionComponent, useEffect } from "react"
import FocusLock from "react-focus-lock"
import ReactDOM from "react-dom"
import { useSpring, animated, config } from "react-spring"

import {
  Wrapper,
  StyledModal,
  Header,
  Heading4,
  CloseButton,
  Content,
  Overlay,
} from "./modal.styles"
import { marginBottom, marginX } from "../../../utils/css"
import closeSVG from "../../../assets/icons/Close.svg"

import { ModalProps } from "../../../models/modal-props.interface"

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  name,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide()
    }
  }

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset")
    document.addEventListener("keydown", onKeyDown, false)
    return () => {
      document.removeEventListener("keydown", onKeyDown, false)
    }
  }, [isShown])

  const animation = useSpring({
    opacity: isShown ? 1 : 0,
    transform: isShown ? `translateY(0)` : `translateY(-200%)`,
    config: config.default,
  })

  const Modal = (
    <React.Fragment>
      <Overlay onClick={hide} />
      <FocusLock>
        <Wrapper
          aria-modal
          aria-labelledby={name}
          tabIndex={-1}
          role="dialog"
          data-testid="modal-wrapper"
        >
          <animated.div style={animation}>
            <StyledModal>
              <Header style={{ margin: marginX[25] }}>
                <Heading4 style={{ marginBottom: marginBottom[15] }}>
                  {name}
                </Heading4>
                <CloseButton aria-label="Close Modal" onClick={hide}>
                  <img src={closeSVG} alt="close icon" />
                </CloseButton>
              </Header>
              <Content style={{ margin: marginX[25] }}>{modalContent}</Content>
            </StyledModal>
          </animated.div>
        </Wrapper>
      </FocusLock>
    </React.Fragment>
  )

  return isShown ? ReactDOM.createPortal(Modal, document.body) : null
}
