import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import axios from 'axios';
import { cn } from '@/shared/lib/utils';
import { Input } from '../ui';

interface Suggestion {
  place_id: string;
  display_name: string;
}

interface Props {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const AddressInput: React.FC<Props> = ({ className, value, onChange }) => {
  const [query, setQuery] = useState<string>(value);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onChange(value); // Обновляем значение в форме

    if (value.length > 2) {
      try {
        const response = await axios.get<Suggestion[]>(
          `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.NEXT_PUBLIC_TOKEN_LOCATION}&q=${value}&format=json`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Ошибка при получении предложений:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setFocused(false);
    setQuery(suggestion.display_name);
    setSuggestions([]);
    onChange(suggestion.display_name); // Обновляем значение в форме
  };

  return (
    <div className={cn("relative w-full", className)}>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setFocused(true)}
        placeholder="Enter address"
        className="w-full border border-gray-300 rounded-lg p-2"
      />
      {suggestions.length > 0 && (
        <div
          ref={ref}
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 shadow-md transition-all duration-200 z-30',
            focused ? 'opacity-100 visible top-14' : 'opacity-0 invisible top-12'
          )}
        >
          {suggestions.slice(0, 3).map((suggestion, index) => (
            <div
              key={`${suggestion.place_id}-${index}`} // генерации уникального ключа
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {suggestion.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressInput;
