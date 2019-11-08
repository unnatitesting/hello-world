import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      headerPropText:"this is for passing props in header component...",
      contentPropText : "this is for passing props in content component..."
    }
  }
  render() {
    return (<div className="App">
      <Header propHeader={this.state.headerPropText}/>
      <Content  propContent={this.state.contentPropText}/>
      <Clock />
      {this.props.header}
      <LineBreak />
      {this.props.content}
      <LineBreak />
      {this.props.defaultHeader}
      {this.props.defaultContent}
    </div>
    );
  }

}
App.defaultProps = {
  defaultHeader : "this is default header...",
  defaultContent : "this is default content..."
}
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to ReactJS !!**"
    }
  }
  render() {
    return (<div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{this.state.headerText}</h2>
      <h3>{this.props.propHeader}</h3>
    </div>);
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "foo",
          age: "30"
        },
        {
          id: 2,
          name: "bar",
          age: "20"
        },
        {
          id: 3,
          name: "baz",
          age: "35"
        }
      ]
    }
  }
  render() {
    return (<div><p className="App-intro">
      <h1>What is JSX!</h1>
      <p>In this lecture, we will go over the JSX tags</p>
      <h3>{this.props.propContent}</h3>
    </p>
      <p>hello world!!!</p>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data.map((person, i) => <TableRow key={i} data={person} />)
          }
        </tbody>
      </table>
    </div>);
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick()
      , 1000)
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  render() {
    return (<h2> Time is :{this.state.date.toLocaleTimeString()}</h2>);
  }
}

class LineBreak extends Component {
  render() {
    return (
      <br />
    );
  }
}
export default App;
