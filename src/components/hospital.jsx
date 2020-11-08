import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Hospital(props) {
  const hospital_data = props.data ?? [];
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hospital</TableCell>
            <TableCell align="right">In Treatment</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hospital_data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.hospital.name} <br />
                {row.hospital.name_si}
                <br />
                {row.hospital.name_ta}
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  thousandSeparator={true}
                  displayType={"text"}
                  value={row.treatment_total}
                ></NumberFormat>
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  thousandSeparator={true}
                  displayType={"text"}
                  value={row.cumulative_total}
                ></NumberFormat>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
