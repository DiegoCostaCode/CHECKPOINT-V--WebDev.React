const Header = () => {
  return (
    <header>
      <div className="flex justify-end items-center w-screen h-[90px]">
        <button className="border-[2px] rounded-lg mx-[20px]">
          <a className="p-4">Login</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
