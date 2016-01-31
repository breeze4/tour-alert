import React from 'react';
import { connect } from 'react-redux';

import { followBand } from '../../actions';
import './followBand.scss';

let FollowBand = ({ dispatch }) => {
    let input;

    return (
        <form action="" className="col-xs-8">
            <div className="form-group">

                <label htmlFor="bandInput">Artist or Band to follow:</label>
                <div className="input-group">
                    <input id="bandInput" className="form-control"
                           ref={node => {
                        input = node;
                      }}/>
                <span className='input-group-addon btn btn-default add-button' onClick={() => {
        dispatch(followBand(input.value));
        input.value = '';
      }}>
                    Follow
                </span>
                </div>
            </div>
        </form>
    );
};
export default connect()(FollowBand);