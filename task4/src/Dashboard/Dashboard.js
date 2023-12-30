import React from 'react'
import "./Dashboard.css"
import MetricsCard from '../components/metricsCard'
import Graphcards from "../components/Graphcards" 
const Dashboard = () => {
  const graph_data_1 = [
      { city: "Everett", value: 100000 },
      { city: "Seattle", value: 60000 },
      { city: "Lynnwood", value: 49056 },
      { city: "Bothell", value: 47030 },
      { city: "Mukilteo", value: 45890 },
      { city: "Edmonds", value: 34000 }
  ];
  
  const graph_data_2 = [
  { city: "Service Plumbing", value: 170599 },
  { city: "Bid Work HVAC", value: 125900 },
  { city: "Service HVAC", value: 70056 },
  { city: "Bid Work Plumbing", value: 66030 },
  { city: "HWT Replacement", value: 45890 },
    { city: "Maintenance", value: 46000 },
    {
    city:"Material Scale" ,value: 2000
  }
];

  return (
    <div className = "dashboard">
      <div className="row1">
      <h1 className='company-heading'>Company Metrics</h1>
      <div className='companymetrics'>
        <MetricsCard value={"$406,411.29"} Title={"Total Revenue"} />
        <MetricsCard value={"$620"} Title={"Total Jobs Avg"} />
        <MetricsCard value={"655"} Title={"Tickets Created"} />
        <MetricsCard value={"735"} Title={"Total Scheduled"} />
        <MetricsCard value={"$110,448.8"} Title={"Outstanding Amound"} />
        <MetricsCard value={"105"} Title={"Memberships Sold"} />
        <MetricsCard value={"436"} Title={"Jobs Completed"} />
        <MetricsCard value={"65"} Title={"Total Canceled"} />
      </div>

      </div>
      <div className="row2">
        <div className="col1">
          <h1 className="col1-heading">Revenue By Job Location</h1>
          <div classname="graph-cards">
            <Graphcards array={graph_data_1  }/>
          </div>
        </div>
        <div className="col2">
          <h1 className="col2-heading">Revenue By Job Type</h1>
          <Graphcards array={graph_data_2  } />
        </div>
      </div>
    </div>
  )
}

export default Dashboard