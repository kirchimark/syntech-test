import React from 'react';
import './style/main.less';

class ProgressBar extends React.Component {
  render() {
    return (<div className="progress-bar">
      <div className="progress" style={{background: '#348BE8', width: `${this.props.progress}%`}}>
      </div>
    </div>)
  }
}

export default ProgressBar