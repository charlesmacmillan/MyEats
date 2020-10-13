import React, { Component } from 'react';
import './AddThingForm.css';

class AddThingForm extends Component {
 state = {
   invalidForm: true,
   formData: {
     thing: ''
   }
 };

 formRef = React.createRef();

 handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddThing(this.state.formData);
    this.setState({
        formData: {
            thing: ''
        }
    })
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 render() {
   return (
       <form className="AddThingForm" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
           <input
                name="thing"
                placeholder="ADD ITEM"
                value={this.state.formData.thing}
                onChange={this.handleChange}
                required
           />
           <button
                type="submit"
                disabled={this.state.invalidForm}
            >+</button>
       </form>
   );
 }
}
export default AddThingForm;