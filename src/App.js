import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Georges NDENE',
        bio: 'Un passionné du Developpement web du SENEGAL.',
        imgSrc: 'IMG-16.jpg',
        
        profession: 'Développeur Web'
      },
      shows: false,
      intervalId: null,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows,
      timeElapsed: 0
    }));
  };

  render() {
    const { Person, shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <img src={Person.imgSrc} alt="Profile" />
            <p>{Person.profession}</p>
          </div>
        )}
        <p>Time elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
