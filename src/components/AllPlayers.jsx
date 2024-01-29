import { useSelector } from "react-redux";
import { useGetPlayersQuery } from "../api/api";
import { Link } from "react-router-dom";

export default function AllPlayers() {
  const players = useSelector((state) => state.player);
  const { isLoading } = useGetPlayersQuery();
  return (
    <div className="players">
      <h1>Click on player card to view details</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        players.map((player) => (
          <div key={player.id} className="player-card">
            <Link to={"/players/" + player.id}>
              <div className="player-image-container">
                <img src={player.imageUrl} alt={player.name} />
              </div>
            </Link>
            <div className="player-details">
              <h2> {player.id} </h2>

              <p> {player.name} </p>

              <p> {player.status} </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
