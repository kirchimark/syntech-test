import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form'
import moment from 'moment';
import {connect} from 'react-redux'
import {setPersonalInfo} from '../../actions';
import Birth from './Input/birth';
import Gender from './Input/gender';
import Submit from './Submit';
import './style/personal.less';

const validate = (values) => {
  const errors = {};

  if (!values.day || !values.month || !values.year)
    errors.day = 'Error';

  if (parseInt(values.day) <= 31 && parseInt(values.day) >= 1 && !Number.isInteger(parseInt(values.day))) 
    errors.day = 'Error';

  if (!Number.isInteger(parseInt(values.month)) && !parseInt(values.month) <= 12 && !parseInt(values.month) >= 1)
    errors.month = 'Error';

  if (!/\d{4}/.test(parseInt(values.year))) 
    errors.year = 'Error';
   
  if (!moment(`${values.year}-${values.month}-${values.day}`).isValid()) {
    errors.day = 'Error';
  }

  const now = moment().format('YYYY-MM-DD');
  const diff = moment(now).diff(moment(`${values.year}-${values.month}-${values.day}`), 'years');
  
  if (diff < 18) {
    errors.year = 'Error';
  }
  
  if (!values.gender)
    errors.gender = 'Error';

  return errors;
}


class PersonalInfo extends React.Component {

  submit = (values) => {
    this.props.setPersonalInfo(values);
    this.props.forward();
  } 

  render() {
    return (
      <form className="form" onSubmit={this.props.handleSubmit(this.submit)}>
        <div className="wrapper">
          <Fields names={['day','month','year']} component={Birth}/>
        </div>
        <div className="wrapper">
          <Field name={'gender'} component={Gender}/>
        </div>
        <div className="wrapper">
          <div className="ad">
            <span>Where do you hear about us</span>
            <Field name="ad" component="select">
              <option />
              <option value="Internet">Internet</option>
              <option value="Media">Media</option>
              <option value="Friends">Friends</option>
            </Field>
          </div>
        </div>
        <Submit step={this.props.step} backwards={this.props.backwards}/>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPersonalInfo: (data) => dispatch(setPersonalInfo(data)),
});

export default connect(() => ({}), mapDispatchToProps)(PersonalInfo = reduxForm({
  form: 'personalInfo',
  validate
})(PersonalInfo));