import "./Form.css"



export default function Form(){

return(
<div>
<div className="sub">SUBSCRIBE THE NEWSLETTER</div>
<div className="update">Get Weekly Updates</div>
<div className="from-flex">
<form>
<label className="title">Fill you detail to join the party</label><br/>
<input type="text"  placeholder="Your name" className="nameInput"/><br/>
<input type="text"  placeholder="Email Address" className="nameInput"/><br/>
<input type="submit"  placeholder="Submit" className="submit"/>

</form>


</div>



</div>





)


}