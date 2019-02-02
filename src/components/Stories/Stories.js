import React from 'react'
import Notes from '../Notes/Notes'

export default class Stories extends React.Component{
  render(){
    let stories
    if(this.props.selectedStories){
      stories = this.props.selectedStories.map((story)=>{
        return (
          <div>
            <h4 key={story.Id + story.Title}>{story.Title}</h4>
            <Notes key={story.Id} story={story}/>
          </div>
        )

      })
    }

    return(
    <div>
      {stories}
    </div>
    )
  }
}

