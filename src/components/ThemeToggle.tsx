import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  id?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
  id = 'theme-toggle-btn',
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center gap-2 p-1.5 rounded-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#01CF11] ${
        isDark
          ? 'bg-[#051b44] border border-[#0065E1]/40 text-neutral-200 hover:border-[#01CF11]/60 hover:text-white'
          : 'bg-white border border-[#0065E1]/20 text-slate-700 shadow-sm hover:border-[#0065E1]/40 hover:text-[#0065E1]'
      } ${className}`}
    >
      <div className="relative flex items-center justify-center w-7 h-7 rounded-lg overflow-hidden transition-transform duration-200 group-hover:scale-105">
        {isDark ? (
          <Moon className="w-4 h-4 text-[#01CF11] transition-all transform rotate-0" />
        ) : (
          <Sun className="w-4 h-4 text-[#0065E1] transition-all transform rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium tracking-wide pr-2 select-none">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
