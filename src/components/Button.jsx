import { useTheme } from "../themes/ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default Button;
