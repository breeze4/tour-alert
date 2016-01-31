import React from 'react';
import { connect } from 'react-redux';

import './followList.scss';

const Band = ({
    band, nextDate, link
    }) => (
    <tr
        className="band-list-item"
    >
        <td>
            <button className="btn btn-default">x</button>
        </td>
        <td>{band}</td>
        <td>{nextDate}</td>
        <td className="band-list-item-link">
            {link ?
            <a target="_blank" href={link}>
                <i className="glyphicon glyphicon-new-window"></i>
                View</a> :
                'not available'}
        </td>
    </tr>
);

const FollowList = ({
    bands
    }) => (
    <div className="col-xs-10">
        <table className="band-list table table-bordered table-striped">
            <tbody>{bands.map(band =>
            <Band
                key={band.id}
                {...band}
            />
                )}
            </tbody>
        </table>
    </div>
);

function select(state) {
    return {
        bands: state.bands
    }
}

export default connect(select)(FollowList);