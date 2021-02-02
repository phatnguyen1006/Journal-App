import React,{useState,useEffect,useRef} from "react";
import {useParams,useHistory} from "react-router-dom";

const JournalDetail = ({todos,addTodo,deleteTodo}) => {

  const history = useHistory();
  const { index } = useParams();
  const [check, setCheck] = useState(false);

  // Func to re-render input
  // let productTest = useRef({
  //   title: "",
  //   content: ""
  // });

  let product = {
    title: "",
    content: ""
  }

  console.log("day la product", product);

  const [text,setText] = useState({
    title: "",
    content: ""
  });

  const reset = () => {
    setText({
      title: "",
      content: ""
    })
  }

  console.log("day la check: ", check);

  useEffect(() => {
    console.log("Effected");
    setCheck(false);
  },[todos,index])

  if ((todos[index] != null)) {
    product = todos[index];
    // setCheck(true);
  }

  // product = todos.find((p,i) => i === Number(index));

  // const handleChange = () => {
  //   product.title = text.title;
  //   product.content = text.content;
  // }

  // console.log(todos[index]);
  // if (todos[index] == null) {
  //   // history.push("/new-journal");
  // } else {
  // productTest.current = todos[index];
  // }

  // Check xem da nhan save chua
  
  if (product !== text && (check === false)) {
    setText(product);
    console.log("Da gan lai nhu trc");
    setCheck(true);
  }

  // console.log(index);
  // console.log("day la product",product);
  // console.log(productTest.current);


  const updateTest = () => {
    todos[index] = text;
    console.log("day la todoindex",todos[index]);
    reset();
    setCheck(false);
  }

  return (
    <div>
      <div className="journal-detail-wrapper">
        <div className="journal-detail-form">
          <div className="form-group">
            <label>Title</label>
            <br />
            <input
              value={text.title}
              onChange={
                (e) => { setText({...text,title:e.target.value})}
              }
              className="title-input-field"
              placeholder="Journal Title"
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              value={text.content}
              type="text"
              onChange={
                (e) => { setText({...text,content:e.target.value}); console.log("Day la return"); }
              }
              className="description-input-field"
              rows="10"
              placeholder="Journal Description"
            ></textarea>
          </div>
          <div>
            <button 
              onClick={() => {
                // deleteTodo(Number(index));
                // addTodo(text);
                // reset();
                // history.replace("/my-journal");

                updateTest();

              }}
              className="button-save-journal">Save</button>
            <button 
              onClick={() => {
                deleteTodo(Number(index));
                history.replace("/my-journal/0");
              }}
              className="button-save-journal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
