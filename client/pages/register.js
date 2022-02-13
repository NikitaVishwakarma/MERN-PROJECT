const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-warning text-center">
        <div className="col">
          <h1>Register page</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Your name</label>
              </small>
              <input
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
    </div>
  );
};

export default Register;
