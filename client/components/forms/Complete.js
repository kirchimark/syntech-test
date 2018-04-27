import React from 'react';
import {completeForm} from '../../actions';
import {connect} from 'react-redux'
import checkedImage from './assets/checked.svg';
import './style/complete.less';

class Complete extends React.Component {

  completeForm = () => {
    this.props.completeForm();
  }

  render() {
    return <div className="complete">
      <img src={checkedImage} />
      <div className="button" onClick={this.completeForm}>
        <span>Go to dashboard</span>
      </div>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  completeForm: () => dispatch(completeForm()),
})

export default connect(() => ({}), mapDispatchToProps)(Complete);