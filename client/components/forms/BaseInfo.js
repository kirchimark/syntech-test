import React from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {setBasicInfo} from '../../actions';
import Input from './Input';
import Submit from './Submit';

import './style/baseinfo.less';

const validate = ({email, password, rPassword}) => {
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errors = {};

  if (!email || !emailReg.test(email)) {
    errors.email = 'Error'
  }  

  if (!password || password !== rPassword || password.length < 6) {
    errors.password = 'Error';
  }

  if (!password || !rPassword || password !== rPassword) {
    errors.rPassword = 'Error';
  }

  return errors;
}



class BaseInfo extends React.Component {

  submit = (values) => {
    this.props.setBasicInfo(values);
    this.props.forward();
  } 

  render() {
    return (
      <form className="form" onSubmit={this.props.handleSubmit(this.submit)}>
        <div className="inputs-wraper">
          <div>
            <Field name="email" component={Input} type="text" label="email" />
          </div>
          <div>
            <Field name="password" component={Input} type="password" label="password" />
          </div>
          <div>
            <Field name="rPassword" component={Input} type="password" label="confirm password"/>
          </div>
        </div>

        <Submit step={this.props.step} backwards={this.props.backwards}/>
      </form>
    )
  }
}

const dispatchStateToProps = (dispatch) => ({
  setBasicInfo: (data) => dispatch(setBasicInfo(data))
})

export default BaseInfo = connect(() => ({}), dispatchStateToProps)(reduxForm({
  form: 'baseInfo',
  validate,
})(BaseInfo));