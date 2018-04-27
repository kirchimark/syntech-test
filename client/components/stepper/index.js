import React from 'react'
import Step from '../step';
import { CSSTransitionGroup } from 'react-transition-group' 

import BaseInfo from '../forms/BaseInfo';
import PersonalInfo from '../forms/PersonalIfno';
import Complete from '../forms/Complete';

import "./style/main.less";

const steps = 2;

class Stepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      withFooter: false
    }
  }

  forward = () => {
    this.setState({
      step: this.state.step < steps  ? this.state.step + 1 : this.state.step,
      withFooter:  this.state.step > steps ? true: false,
    })
  }

  backwards = () => {
    this.setState({
      step: this.state.step > 0 ? this.state.step - 1 : this.state.step,
      withFooter:  this.state.step > steps ? true: false,
    })
  }

  renderStep = (step) => {
    const steps = [BaseInfo, PersonalInfo, Complete];
    const Scene = steps[this.state.step];
    const progress = parseInt(100 / steps.length) *  (this.state.step + 1)
    const newProgress = progress >= 98 ? 100 : progress;
  
    return <Step key={step} 
    step={this.state.step} 
    forward={this.forward} 
    backwards={this.backwards}
    progress={newProgress}
    >
        <Scene />
      </Step> 
  }

  render() {
    return (<div className="stepper-container">
        {this.renderStep(this.state.step)}
    </div>)
  }
}

export default Stepper; 