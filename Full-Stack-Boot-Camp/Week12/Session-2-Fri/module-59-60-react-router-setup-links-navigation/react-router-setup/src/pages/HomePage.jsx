import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
