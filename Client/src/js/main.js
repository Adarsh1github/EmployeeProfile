var React=require('react');
var ReactDOM=require('react-dom');
var Home=require('./Components/Home');
var {browserHistory,Route,Router,IndexRoute}=require('react-router');
var NavBar=require('./Components/NavBar');
var EmployeeData=require('./Components/EmployeeData');

var MainComp=React.createClass({
  render:function(){
    return(
      <div>
        <NavBar/>
       <br/><br/><br/>
          {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
     <Route path="/" component={MainComp}>
       <IndexRoute component={Home}/>
       <Route path="/home" component={Home}/>
       <Route path="/employeedata" component={EmployeeData}/>
     </Route>
  </Router>,document.getElementById('app'));
