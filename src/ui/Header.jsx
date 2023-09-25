import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { memo } from "react";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-500 border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <div className="flex items-center justify-around ">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

const memoizedHeader = memo(Header);

export default memoizedHeader;
