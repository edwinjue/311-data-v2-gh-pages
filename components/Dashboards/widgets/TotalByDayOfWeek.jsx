import React from 'react';
import PropTypes from 'proptypes';

const TotalByDayOfWeek = ({ data }) => (
  <>
    <div>Total Requests by Day of The Week</div>
    <ul>
      {data?.map(request => (
        <li key={request.SRNumber}>{request.SRNumber}</li>
      ))}
    </ul>
  </>
);

TotalByDayOfWeek.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TotalByDayOfWeek;
