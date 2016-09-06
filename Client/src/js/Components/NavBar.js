var React = require('react');
var {Link}=require('react-router');
var NavLink=require('./NavLink');

var NavBar = React.createClass({
render: function(){
  return(
    <div className="container-fluid">
      <div className="row" id="row1">
        <div className="col-md-3">
         <div className="jombotron">
              <h1>EmployeeProfile</h1>
            <ul className="nav navbar-nav">
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/employeedata">Employee Profile</NavLink></li>
           </ul>
         </div>
        </div>
      </div>
  </div>
);
}
});
module.exports = NavBar;
