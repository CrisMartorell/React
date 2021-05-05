import React from 'react';
import PropTypes from 'prop-types';

const Result = ({value}) => {
    return (
        <div className="result">
            {value}
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string
}

export default Result;