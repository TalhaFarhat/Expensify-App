import React from "react";
import ReactDOM from "react-dom/client";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info} </p>
    </div>
);

const withAdminWarninig = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>THis is private info</p>}
            <WrappedComponent {...props} />
        </div>
    )
};
const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>{props.isAuthenticated ? "you are logged in" : 'please login' }</p>
            <WrappedComponent {...props} />
        </div>
    )
};

const AdminInfo = withAdminWarninig(Info);
const AuthInfo = requireAuthentification(Info);

var rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
// root.render(<AdminInfo isAdmin={false} info='Hello' />);
root.render(<AuthInfo isAuthenticated={true} info='Hello' />);

