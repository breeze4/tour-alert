import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../actions';
import './addTodo.scss';
import '../../../lib/bootstrap/css/bootstrap.css';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={node => {
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