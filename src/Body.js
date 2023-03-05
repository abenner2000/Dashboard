import './Body.css';

function Body(props) {
  return (
    <div className="Bodyy">
      <h1 className="Body_H1">
        {props.content}
      </h1>
    </div>
  );
}

export default Body;
