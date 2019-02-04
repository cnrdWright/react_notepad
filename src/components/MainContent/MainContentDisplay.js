import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import './MainContent.css'
import Stories from '../Stories/Stories'

export default class MainContentDisplay extends React.Component {
  render() {
    let selectedStories
    const selectedEpic = {...this.props.selectedEpic}
  
    if(selectedEpic.Title){
      this.props.epics.map((epic)=>{
        if(epic[selectedEpic.Id]){
          selectedStories = epic[selectedEpic.Id]
        }
      })
    }
    
    return(
      <Container>
        <Row>
          <Col className="column-style project" sm="4">Stories:</Col>
          <Col className="column-style" sm="8">Notes</Col>
        </Row>
        <Row className="row-body">
          <Col className="column-body story" sm="4">
            <div>
              <Stories selectedStories={selectedStories}/>
            </div>
          </Col>
          <Col className="column-body" sm="8">Notes about story here</Col>
        </Row>
      </Container>
    )
  }
}
