import React from 'react';
import Table from "../Components/table";
import PropTypes from 'prop-types';

const Home = (props) => {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <Table picArray={props.picArray}/>
        </React.Fragment>
    );
};

Home.propTypes = {
    picArray: PropTypes.array,
};

export default Home;