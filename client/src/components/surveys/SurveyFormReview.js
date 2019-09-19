//shows filled form for review
import _ from 'lodash'
import React from 'react';
import {connect } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom'

const SurveyFormReview = ({onCancel, formValues, submitSurvey , history}) => {
  const reviewFields = _.map(FIELDS, ({name, label}) => {
    return(
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  });


  return(
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Change
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className="teal btn-flat white-text right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>

  )
};

//taking redux state and transforming into props to sent doen to the component
function mapStateToProps(state) {
  return{
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
