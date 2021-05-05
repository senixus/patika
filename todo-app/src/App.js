import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import TodoHeader from "./components/TodoHeader/TodoHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

  addItem = () => {
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  removeTodo = (id) => {
    const filter = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: filter });
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
