import React, { Component } from 'react';
import ExpenseData from '../dataTable/ExpenseData'
import { getExpense } from '../../api/expense';
import Navbar from '../navBar/NavBar';
import "./expense.css"
export default class Expense extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    getExpenseData = async () =>{
        await getExpense().then((res)=>{
          for(var i=0;i<res.length;i++){
            this.state.usersCollection.push(res[i]);
         }
        })
        return this.state.usersCollection
      }

    componentDidMount() {
        if (this.state.usersCollection.length === 0) {
            (async () => {
              try {
                this.setState({ usersCollection: await this.getExpenseData() });
              } catch (e) {
                //...handle the error...
              }
            })();
          }
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <ExpenseData obj={data} key={i} />;
        });
    }

    render() {
        return (
            <>
            <Navbar></Navbar>
            <div className="wrapper-users">
                <div className="con">
                    <table className="styled-table">
                        <thead className="thead-dark">
                            <tr>
                                <td>Expense ID</td>
                                <td>Expense Name</td>
                                <td>Expense Limit</td>
                                <td>Budget Name</td>
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