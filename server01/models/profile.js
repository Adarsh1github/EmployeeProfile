var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var profiles=new Schema({
Wave:String,
Name:String,
Email:String,
Phone:Number,
Git:String,
Eno:Number,
Dept:String,
Desig:String,
Skills:String,
Experience:String,
});
mongoose.exports=mongoose.model('Profiles',profiles);
