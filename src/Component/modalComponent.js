import React, { memo } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

function ModalComponent(props) {
    const {modal, toggle, title, children} = props
  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
        </Modal>
      </div>
  )
}

export default memo(ModalComponent)
