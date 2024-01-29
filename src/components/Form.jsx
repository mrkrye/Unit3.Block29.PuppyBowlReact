// import { useGetPlayersQuery, useAddNewPostMutation } from "../api/api";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// export default function Form() {
//   const [newPlayer, setNewPlayer] = useState("");
//   const { data, isLoading, isSuccess, isError, error } = useGetPlayersQuery();
//   const players = useSelector((state) => state.player);

//   const [addPlayer] = useAddNewPostMutation();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addPlayer({ name: "cat", breed: "cat" });
//     setNewPlayer("");
//   };

//   const newPlayerForm = (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={newPlayer}
//           onChange={(e) => setNewPlayer(e.target.value)}
//         />
//       </label>
//       <button>Submit</button>
//     </form>
//   );



//    let content;
//     if (isLoading) {
//       content = <p>Loading...</p>;
//     } else if (isSuccess) {
//       content = players.map((player) => {
//         //JSON.stringify(todos)
//         return (
//           <article key={player.id}>
//             {/* <div className="todo">
//               <input
//                 type="checkbox"
//                 checked={player.completed}
//                 id={player.id}
//                 onChange={() =>
//                   updateTodo({ ...player, completed: !player.completed })
//                 }
//               />
//               <label htmlFor={player.id}>{player.title}</label>
//             </div> */}
//             {/* <button
//             //   className="trash"
//             //   onClick={() => deleteTodo({ id: todo.id })}
//             // >
//             //   <FontAwesomeIcon icon={faTrash} />
//             </button> */}
//           </article>
//         );
//       });
//     } else if (isError) {
//       content = <p>{error}</p>;
//     }

//   return (
//     <div>
//       {newPlayerForm}
//       {content}
//     </div>
//   );
// }

import { useState } from "react";
import { useAddNewPlayerMutation } from "../api/api";
function Form() {
  const [addNewPlayer, { isLoading }] = useAddNewPlayerMutation();
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });
  const handleChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewPlayer(playerData);
    } catch (error) {
      console.error("Error Adding New Player", error);
    }
  };
  return (
    <>
      <div className="form-container">
        <h1>Add New Player</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your Player Name:
            <input
              type="text"
              name="name"
              value={playerData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Enter your Player Breed:
            <input
              type="text"
              name="breed"
              value={playerData.breed}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Enter your Player Status:
            <input
              type="text"
              name="status"
              placeholder="Enter 'field' or 'bench'"
              value={playerData.status}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Enter your Player image URL:
            <input
              type="text"
              name="imageUrl"
              value={playerData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Player"}
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;