//SurveyNew shows Survey form and SurveyReview
import React, {Component } from 'react';
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview';
import {reduxForm } from 'redux-form';

class SurveyNew extends Component {
  constructor(props){
    super(props);

    this.state = {showReview : false};
  }

  renderContent(){
    if(this.state.showReview){
      return <SurveyFormReview
        onCancel={() => this.setState({showReview: false})}
        />
    }

    return <SurveyForm onSurveySubmit = {() => this.setState({showReview: true})}/>
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}
//helper is used to destroy the values in form if user clicks cancle and clicks add button again
export default reduxForm({
  form: 'surveyForm'
}) (SurveyNew);
