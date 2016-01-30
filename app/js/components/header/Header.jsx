import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../../actions';
import './header.scss';

const Link = ({
    active,
    children,
    onClick
    }) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a href='#'
           onClick={e => {
         e.preventDefault();
         onClick();
       }}
        >
            {children}
        </a>
    );
};

const mapStateProps = (state,
                       ownProps) => {
    return {
        active: ownProps.filter ===
        state.visibilityFilter
    };
};
const mapDispatchProps = (dispatch,
                          ownProps) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        }
    };
};

const FilterLink = connect(
    mapStateProps,
    mapDispatchProps
)(Link);

export default () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid header-container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Tour Alert</a>
            </div>
            <button type="button" className="sign-in btn btn-default navbar-btn pull-right">Sign in</button>
        </div>
    </nav>
);