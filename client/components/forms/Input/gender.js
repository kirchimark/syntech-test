import React from 'react';
import '../style/gender.less';

class Input extends React.Component {
  render() {
    return <div className="gender">
      <span className={this.props.meta.error && this.props.meta.touched ? 'active' : ''}>Gender</span>
      <div className="gender-inputs">
        
        <input type="radio" {...this.props.input} className="radio" id="male" value="male"/>
        <label htmlFor="male">
          <span>Male</span>
        </label>
        
        <input type="radio" {...this.props.input} className="radio" id="female" value="female"/>
        <label htmlFor="female">
          <span>Femail</span>
        </label>

        <input type="radio" {...this.props.input} className="radio" id="unspec" value="unspecified"/>
        <label htmlFor="unspec">
          <span>Unspecified</span>
        </label>

      </div>
    </div>
  }
}

export default Input;