import LoginButton from "app/components/LoginButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-stone-100 py-6">
      <nav className='center flex items-center text-sm font-medium tracking-wider uppercase text-stone-500'>
        <ul className="mx-auto flex justify-center gap-8">
          <li>
            <Link
              className="text-sm font-medium uppercase text-stone-500"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-medium uppercase text-stone-500"
              href="/users"
            >
              Users
            </Link>
          </li>
        </ul>
        <ul>
          <li className="ml-auto">
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
