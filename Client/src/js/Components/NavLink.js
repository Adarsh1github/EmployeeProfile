var React=require('react');
var {Link}=require('react-router');

var NavLink=React.createClass({
  render:function() {
    return <Link {...this.props} activeClass="active"/>
  }
});
module.exports=NavLink
