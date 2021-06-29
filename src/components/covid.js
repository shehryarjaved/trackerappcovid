import React, { Component } from "react";
import axios from "axios";

export default class Covid extends Component {
  state = {
    allData: [],
  };
  render() {
    const { allData } = this.state;
    // console.log(this.state.data.data);
    // const list = this.state.data.data.map((product) => (
    //   <li key={product}>{product}</li>
    // ));
    return (
      <div className="container mt-5">
        <div className="row">
          <h1 className="display-4 text-center my-5">Covid-19 summary</h1>
          <table className="table  table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">State</th>
                <th scope="col">Positive</th>
                <th scope="col">Total Test Results</th>
                <th scope="col">Hospitalized currently</th>
                <th scope="col">Date modified</th>
                <th scope="col">Death</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((e, i) => {
                return (
                  <tr>
                    <th scope="row">{e.state}</th>
                    <td>{e.positive}</td>
                    <td>{e.totalTestResults}</td>
                    <td>{e.hospitalizedCurrently}</td>
                    <td>{e.dateModified}</td>
                    <td>{e.death}</td>
                    <td>{e.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("W");
    axios
      .get("https://api.covidtracking.com/v1/states/current.json")
      .then((resp) => {
        // this.setState({ data: resp });
        let a = resp.data;
        console.log(a);
        this.setState({ allData: a });
      });
  }
}