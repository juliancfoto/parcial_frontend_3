const Error = ({message}) => {
    return (
        <div className="card" style={{color: "crimson"}}>
          <h2>{message}</h2>
        </div>
      );
};

export default Error;