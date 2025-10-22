"use client";

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative transition-all duration-300 ${isFocused ? 'w-48 md:w-64' : 'w-40 md:w-48'}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-muted" />
      </div>
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}