import React, { Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export function SelectUI(props) {
    const classes = useStyles()
    return(
        <Fragment>
            <FormControl required className={classes.formControl}>
                <InputLabel id="selectLabel">{props.label}</InputLabel>
                <Select labelId="selectLabel" name={props.name} value={props.value} onChange={props.onChange}>
                <MenuItem value="Selecione">Selecione</MenuItem>
                  {props.map}
                </Select>
            </FormControl>
        </Fragment>
    )
}

export default SelectUI;