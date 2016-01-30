import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions';
import './addCity.scss';
import '../../../lib/bootstrap/css/bootstrap.css';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className="form-group col-xs-4 col-sm-4 col-md-4">
            <label htmlFor="bandInput">Artist or Band to follow:</label>
            <input id="bandInput" className="form-control"
                   ref={node => {
                        input = node;
                      }}/>
            <button className='btn btn-default add-button' onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
                Add Todo
            </button>
        </div>
    );
};
export default connect()(AddTodo);