import logo from "../assets/logo.png";
import style from "../css/Header.module.css";

export default function Header() {
  const machin = false;
  return (
    <header className={style.header}>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>

      <p
        /* Also the css property could be dynamic. */
        style={{
          color: machin ? "red" : "blue",
          textTransform: "uppercase",
        }}
      >
        This a style prop example
      </p>
    </header>
  );
}
