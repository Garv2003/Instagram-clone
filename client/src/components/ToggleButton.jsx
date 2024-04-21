import Toggle from "react-toggle";
import "react-toggle/style.css";
import { UseTheme } from "../Context/Theme/ThemeContext";

const ToggleButton = () => {
  const { Theme, ToggleTheme } = UseTheme();

  return (
    <Toggle
      defaultChecked={Theme}
      icons={{
        checked: "🌜",
        unchecked: "🌞",
      }}
      className="toggle"
      onChange={(e) => ToggleTheme(e.target.checked)}
    />
  );
};

export default ToggleButton;
