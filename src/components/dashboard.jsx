import React, { Component } from "react";
import { getData } from "../services/covidDataServiceLk";
import { Button } from "@material-ui/core";
import Header from "./header";
import Hospital from "./hospital";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NumberFormat from "react-number-format";

class DashBoard extends Component {
  state = { data: Object };
  async componentDidMount() {
    const respose = await getData();
    this.setState(respose.data);
  }

  async refreshData(e) {
    e.preventDefault();
    const respose = await getData();
    this.setState(respose.data);
  }

  render() {
    return (
      <div>
        <Grid container spacing={3} justify="center">
          <Typography>
            <h1>Coronavirus (COVID-19) - Statics Dashboard - Sri Lanka </h1>
            <Grid>
              <h3>
                Last updated : {this.state.data.update_date_time}{" "}
                <span>
                  {" "}
                  || Source :{" "}
                  <a target="_blank" href="https://www.hpb.health.gov.lk">
                    HEALTH PROMOTION BUREAU
                  </a>
                </span>
              </h3>
              {/* <Button
                allign="right"
                variant="contained"
                color="primary"
                onClick={this.refreshData}
              >
                Refresh
              </Button> */}
            </Grid>
          </Typography>
          <Header data={this.state.data}></Header>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h3>Patiets in Hospital</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Hospital data={this.state.data.hospital_data}></Hospital>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </div>
    );
  }
}

export default DashBoard;
