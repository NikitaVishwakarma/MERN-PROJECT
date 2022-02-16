import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
}) => (
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
      <button
        disabled={!name || !password || !secret || !email}
        className="btn btn-primary col-12 mt-2"
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "submit"}
      </button>
    </div>
  </form>
);

export default AuthForm;
