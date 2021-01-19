import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';

const todoItems = [
  {
    id: 1,
    title: "Go to the market",
    description: "Buy ingredients to buy supper",
    completed: true
  },

  {
    id: 2,
    title: "Study",
    description: "Read algebra and history books about the coming test",
    completed: true
  },

  {
    id: 3,
    title: "Sally's Book",
    description: "Go to the library to rent Sally's books",
    completed: true
  },

  {
    id: 4,
    title: "Article",
    description: "Write article on how to use django and react",
    completed: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems
    };
  }
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true});
    }
    return this.setState({ viewCompleted: false});
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span onClick={() => this.displayCompleted(true)}
        className={this.state.viewCompleted ? "active" : ""}
        >
          Complete
        </span>
        <span onClick={() => this.displayCompleted(false)}
        className={this.state.viewCompleted ? "active" : ""}
        >
          Incomplete
        </span>
      </div>  
    );
  };
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      item => item.completed == viewCompleted
    );
    return newItems.map(item => (
      <li key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span 
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
          >
            {item.title}
          </span>
      </li>
    ))
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
