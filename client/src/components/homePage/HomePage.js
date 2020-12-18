import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../navBar/NavBar'
import { Card, Col, Row, Divider, Carousel } from 'antd';


import "./homepage.css"
const HomePage = () => {
  const contentStyle = {
    textAlign: 'center',
    borderRadius: '40px',
    width: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50px',
    marginTop: '90px',
    backgroundImage: 'url(https://d1l0gza1nowsqe.cloudfront.net/wp-content/uploads/sites/4/2019/10/budget_620x330.jpg)',
  };

  const contentStyle2 = {
    textAlign: 'center',
    borderRadius: '40px',
    width: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50px',
    marginTop: '90px',
    backgroundImage: 'url(https://www.forbes.com/advisor/wp-content/uploads/2020/04/monthly-budget_getty-e1587512010489.jpg)',
  };
  const contentStyle3 = {
    textAlign: 'center',
    borderRadius: '40px',
    width: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50px',
    marginTop: '90px',
    backgroundImage: 'url(https://www.dax.fr/wp-content/uploads/2019/03/budget-municipal.jpg)',
  };
  const contentStyle4 = {
    textAlign: 'center',
    borderRadius: '40px',
    width: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '50px',
    marginTop: '90px',
    backgroundImage: 'url(https://www.workflowmax.com/hubfs/budget%20900x400v2.png)',
  };
  
  const homeLayout = () => (
    //Accessibility changes ClassName and labels
    <div className="container">
      <header className="heading">
        <div className="heading-content" aria-label="Primary">
          <h2>Personal Budget</h2>
          <h1>
          Know where your money is headed, and be prepared for the future.

          </h1>
          <p>
          is the indispensable tool for owning your financial future.
          </p>
          <Link to="/login" className="btn-2">
            Get Started <i className="fa fa-chevron-right"></i>
          </Link>
        </div>
      </header>
      <Divider/>
        <Divider/>
      <div className="site-card-wrapper">
        
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Manage the Money You Have" bordered={false}>
        Forward-looking tools to help you solve cashflow problems ahead of time. We make stable financial state.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Make More Money Now

" bordered={false}>
          Find side gigs and secondary income options that use things you may already have at your fingertips.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Find a Better Job for Tomorrow" bordered={false}>
        Tools to help you understand if you’re being paid what you are really worth, and plan the next steps in your career.
        </Card>
      </Col>
    </Row>
  </div>
    <div class="caro">
    <Carousel autoplay>
    <div>
      <h1 style={contentStyle3}></h1>
    </div>
    <div>
      <h1 style={contentStyle4}></h1>
    </div>
  </Carousel>,
  <Divider></Divider>
  </div>
  <Divider></Divider>
  <Divider></Divider>

    </div>
  );
  return (    <>
  <NavBar/>
    <React.Fragment>{homeLayout()}</React.Fragment>
    </>);
};

export default HomePage;
