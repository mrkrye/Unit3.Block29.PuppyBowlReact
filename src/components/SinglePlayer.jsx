import { useParams } from "react-router-dom";
import { useGetPlayerQuery } from "../api/api";

import { useNavigate } from "react-router-dom";

export default function SinglePlayer() {
  const params = useParams();
  const { data, isLoading } = useGetPlayerQuery(params.id);
const nav = useNavigate();
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          

          <h1>{data.data.player.name}</h1>
          <h3>Breed: {data.data.player.breed}</h3>
          <h3>Status: {data.data.player.status}</h3>
          <h3>TeamID: {data.data.player.teamId}</h3>
          <img
            src={data.data.player.imageUrl}
            alt={data.data.player.name}
            height={500}
          /> 
          <button onClick={() => nav("/players")}>Return to Players</button>
        </div>
      )}
    </div>
  );
}
