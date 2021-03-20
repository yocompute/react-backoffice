import React from 'react';
import { connect } from "react-redux";
import { selecAuthRoles } from '../redux/auth/auth.selectors';
import { Permissions } from '../const';

function WithAuthorize(Component, path){
    const AuthorizedComponent = (props) => {
        const {roles} = props;
        const hasPermission = (roles, path) => {
            const rs = Permissions[path];
            return roles ? roles.some(v => rs.includes(v)) : false;
        }

        if(hasPermission(roles, path)){
            return <Component {...props}/>
        }else{
            return <div>Not authorized!</div>
        }
    }

    const mapStateToProps = (state) => ({
        roles: selecAuthRoles(state),
    });
      
    return connect(mapStateToProps, null)(AuthorizedComponent);

}

export default WithAuthorize;