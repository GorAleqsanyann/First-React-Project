import { connect } from "react-redux";
import { decrementLikes, incrementLikes } from "../../redux/about/action";
import "./Likes.css";

function Likes(props) {
  console.log(props);

  return (
    <div className="buttonControlls">
      <button onClick={props.onIncrement}>❤️{props.likes}</button>
      <button disabled={props.likes == 0} onClick={props.onDecrement}>
        👎
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  const { likes } = state;
  return {
    likes: likes.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(incrementLikes()),
    onDecrement: () => dispatch(decrementLikes()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
