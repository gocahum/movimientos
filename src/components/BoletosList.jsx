import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default class BoletosList extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        const { boletos } = this.props;
        console.log("Boletos: " + boletos);
        boletos.map(boleto => console.log(boleto.boletoId))
        // const classe = useStyles();
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>BOLETO ID</StyledTableCell>
                                <StyledTableCell>SERVICIO</StyledTableCell>
                                <StyledTableCell>CLAVE CORRIDA</StyledTableCell>
                                <StyledTableCell>FECHA CORRIDA</StyledTableCell>
                                <StyledTableCell>ORIGEN CORRIDA</StyledTableCell>
                                <StyledTableCell>DESTINO CORRIDA</StyledTableCell>
                                <StyledTableCell>PASAJERO</StyledTableCell>
                                <StyledTableCell>TIPO OPERACION</StyledTableCell>
                                <StyledTableCell>ASIENTO</StyledTableCell>
                                <StyledTableCell>TIPO PAGO</StyledTableCell>
                                <StyledTableCell>IMPORTE</StyledTableCell>
                                <StyledTableCell>TARIFA BOLETO</StyledTableCell>
                                <StyledTableCell>FOLIO PREIMPRESO</StyledTableCell>
                                <StyledTableCell>CIUDAD VENTA</StyledTableCell>
                                <StyledTableCell>ORIGEN BOLETO</StyledTableCell>
                                <StyledTableCell>DESTINO BOLETO</StyledTableCell>
                                <StyledTableCell>FECHA VENTA</StyledTableCell>
                                <StyledTableCell>TIPO BOLETO</StyledTableCell>
                                <StyledTableCell>SENTIDO VIEJE</StyledTableCell>
                                <StyledTableCell>CARGO</StyledTableCell>
                                <StyledTableCell>CARGO2</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {boletos.map(boleto => (
                                <StyledTableRow key={boleto.boletoId}>
                                    <StyledTableCell component="th" scope="row">{boleto.boletoId}</StyledTableCell>
                                    <StyledTableCell>{boleto.servicio}</StyledTableCell>
                                    <StyledTableCell>{boleto.claveCorrida}</StyledTableCell>
                                    <StyledTableCell>{boleto.fechaCorrida}</StyledTableCell>
                                    <StyledTableCell>{boleto.origenCorrida}</StyledTableCell>
                                    <StyledTableCell>{boleto.destinoCorrida}</StyledTableCell>
                                    <StyledTableCell>{boleto.nombrePasajero}</StyledTableCell>
                                    <StyledTableCell>{boleto.tipoOperacion}</StyledTableCell>
                                    <StyledTableCell>{boleto.noAsiento}</StyledTableCell>
                                    <StyledTableCell>{boleto.tipoPago}</StyledTableCell>
                                    <StyledTableCell>${boleto.importe}</StyledTableCell>
                                    <StyledTableCell>${boleto.precio}</StyledTableCell>
                                    <StyledTableCell>{boleto.foliopreimpreso}</StyledTableCell>
                                    <StyledTableCell>{boleto.ciudadVenta}</StyledTableCell>
                                    <StyledTableCell>{boleto.origenBoleto}</StyledTableCell>
                                    <StyledTableCell>{boleto.destinoBoleto}</StyledTableCell>
                                    <StyledTableCell>{boleto.fechaVenta}</StyledTableCell>
                                    <StyledTableCell>{boleto.tipoBoleto}</StyledTableCell>
                                    <StyledTableCell>{boleto.sentidoViaje}</StyledTableCell>
                                    <StyledTableCell>{boleto.cargo}</StyledTableCell>
                                    <StyledTableCell>{boleto.cargo2}</StyledTableCell>
                                </StyledTableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        )
    }
}