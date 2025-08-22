import React, { Component } from 'react';

// Child component demonstrates mounting, updating and unmounting
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { localCount: 0 };
    console.log('Child: constructor');
  }

  componentDidMount() {
    console.log('Child: componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Child: componentDidUpdate', { prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Child: componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h3>Child component</h3>
        <p>Message from parent: {this.props.message}</p>
        <p>Child local count: {this.state.localCount}</p>
        <button onClick={() => this.setState({ localCount: this.state.localCount + 1 })}>
          Increment child local count
        </button>
      </div>
    );
  }
}

// Single-page App demonstrating lifecycle methods
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showChild: true,
      childMessage: 'Hello from App'
    };
    console.log('App: constructor');
  }

  componentDidMount() {
    console.log('App: componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App: componentDidUpdate', { prevState });
  }

  componentWillUnmount() {
    console.log('App: componentWillUnmount');
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1>React Lifecycle Demo (class components)</h1>

        <section>
          <h2>Parent</h2>
          <p>Count: {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increment parent count
          </button>
          <button onClick={() => this.setState({ showChild: !this.state.showChild })} style={{ marginLeft: 8 }}>
            {this.state.showChild ? 'Unmount Child' : 'Mount Child'}
          </button>
          <button
            onClick={() => this.setState({ childMessage: `Updated at ${new Date().toLocaleTimeString()}` })}
            style={{ marginLeft: 8 }}
          >
            Update child prop
          </button>
        </section>

        <hr />

        {this.state.showChild && <Child message={this.state.childMessage} />}

        <footer style={{ marginTop: 20 }}>
          <small>Open the console to see lifecycle logs (componentDidMount / componentDidUpdate / componentWillUnmount).</small>
        </footer>
      </div>
    );
  }
}

export default App;
