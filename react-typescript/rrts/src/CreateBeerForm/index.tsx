import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  ySpace: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

// import { Container } from './styles';
export interface IBeerFormState {
  name: string;
  selectedType: string;
  hasCorn: boolean;
  ingredients: string;
}

export default function CreateBeerForm() {
  const classes = useStyles();
  const INITIAL_STATE: IBeerFormState = {
    name: '',
    selectedType: '',
    hasCorn: false,
    ingredients: ''
  };
  const [formState, setFormState] = useState(INITIAL_STATE);

  /**
   * Change state based on a given value.
   * @param key - formState key
   * @param value - formState value to be changed
   */
  function handleChange(key: string, value: string | boolean) {
    setFormState({ ...formState, [key]: value });
  }

  /**
   * Handle Form subimit method.
   * @param {React.FormEvent} event - Click event.
   */
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <>
      <form method="post" className={classes.ySpace}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormGroup>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-error-helper-text"
                  label="Beer name"
                  name="name"
                  value={formState.name}
                  onChange={event => handleChange('name', event.target.value)}
                />
                <FormHelperText>Enter a new Beer name</FormHelperText>
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControl className={classes.formControl}>
                <InputLabel id="type-select-label">Type of Beer</InputLabel>
                <Select
                  labelId="type-select-label"
                  id="type-select"
                  value={formState.selectedType}
                  onChange={event =>
                    handleChange('selectedType', event.target.value as string)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Ale">Ale</MenuItem>
                  <MenuItem value="Lager">Lager</MenuItem>
                  <MenuItem value="Stout">Stout</MenuItem>
                </Select>
                <FormHelperText>Choose a beer type</FormHelperText>
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControl className={classes.formControl}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formState.hasCorn}
                      onChange={() =>
                        handleChange('hasCorn', !formState.hasCorn)
                      }
                      value="primary"
                      inputProps={{
                        'aria-label': 'primary checkbox',
                        name: 'hasCorn'
                      }}
                    />
                  }
                  label="Has Corn?"
                />
              </FormControl>
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <FormGroup row>
              <FormControl className={classes.formControl}>
                <TextField
                  multiline
                  id="ingredients-textfield"
                  label="Ingredients"
                  helperText="Enter beer ingredients"
                  rows="4"
                  name="ingredients"
                  value={formState.ingredients}
                  onChange={event =>
                    handleChange('ingredients', event.target.value)
                  }
                />
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup row>
              <FormControl className={classes.formControl}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={event => handleSubmit(event)}
                >
                  Submit
                </Button>
              </FormControl>
            </FormGroup>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
