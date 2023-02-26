const NavItem = ({ type, link }: any) => {
  return (
    <div className="flex text-center justify-center items-center flex-col w-[45px] h-[45px]">
      <a href={link} className="text-2xl link-accent hover:text-blue-jaunts">
        <i className={`icon icon-${type}`}></i>
      </a>
    </div>
  );
};

export default NavItem;
