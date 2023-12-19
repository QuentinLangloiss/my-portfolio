import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    const hours = this.state.currentTime.getHours().toString().padStart(2, '0');
    const minutes = this.state.currentTime.getMinutes().toString().padStart(2, '0');

    return (
      <div className="header">
        <div className="name">
          <p className='name-header'>Quentin <br /><span style={{ color: '#2d6a4f', fontWeight: 'bold', marginLeft: '40px' }}>Langlois</span></p>
        </div>
        <div className="time">
        <span className="hours">{hours}</span><span style={{color: '#333333'}}>:</span><span className="minutes">{minutes}</span>
        </div>
      </div>
    );
  }
}

export default Header;
