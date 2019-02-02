import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './MainContent.css'

export default class MainContentDisplay extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col className="column-style project" sm="4">Stories:</Col>
                    <Col className="column-style" sm="8">Notes</Col>
                </Row>
                <Row className="row-body">
                    <Col className="column-body story" sm="4">
                        <div>
                            <h3>Story 1</h3>
                            <p>This is a <strong>subtitle about a <code>EPIC</code> to provide context</strong>.</p>
                            <ListGroup>
                            <ListGroupItem tag="a" href="#" color="primary" action>Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <p />
                            <h3>Story 2</h3>
                            <ListGroup>
                            <ListGroupItem color="primary" tag="button" action>Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col className="column-body" sm="8">Notes about story here</Col>
                </Row>
            </Container>
        )
    }
}
