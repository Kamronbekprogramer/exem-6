import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SnackbarWithDecorators from "../../components/notification";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = form;
    if (username === "admin" && password === "123") {
      setOpen(true);
      setType("success");
      setTimeout(() => {
        navigate("/main");
      }, 1500);
    } else {
      setOpen(true);
      setType("danger");
    }
  };
  return (
    <div className="container">
      <SnackbarWithDecorators open={open} setOpen={setOpen} type={type} />
      <div className="row mt-5">
        <div className="col-md-6 offset-3">
          <div className="card border-primary">
            <div className="card-header bg-primary">
              <h1 className="text-center title-white">Login</h1>
            </div>
            <div className="card-body border-primary">
              <form id="submit" onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  id="outlined-textarea"
                  label="UserName"
                  className="form-control my-2"
                  onChange={handleChange}
                  placeholder="username"
                  name="username"
                  multiline
                />
                <TextField
                  type="password"
                  id="outlined-textarea"
                  label="Password"
                  className="form-control my-2"
                  onChange={handleChange}
                  placeholder="password"
                  name="password"
                  multiline
                />
              </form>
            </div>
            <div className="card-footer border-primary bg-white">
              <Button type="submit" form="submit" variant="contained">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
