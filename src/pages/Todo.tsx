import "./Todo.css";
import { useNavigate, useParams } from "react-router-dom";
import { BsPersonFillCheck } from "react-icons/bs";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  username: string;
  password: string;
  isLoggedIn: boolean;
  todos: Todo[];
}

function Todo() {
  const navigate = useNavigate();
  const { username } = useParams();
  console.log(username);

  const user = localStorage.getItem("users");
  if (user) {
    let parsedUser = JSON.parse(user);
    parsedUser.map((value: User) => {
      if (value.isLoggedIn == false) {
        navigate("/");
      } else {
        if (value.username == username) {
          console.log("Hello how are you");
        }
      }
    });
  } else {
    navigate("/");
  }

  const handleLogout = () => {
    const userData: string | null = localStorage.getItem("users");
  };

  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDoNow</h1>
      </div>
      <div className="input_contain">
        <input className="do_input" type="text" />
        <button className="todo_check"></button>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          <div className="todo_card">
            <h1>hqjkwjsakjkjdklewjji</h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
          <div className="todo_card">
            <h1></h1>
          </div>
        </div>
        <div className="todo_nav">
          <p className="nav_act">
            <BsPersonFillCheck />
            {username}
          </p>
          <p onClick={handleLogout} className="nav_cop">
            logout
          </p>
          {/* <p className="nav_cop">Edit</p> */}
        </div>
      </div>
    </div>
  );
}

export default Todo;
