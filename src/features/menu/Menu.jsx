import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className=" divide-y-2 divide-stone-200 p-2  ">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
        // <h1 key={pizza.id}>{pizza.name}</h1>
      ))}
    </ul>
  );
}

// eslint-disable-next-line
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
