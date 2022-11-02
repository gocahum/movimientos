import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const validate = values => {
    const errors = {}
    if (!values.folioPreimpreso) {
        errors.folioPreimpreso = "EL FOLIO PREIMPRESO NO PUEDE ESTAR VACIOS";
    }
    return errors;
}
export default class FolioInput extends Component {
    state = {
        errors: {}
    }
    handleChange =({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit = e => {
        console.log("Se presionó el botón buscar ");
        e.preventDefault();
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
        this.setState({ errors: result })
        if (!Object.keys(result).length) {
            console.log("Folio preimpreso: "+this.state.folioPreimpreso)
            const {buscarMovimientos} = this.props
            buscarMovimientos(this.state.folioPreimpreso)
            e.target.reset()
        }
    }
    render() {
        const {errors} = this.state;
        // const classes = useStyles();
        return (
            <form onSubmit={this.handleSubmit} >
                {/* <label>Folio preimpreso</label> */}
                <TextField  id="standard-basic" label="FOLIO PREIMPRESO" placeholder="FOLIO PREIMPRESO" name="folioPreimpreso" onChange={this.handleChange}/>
                {errors.folioPreimpreso && <p>{errors.folioPreimpreso}</p>}
                {/* <input type="submit" value="Buscar" /> */}
                <Button type="submit" variant="contained" color="primary">BUSCAR</Button>
            </form>
        )
    }
}