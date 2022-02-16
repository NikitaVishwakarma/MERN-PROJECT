import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  /*React State => useState
    onchange event => onChange.....etc */
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(name, email, password, secret);
    try {
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
        secret,
      });
      setOk(data.ok);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-warning text-center">
        <div className="col">
          <h1>Register page</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Your name</label>
              </small>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Email</label>
              </small>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Password</label>
              </small>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Pick a question</label>
              </small>
              <select className="form-control">
                <option>what is your pet name?</option>
                <option>what is your favourite food?</option>
                <option>what is your nick name?</option>
              </select>
              <small className="form-text text-muted">
                You can use this when you forget your password
              </small>
            </div>
            <div className="from-group p-2">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type="text"
                className="form-control"
                placeholder="write your text here"
              />
            </div>
            <div className="form-group p-2">
              <button className="btn btn-primary col-12 mt-2">submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="congratulations!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>You have successfully registered</p>
            <Link href="/login">
              <a className="btn btn-primary btn-5m">Login</a>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Register;
