const Error = ({message, color}) => {
    return (
        <div className="card" style={{color: "crimson"}}>
          <h2>{message}</h2>
        </div>
      );
};

export default Error;