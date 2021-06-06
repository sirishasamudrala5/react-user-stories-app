import {Button, Card, CardContent, Typography} from '@material-ui/core';
import history from '../history'
import { GetStories } from '../Services'

const UserHome = () => {
  const stories = GetStories()
  console.log("st", stories)
  console.log("type", typeof(stories))
  return (
    <div style={{ marginTop: '8em', display:'flex', flexDirection: 'column', justifyContent:'center', width: '28em' }}>
        <Button variant="contained" color="secondary" onClick={() => history.push('/createStory')} style={{margin:'2em'}}>Create User Story</Button>
      <div >{stories && stories.map((story, index) => (
        <Card key={index} style={{ marginTop: '8em'}} >
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Summary - {story.summary}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Description - {story.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Complexity - {story.complexity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Type - {story.type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Estimated date - {story.estimatedHrs}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Cost - {story.cost}
          </Typography>
        </CardContent></Card>))}</div>
    </div>
  ) 
}

export default UserHome;