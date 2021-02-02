import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import NewJournalForm from "./Features/JournalManagement/NewJournalForm";
import JournalList from "./Features/JournalManagement/JournalList";
import LoginPage from "./Features/Login/Login";
import useTodoState from "./Features/JournalManagement/useTodoState";

import {Context} from "./Features/Login/Login";

function App() {
  // useTodoState
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const { auth, setAuth } = Context;

  return (
    <BrowserRouter>
      <div className="App">
        <div className="TitleArea">
          <h1>Mini Journal App</h1>
        </div>

        <div className="option-area">
          <Link className="tab" to="/my-journal">
            All entries
          </Link>
          <Link className="tab" to="/new-journal">
            New journal
          </Link>
          {/* <Link to="/login">Login</Link> */}
          {/* {auth && <Link>Admin</Link>} */}
        </div>

        <div className="MainArea">
          <Switch>
            <Route exact path="/">
              <JournalList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
            </Route>
            <Route path="/my-journal">
              <JournalList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
            </Route>
            <Route path="/new-journal">
              <NewJournalForm
                saveTodo={(todoState) => {
                  addTodo(todoState);
                }}
              />
            </Route>
            <Route path="/login" component={LoginPage} />
            
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
