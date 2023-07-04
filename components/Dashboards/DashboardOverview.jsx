/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'proptypes';
import { useSelector } from 'react-redux';
import ContentBody from '@components/common/ContentBody';
import QuadLayout from '@dashboards/layouts/QuadLayout';

// import ddbh from '@utils/duckDbHelpers.js';
// import DbContext from '@db/DbContext';

/* Ideally these Quadrants should be imported from widgets as standalone React components */
import TotalByDayOfWeek from '@dashboards/widgets/TotalByDayOfWeek';

const Quadrant2 = ({ data }) => <div>Total Requests by Source</div>;
const Quadrant3 = ({ data }) => (
  <div>Median Days to Close Tickets by Request</div>
);
const Quadrant4 = ({ data }) => <div>Division Fulfilling Requests</div>;

const DashboardOverview = () => {
  const [requestsData, setRequestsData] = useState({});

  const isMapLoading = useSelector((state) => state.data.isMapLoading);

  useEffect(() => {
    /* Here is some boilerplate code to fetch data from duckdb */
    // const { conn } = useContext(DbContext);
    // const requestsAsArrowTable = conn.query('select * from requests')
    // const requests  = ddbh.getTableData(requestsAsArrowTable)
    //
    // setRequestsData(requests)
  }, []);

  if (isMapLoading) return null;

  return (
    <ContentBody>
      <QuadLayout
        quadrant1={<TotalByDayOfWeek data={requestsData} />}
        quadrant2={<Quadrant2 data={requestsData} />}
        quadrant3={<Quadrant3 data={requestsData} />}
        quadrant4={<Quadrant4 data={requestsData} />}
      />
    </ContentBody>
  );
};

DashboardOverview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DashboardOverview;
