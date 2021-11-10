import React from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';

class Friends extends React.Component {
  state = {
    friends: []
  };
  
  componentDidMount() {
    console.log("Friends Props:", this.props);

    axiosWithAuth()
      .get('/data')
      .then(resp => {
        this.setState({
          ...this.state,
          friends: resp.data.payload
        });
      })
      .catch(err=> {
        console.log(err);
      })
  }

  render() {
    
    return (
      <div className="friends">
          asdsad
      </div>
    );
  }
}

export default Friends;
