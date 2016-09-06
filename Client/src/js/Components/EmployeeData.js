var React=require('react');
var EmployeeData=React.createClass({

getInitialState: function(){
  return ({message:[]});
},
render:function(){
  return(
    <div>
     <div className="EmployeeData">
      <div className="container-fluid">
       <div className="row">
       <form>
         <div className="col-lg-3 pull-left">
          <img src='./user' alt="ProfilePic" class="img-responsive"/>
         </div>
         <div className="col-lg-8 pull-right">
           wave:<select name="value">
                     <option value="Hybrid">Hybird</option>
                     <option value="Fasttrack">FastTrack</option>
                     <option value="Emmersive">Emmersive</option>
              </select><br/>
         </div>
         <div className="col-lg-8 pull-right">
           <br/>
            Name:<input type="text" id="user-name"/><br/><br/>
            E-mail:<input type="text" id="email-id"/><br/><br/>
            Phone:<input type="text" id="phone"/><br/><br/>
            gitURL:<input type="text" id="gitURL"/><br/><br/>
            EmpCode:<input type="text" id="empCode"/><br/><br/>
            EmpDep:<input type="text" id="empDep"/><br/><br/>
            EmpDesig:<input type="text" id="empDesc"/><br/><br/>
            Skills:<textarea id="skills"/><br/><br/>
            Experience:<input type="text" id="experience"/><br/><br/>
            <input type="submit" value="submit"/>
         </div>
         </form>
       </div>
      </div>
     </div>
    </div>
  );
}

})
module.exports=EmployeeData
