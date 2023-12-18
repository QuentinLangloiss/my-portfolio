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
    const formattedTime = this.state.currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
      <div className="header">
        <div className="logo">
          <img src="src/assets/logo_portfolio.png" alt="Logo" />
        </div>
        <div className="time">
          {formattedTime}
        </div>
      </div>
    );
  }
}

export default Header;
