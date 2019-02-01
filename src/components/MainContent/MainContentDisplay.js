import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './MainContent.css'

export default class MainContentDisplay extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col className="column-style project" sm="4">Project</Col>
                    <Col className="column-style" sm="8">Notes</Col>
                </Row>
            </Container>
        )
    }
}
