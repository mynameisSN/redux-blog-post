import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {
  componentDidMount () {
    this.props.fetchUser (this.props.userId);
    // console.log ('userid ', this.props.userId);
  }
  render () {
    // const user = this.props.users.find ((user) => user.id === this.props.userId);
    // console.log (user);
   const {user} = this.props;


    if (!user) {
      return <div> loading...</div>;
    }
    // console.log ('user ', user);

    return (
        
      <div className="header">
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect (mapStateToProps, {fetchUser: fetchUser}) (UserHeader);


