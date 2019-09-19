//Survey Form shows a form for a user to add
import _ from 'lodash'
import React, {Component } from 'react';
import {reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields'


class SurveyForm extends Component {

  renderFields(){
    return _.map(FIELDS, ({label, name}) => {
      return(
        <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
      );
    });
  }

  render(){
    return(
      <div>
        {/*these arrow function is called automatically when users click submit with valid details*/}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
        <Link to="/surveys" className="red btn-flat  white-text">Cancle</Link>
        <button className="teal btn-flat right white-text" type="submit">
          Review
          <i className="material-icons right">done</i>
        </button>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '')

  if(!values.title){
    errors.title = 'You must provide title';
  }
  if(!values.subject){
    errors.subject = 'You must provide subject';
  }
  if(!values.body){
    errors.body = 'You must provide body';
  }
  if(!values.recipients){
    errors.recipients = 'You must provide emails';
  }



  return errors;
}

export default reduxForm({
  //validate different inputs the user added and to tell user
  validate,
  //form name of surveyForm specifies where redux form is going to store all the values out of the form inside of our redux store
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
