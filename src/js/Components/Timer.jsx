import React from 'react';

class Timer extends React.Component {


  render() {
    return (
      <section className="section__timer">
        <h1>Timer</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </section>
    );
  }

}

export default Timer;
