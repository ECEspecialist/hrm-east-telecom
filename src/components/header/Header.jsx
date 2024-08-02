import "./Header.css";
function Header() {
  return (
    <div className="header">
      <form>
        <label htmlFor="languages">Lanugage</label>
        <select id="languages" name="languages">
          <option value="eng">eng</option>
          <option value="uzb">uzb</option>
          <option value="rus">rus</option>
        </select>
      </form>
    </div>
  );
}

export default Header;
