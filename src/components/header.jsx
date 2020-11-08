import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography, Box } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
//import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.hint,
    backgroundColor: "red",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Header(props) {
  const {
    local_active_cases,
    local_new_cases,
    local_total_cases,
    local_total_number_of_individuals_in_hospitals,
    local_deaths,
    local_new_deaths,
    local_recovered,
    global_new_cases,
    global_total_cases,
    global_deaths,
    global_new_deaths,
    global_recovered,
    total_pcr_testing_count,
  } = props.data;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        align="center"
        bgcolor="info.main"
        color="primary.contrastText"
        p={3}
        m={1}
        fontWeight="fontWeightBold"
        fontSize={40}
      >
        Active Cases :{" "}
        <NumberFormat
          thousandSeparator={true}
          displayType={"text"}
          value={local_active_cases}
        ></NumberFormat>
      </Box>
      <Grid container spacing={1} justify="center">
        {/* <Box bgcolor="primary.main" color="primary.contrastText" p={1}>
          <Card className={classes.root} bgcolor="red">
            <CardContent>
              <Typography variant="h5" component="h2" color="textPrimary">
                Active cases
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                New cases (Sri Lanka) : {local_new_cases}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Total active cases (Sri Lanka) : {local_active_cases}
              </Typography>
              <br />
              <Typography className={classes.pos} color="textSecondary">
                New cases (Global) : {global_new_cases}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Total active cases (Global) : {global_total_cases}
              </Typography>
            </CardContent>
          </Card>
        </Box> */}

        <Box bgcolor="primary.main" color="primary.contrastText" p={1} m={1}>
          <Typography variant="h5" component="h2" color="textPrimary">
            Cases
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">New cases</TableCell>
                  <TableCell align="right">Total cases</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">Sri Lanka</TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={local_new_cases}
                    ></NumberFormat>
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={local_total_cases}
                    ></NumberFormat>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Global</TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={global_new_cases}
                    ></NumberFormat>
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={global_total_cases}
                    ></NumberFormat>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box bgcolor="warning.main" color="primary.contrastText" p={1} m={1}>
          <Typography variant="h5" component="h2" color="textPrimary">
            Deaths
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">New deaths</TableCell>
                  <TableCell align="right">Total deaths</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">Sri Lanka</TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={local_new_deaths}
                    ></NumberFormat>
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={local_deaths}
                    ></NumberFormat>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Global</TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={global_new_deaths}
                    ></NumberFormat>
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={global_deaths}
                    ></NumberFormat>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box bgcolor="success.main" color="primary.contrastText" p={1} m={1}>
          <Typography variant="h5" component="h2" color="textPrimary">
            Recovered
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Total recovered</TableCell>
                  <TableCell align="right">Total PCR test</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">Sri Lanka</TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={local_recovered}
                    ></NumberFormat>
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={total_pcr_testing_count}
                    ></NumberFormat>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Global</TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={global_recovered}
                    ></NumberFormat>
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat
                      thousandSeparator={true}
                      displayType={"text"}
                      value={global_deaths}
                    ></NumberFormat>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </div>
  );
}
