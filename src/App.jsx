import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [logoBreathe, setLogoBreathe] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogoClick = () => {
    setLogoBreathe(!logoBreathe);
  };

  return (
    <>
      <header>
        <button className="theme-toggle" onClick={toggleTheme}>
          <div className="toggle-slider">
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#fde047" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </button>
      </header>

      <div className="logo-container">
        <svg
          height="90"
          width="90"
          viewBox="0 0 275.785 275.785"
          fill="var(--fg)"
          onClick={handleLogoClick}
          className={logoBreathe ? "logo-breathe" : ""}
        >
          <path
            d="M137.893,275.785c53.411,0,96.87-43.45,96.87-96.861c0-52.308-90.786-171.025-94.65-176.051L137.893,0l-2.22,2.892
		c-3.859,5.018-94.651,123.744-94.651,176.042C41.022,232.335,84.48,275.785,137.893,275.785z M137.893,9.223
		c14.177,18.895,91.267,123.692,91.267,169.701c0,50.31-40.952,91.255-91.267,91.255c-50.324,0-91.268-40.945-91.268-91.255
		C46.625,132.915,123.712,28.118,137.893,9.223z"
          />
        </svg>
      </div>

      <main>
        <article>
          <h1>hello there</h1>
          <p>
            it's serhat. creative dev,{" "}
            <a
              href="https://deeppaz.tumblr.com/archive"
              target="_blank"
              rel="noopener noreferrer"
            >
              futuristic
            </a>{" "}
            enthusiast, practicing minimalist. and{" "}
            <a
              href="https://soundcloud.com/deeppaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              unlimited music genre
            </a>{" "}
            lover in search of flow.
          </p>
          <p>
            working on{" "}
            <a
              href="https://github.com/deeppaz/zen"
              target="_blank"
              rel="noopener noreferrer"
            >
              kanjibot
            </a>{" "}
            to make some money (•‿‿•)
          </p>
        </article>
      </main>
    </>
  );
}

export default App;
