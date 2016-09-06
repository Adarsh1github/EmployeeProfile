var React=require('react');
var Home=React.createClass({

render:function()
{
  return(
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
       <div className="jumbotron">
         <h2>
           Home
         </h2>
       </div>
      <p>This is an unique website to help you maintain your profile with additional tools and avail various opportunities to interact with other similar employees. </p>
     </div>
     <p>This site will guide you to create your own profile</p>
   </div>
  </div>
  );
}
});
module.exports=Home
