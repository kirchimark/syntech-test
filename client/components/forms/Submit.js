import React from 'react';
import './style/submit.less';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      back: this.props.step !== 0,
    }
  }

  back = () => {
    this.props.backwards();
  }

  render() {

    return <div className="footer">
      <div className="controls-container">
        <span className="back" onClick={this.back}>{this.state.back && "Back"}</span>
        <button className="next" type="submit" className="submit-button">Next</button>
      </div>
    </div>
  }
}

export default Submit;