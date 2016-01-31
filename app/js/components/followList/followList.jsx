import React from 'react';
import { connect } from 'react-redux';

import './followList.scss';

//import '../../../lib/bootstrap/js/bootstrap';

const INFO_POPOVER_TPL = '' +
    '<div id="infoPopver" class="popover" role="tooltip">' +
    '<div class="arrow"></div>' +
    '<h3 class="popover-title"></h3>' +
    '<div class="popover-content"></div>' +
    '</div>';

const Band = ({
    band, nextDate, link
    }) => (
    <tr
        className="band-list-item"
    >
        <td className="col-xs-1">
            <button className="btn btn-default">x</button>
        </td>
        <td className="col-xs-4">{band}</td>
        <td className="col-xs-3">{nextDate ? nextDate : 'None scheduled'}</td>
        <td className="col-xs-3 band-list-item-link">
            {link ?
            <a target="_blank" href={link}>
                <i className="glyphicon glyphicon-new-window"></i>
                View</a> :
            <span>
                <i className="glyphicon glyphicon-info-sign"></i> No tour listing available.
                Know where to look? Help fellow fans out! <a
                href="#">Let us know where we can find it</a>
            </span>}
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