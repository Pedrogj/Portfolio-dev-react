import { useTheme } from '../../context';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="switch-content">
      <div className="container switch-flex">
        <button
          onClick={toggleTheme}
          className="switch-button"
        >
          <span
            className={`switch-circle ${theme === 'dark' ? 'dark' : ''}`}
          ></span>
        </button>
      </div>
    </div>
  );
};
