import React from 'react';
import { connect } from 'react-redux';

import { followBand } from '../../actions';
import './followBand.scss';


let FollowBand = ({ dispatch }) => {
    let input;

    let submitBand = () => {
        dispatch(followBand(input.value));
        input.value = '';
    };
    let onKeyPress = (event) => {
        if (event.which === 13) {
            submitBand();
        }
    };
    return (
        <div className="form-group col-xs-8">

            <label htmlFor="bandInput">Artist or Band to follow:</label>
            <div className="input-group">
                <input id="bandInput" className="form-control"
                       onKeyPress={onKeyPress}
                       ref={node => {
                        input = node;
                      }}/>
                <span className='input-group-addon btn btn-default add-button'
                      onClick={submitBand}>
                    Follow
                </span>
            </div>
        </div>
    );
};
export default connect()(FollowBand);