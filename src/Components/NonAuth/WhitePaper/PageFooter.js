import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Zoom } from 'react-reveal'

const PageFooter = () => {
    return (
        <div className="pageFooter">
            <Container fluid>
                <Col lg={6} className='m-auto text-end me-0'>
                    <div className="mainBannerContent text-light">
                        <h6 className='mt-0'><Zoom left cascade>ALL RIGHTS RESERVED | Arena verse</Zoom></h6>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default PageFooter