import React from 'react'

import Header from './Header';
import ProgressBar from '../progressbar';
import './style/main.less';

class Step extends React.Component {
  render() {
    return (<div className="step">
      <Header title="Signup"/>
      <ProgressBar progress={this.props.progress} />
      <div className="component">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            forward: this.props.forward,
            backwards: this.props.backwards,
            step: this.props.step,
          })
        })} 
      </div>
    </div>);
  }
}

export default Step;