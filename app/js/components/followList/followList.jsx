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
        <td className="">
            <a href={link}>
            <i className="glyphicon glyphicon-new-window"></i>
                 View</a>
        </td>
    </tr>
);

const FollowList = ({
    bands
    }) => (
    <div className="col-xs-8">
        <table className="band-list table table-bordered table-striped">
            {bands.map(band =>
            <Band
                key={band.id}
                {...band}
            />
                )}
        </table>
    </div>
);

function select(state) {
    return {
        bands: state.bands
    }
}

export default connect(select)(FollowList);