import React from 'react';
import { Route, Link } from 'react-router-dom';

const Contact = ({match}) => {
    console.log(match);
    return (
        <div>Contact page component!
            <ul>
                <li><Link to={`${match.url}/phone`}>Phone</Link></li>
                <li><Link to={`${match.url}/email`}>Email</Link></li>
                <li><Link to={`${match.url}/address`}>Address</Link></li>
            </ul>

            <Route path={`${match.path}/address`} render={()=>{
                return (<div>Phone page</div>)
            }}></Route>
            <Route path={`${match.path}/address`} render={()=>{
                return (<div>Email page</div>)
            }}></Route>
            <Route path={`${match.path}/address`} render={()=>{
                return (<div>Address page</div>)
            }}></Route>
            <Route path={`${match.path}/:id`} component={ContactWithId}></Route>
        </div>
    );
}

const ContactWithId = ({match}) => (
    <div>
        <h1> My id is the following: {match.params.id}</h1>
    </div>
)

export default Contact;