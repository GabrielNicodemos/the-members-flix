import "./Header.css";

const Header = ({ user, headerScroll }) => {
  return (
    <header className={headerScroll ? "header-black " : ""}>
      <div className="logo-header">
        <a href="/">
          <img
            src="https://cdn.greatsoftwares.com.br/arquivos/paginas_editor/3768-f0ac8155e7ba585692d2963314289494.png"
            alt=""
            srcset=""
          />
        </a>
      </div>
      <div className="user-header">
        <p>{user.name}</p>
        <a href="/user">
          <img src={user.photo_url} alt="" srcset="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
