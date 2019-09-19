import {combineReducers} from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  //auth and  are key
  //this keys are used to store the reducers output in redux store
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
