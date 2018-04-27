import React from 'react';
import '../style/input.less';

class Input extends React.Component {
  render() {
    const {label, input, meta: {error, touched},  ...props} = this.props;
    const err = error && touched;
    
    return <div>
      <label className="input-message">
      <span className={"lable-info " + (err ? 'active' : '')}>{label}</span>
        <input {...input} {...props} className="input-text"/>
      </label>
    </div>
  }
}

export default Input;