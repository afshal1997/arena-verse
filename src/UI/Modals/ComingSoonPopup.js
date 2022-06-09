import React from 'react'
import { Modal } from 'react-bootstrap'

const ComingSoonPopup = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      centered
      className='comingSoon text-center'
    >
      <Modal.Header className='border-bottom-0 p-0 position-relative' closeButton />
      <Modal.Body>
        <div className="mainBannerContent text-light">
          <h1>Coming Soon</h1>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ComingSoonPopup