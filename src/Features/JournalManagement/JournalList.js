import React from "react";
import {Link,useRouteMatch,Route,Switch} from "react-router-dom";
import JournalDetail from "./JournalDetail";
import NotFound from "../NotFound";

const JournalList = ({todos,addTodo,deleteTodo}) => {
  
  const {url} = useRouteMatch();

  return (
    <div>
      <div className="journal-list-wrapper">
        <header>
          <div className="subTitle">Your entries</div>
          <div className="subTitle">Detail</div>
        </header>
      </div>
      <div className="journal-list-main-area">
        <div className="journal-list">
          <ul>
            <li>go to the beach</li>
            <li>camping</li>
            <li>go to the concert</li>
            <li>play game</li>
          </ul>
          <ul>
            {todos.map((todo,index)=> (
              <li key={index.toString()}>
              <Link to={`${url}/${index}`}>{todo.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="journal-detail">
          <Switch>
          <Route path={`${url}/:index`}>
            <JournalDetail todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
          </Route>
          <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default JournalList;
