import CredLogo from "./CredLogo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="absolute top-10 left-0 w-full z-50 px-[6.25vw] py-6 flex items-center justify-between bg-black/0 backdrop-md">

      <div className="h-[88px] w-[74px]">
        <CredLogo />
      </div>
     <ThemeToggle />
    </header>
  );
}
