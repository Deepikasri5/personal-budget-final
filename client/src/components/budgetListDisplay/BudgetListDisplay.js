import React, { Component } from 'react';
import BudgetData from '../dataTable/BudgetData'
import { getBudget } from '../../api/budget';
import Navbar from "../navBar/NavBar";

export default class BudgetListDisplay extends Component {

    constructor(props) {
        super(props);
        // Accessibility
        this.myDiv = React.createRef();
        this.state = { usersCollection: [] };
    }

    getBudgetData = async () =>{
        await getBudget().then((res)=>{
          for(var i=0;i<res.length;i++){
            this.state.usersCollection.push(res[i]);
         }
        })
        return this.state.usersCollection
      }

    componentDidMount() {
      // Accessibility
      this.myDiv.current.focus();
        if (this.state.usersCollection.length === 0) {
            (async () => {
              try {
                this.setState({ usersCollection: await this.getBudgetData() });
              } catch (e) {
                //...handle the error...
              }
            })();
          }
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <BudgetData obj={data} key={i} />;
        });
    }

    render() {
        return (
          <>
<Navbar/>          <div className="wrapper-users">
          <div className="con" ref={this.myDiv} tabIndex= "-1">
              <table className="styled-table">
                  <thead className="thead-dark">
                      <tr>
                          <td>Budget ID</td>
                          <td>Budget Name</td>
                          <td>Budget Limit</td>
                          <td>Budget Month</td>
                          <td>Budget Status</td>
                      </tr>
                  </thead>
                  <tbody>
                      {this.dataTable()}
                  </tbody>
              </table>
          </div>
      </div>
      </>
        )
    }
}