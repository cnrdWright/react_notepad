import React from 'react'

export default class Notes extends React.Component{
  render(){
    let notes
    if(this.props.story){
      notes = this.props.story.Stories.map((note)=>{
        return <p key={note.Id}>{note.Title}</p>
      })
    }
    return(
    <div>
      {notes}
    </div>
    )
  }
}

