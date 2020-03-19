import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { alphabetArray } from '../../utils/Helpers';
import { activateFilter } from '../../store/Filter';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  }
});

function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const DogFilter: React.FC = () => {
  const alphabet = alphabetArray('a', 'z');

  function handleFiltering(event: React.ChangeEvent<HTMLInputElement>) {
    const { value }: { value: string } = event.target;
    activateFilter(value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <h2>Dog Filter</h2>
      </FormLabel>
      <RadioGroup
        defaultValue="all"
        aria-label="filters"
        name="customized-radios"
        onChange={handleFiltering}
      >
        <FormControlLabel value="all" control={<StyledRadio />} label="All" />
        {alphabet.map((letter: string, index: number) => (
          <FormControlLabel
            key={String(index)}
            value={letter}
            control={<StyledRadio />}
            label={letter.toUpperCase()}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default DogFilter;
