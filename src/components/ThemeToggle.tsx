import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full bg-muted border-2 border-border transition-all duration-300 hover:border-primary group"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center transition-all duration-300 shadow-lg ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3 text-background" />
        ) : (
          <Sun className="w-3 h-3 text-background" />
        )}
      </div>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{ boxShadow: "0 0 20px hsl(var(--gold-glow) / 0.3)" }} 
      />
    </button>
  );
};

export default ThemeToggle;
