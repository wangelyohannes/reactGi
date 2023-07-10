import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Wangel",
          birthday: "January 24",
          number: "###-###-####",
        },
        {
          name: "Yonathan",
          birthday: "October 15",
          number: "###-###-####",
        },
        {
          name: "Michelle",
          birthday: "February 2",
          number: "###-###-####",
        },
        // Add people as needed
      ],
    };
  }

  render() {
    const { people } = this.state;

    return (
      <div className="App">
        {people.map((person, index) => (
          <div key={index} className="person-info">
            <h3>name: {person.name}</h3>
            <h3>birthday: {person.birthday}</h3>
            <h3>number: {person.number}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

