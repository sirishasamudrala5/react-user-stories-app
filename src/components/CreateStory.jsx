import { Card, Button, TextField, InputAdornment, Input, TextareaAutosize,InputLabel,  Select, MenuItem, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';
import { CreateUserStory} from '../Services'

const UserHome = () => {
    const [type, setType] = useState("")
    const [complexity, setComplexity] = useState("low")
    const [cost, setCost] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          summary: event.target.summary.value,
          description: event.target.description.value,
          type: type,
          complexity: complexity,
          estimatedtime: event.target.estimatedtime.value,
          cost: cost
        }
        console.log("event", data);
        CreateUserStory(data)
      }

    return (
    <Card style={{ marginTop: '8em', display:'flex', justifyContent:'center', width: '50em' }}>
    <form style={{ marginTop: '1em', display: "flex", flexDirection:"column", justifyContent:'center', width:'46em' }} onSubmit={handleSubmit}>
      <TextField id="summary" name="summary" label="Summary" variant="outlined" required style={{margin: "0.5em"}} />
      <FormControlLabel
      style={{margin: "0.5em"}}
        control={<div style={{width: "100%"}}><InputLabel required htmlFor="description">Description</InputLabel>
        <TextareaAutosize required name="description" variant="outlined" aria-label="Description" rowsMin={6} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."  style={{width: "100%"}} />
        </div>}
      /> 
      <FormControlLabel
        style={{margin: "0.5em"}}
        control={<div style={{width: "100%"}}><InputLabel htmlFor="type" required>Type</InputLabel>
        <Select
            id="type"
            name="type"
            onChange={(event) => setType(event.target.value)}
            variant="outlined"
            value={type}
            style={{width: "100%"}}
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"developement"}>Developement</MenuItem>
            <MenuItem value={"enhancement"}>Enhancement</MenuItem>
            <MenuItem value={"bugfix"}>BugFix</MenuItem>
            <MenuItem value={"qa"}>QA</MenuItem>
          </Select></div>}
        />
        <FormControlLabel
        style={{margin: "0.5em"}}
        control={<div style={{width: "100%"}}><InputLabel htmlFor="complexity" required>Complexity</InputLabel>
        <Select
            id="complexity"
            name="complexity"
            onChange={(event) => setComplexity(event.target.value)}
            variant="outlined"
            value={complexity}
            style={{width: "100%"}}
            required
          >
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select></div>}
        />
        <TextField id="estimatedtime" name="estimatedtime" label="Estimated Time for Completion" placeholder="in no.of days" type="number" variant="outlined"  style={{margin: "0.5em"}} />
        <FormControlLabel 
        style={{margin: "0.5em", width:"100%"}}
        control={<div style={{width:"100%"}}>
            <InputLabel htmlFor="cost" required>Cost</InputLabel>
          <Input 
            id="cost"
            name="cost"
            value={cost}
            style={{width:"95%"}}
            type="number"
            onChange={(event) => setCost(event.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            required
          />
        </div>}
        />
        <Button variant="contained" color="secondary" style={{margin: "2.5em"}} type="submit">Create User Story</Button>
    </form>
  </Card>)
}

export default UserHome;