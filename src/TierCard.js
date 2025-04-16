import "./App.css";

function TierCard({ name, art, krankheit }) {
  return (
    <p style={{ color: "red" }}>
      Name: {name} Art: {art} Krankheit: {krankheit}
    </p>
  );
}

export default TierCard;
