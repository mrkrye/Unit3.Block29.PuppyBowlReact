import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id='navbar'>
        <Link to={"/"}>HOME</Link>
        <Link to={"/players/"}>PLAYERS</Link>
        <Link to={"/players/form"}>FORM</Link>


    </div>
  )
}
