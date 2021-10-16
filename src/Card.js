import "./Card.css";

function Card({ data }) {
  return (
    <div>
      <img src={data.img} className="charimg" alt={data.name} />
      <h1>{data.name}</h1>
      <h2>{data.status}</h2>
      <h3>{data.nickname}</h3>
      <h4>{data.category}</h4>
      <h5>{data.occupation[0]}</h5>
    </div>
  );
}

export default Card;
