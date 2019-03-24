import React, {Component} from 'react';
/*import Tbody from './tbody';*/
import PropTypes from 'prop-types';


class Table extends Component {
    render() {
        return this.props.picArray.map((item, key) => (
            <table key={key}>
            <tr>
                <td>
                    <td>
                        <img src={item.thumbnails.w160}/>
                    </td>
                    <td>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>

                    </td>
                    <td>
                        <a href={item.filename}>View</a>
                    </td>
                    <hr/>
                </td>
            </tr>
            </table>
        ));
    }
}


/*
const Table = (props) => {
    return(
        <table>
            <Tbody picArray={props.picArray}/>
        </table>
    );
};

*/
Table.propTypes = {
    picArray: PropTypes.array,
};

export default Table;