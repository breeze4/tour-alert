import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../../actions';

import ListFilter from './listFilter/ListFilter.jsx';

const Band = ({
    onClick,
    completed,
    band
    }) => (
    <li
        onClick={onClick}
        style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
        className={
        completed ?
          'completed' :
          ''
    }
    >
        {band}
    </li>
);

const FollowList = ({
    bands,
    onTodoClick
    }) => (
    <div className="col-xs-8">
        <ListFilter />
        <ul className="list-group">
            {bands.map(band =>
            <Band
                key={band.id}
                {...band}
                onClick={() => onTodoClick(band.id)}
            />
                )}
        </ul>
    </div>
);

const getVisibleTodos = (todos,
                         filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
}

const mapStateToProps = (state) => {
    return {
        bands: getVisibleTodos(
            state.bands,
            state.visibilityFilter
        )
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FollowList);