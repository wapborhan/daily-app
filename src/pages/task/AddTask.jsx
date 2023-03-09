import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indescval: "",
      inammval: "",
      isSubmitDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // triggered everytime value changes in our textboxes
  handleChange(event) {
    this.setState(
      {
        // use dynamic name value to set our state object property
        [event.target.name]: event.target.value,
      },
      function () {
        this.canSubmit();
      }
    );
  }

  canSubmit() {
    const { indescval, inammval } = this.state;
    // If Input Value is blank Button are Disable
    if (indescval.length > 0 && inammval.length > 0) {
      this.setState({
        isSubmitDisabled: false,
      });
    } else {
      this.setState({
        isSubmitDisabled: true,
      });
    }
  }
  // triggered on submit
  handleSubmit = (event) => {
    // get our const values by destructuring state
    event.preventDefault();
    const { indescval, inammval } = this.state;
    // regular javascript alert function
    alert(`Your type detail: \n 
           Desc: ${indescval} \n 
           Amount: ${inammval} \n
           `);
  };
  render() {
    const d = new Date();
    const month = d.getMonth() + 1;
    const time = d.getDate() + "/" + month + "/" + d.getFullYear();
    return (
      <div className="form">
        <Card>
          <CardHeader>Add Task</CardHeader>
          <CardBody>
            <form onSubmit={this.handleSubmit}>
              <div className="row  mb-3">
                <div className="col-md-4">
                  <input type="text" placeholder={time} disabled />
                </div>
                <div className="col-md-4">
                  <select class="form-select align-self-baseline">
                    <option selected>Status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select class="form-select align-self-baseline">
                    <option selected>Priority</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    className="mb-2"
                    id="income-detail"
                    type="text"
                    placeholder="আয়ের বিবরণ"
                    name="indescval"
                    value={this.state.indescval}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="mb-2"
                    id="incamount"
                    type="number"
                    placeholder="পরিমান"
                    name="inammval"
                    value={this.state.inammval}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-success"
                    id="income-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#incomemodal"
                    disabled={this.state.isSubmitDisabled}
                  >
                    আপডেট{" "}
                  </button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    );
  }
}