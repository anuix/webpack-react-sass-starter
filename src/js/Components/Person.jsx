import React from 'react';
import Timer from './Timer.jsx';

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("./json/people.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="products">
        {items.map(item => (
          <div className="product" key={item.name}>
            <div className="brand">{item.brand}</div>
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            <div className="timer"><Timer date={new Date()} /></div>
          </div>
        ))}
        </div>
      );
    }
  }
}

export default Person;
