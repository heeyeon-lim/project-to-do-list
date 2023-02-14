import React, { useState } from 'react';

const Example = () => {
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');

  const handleSave = () => {
    // save language and theme changes to local storage or API
    localStorage.setItem('language', language);
    localStorage.setItem('theme', theme);
    alert(`Language: ${language} and Theme: ${theme} saved successfully`);
  }

  const handleCancel = () => {
    setLanguage(localStorage.getItem('language') || 'English');
    setTheme(localStorage.getItem('theme') || 'Light');
    alert('Changes cancelled');
  }

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>Language:</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <div>
        <label>Theme:</label>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default Example