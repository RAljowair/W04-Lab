import React from "react";
import axios from "axios";

function PostToDo() {
  const [data, setData] = React.useState([]);
  const [toDo, setTodo] = React.useState("");
  const [id, setId] = React.useState("");
  const api = "https://63e21e1c109336b6cbffdff0.mockapi.io/api/lap/to-do";

  React.useEffect(() => {
    axios
      .get("https://63e21e1c109336b6cbffdff0.mockapi.io/api/lap/to-do")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  console.log(data);

  // const PostData = () => {
  //   axios.post(api, { toDo }).then((res) => {
  //     setData(res.data);
  //   });
  //   axios.get("https://63e21e1c109336b6cbffdff0.mockapi.io/api/lap/to-do");
  //   console.log(toDo);
  // };
  return (
    <div>
      <input
        placeholder="To do"
        onChange={(e) => {
          setTodo(e.target.value);
        }}></input>
      <button>Add To-Do</button>

      <div>
        <ul>
          {data.map((elm: any) => (
            <li>{elm.toDo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostToDo;
