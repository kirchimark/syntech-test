import React from 'react';
import '../style/birth.less';

class Input extends React.Component {
  render() {
    const day = this.props.day.meta.touched && this.props.day.meta.error;
    const month = this.props.month.meta.touched && this.props.month.meta.error;
    const year = this.props.year.meta.touched && this.props.year.meta.error;

    const err = day || month || year;
      
    
    return <div className="date">
      <span className={err ? 'active' : ''}>Date of birth</span>
      <div className="date-inputs"> 
        <div>
          <input type="text" {...this.props.day.input} className='date-input' placeholder='DD'/>
        </div>
        <div>
          <input type="text" {...this.props.month.input} className='date-input' placeholder='MM'/>
        </div>
        <div>
          <input type="text" {...this.props.year.input} className='date-input' placeholder='YYYY'/>
        </div>

      </div>
    </div>
  }
}

export default Input;