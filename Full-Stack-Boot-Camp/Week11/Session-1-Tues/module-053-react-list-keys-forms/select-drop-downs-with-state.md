```jsx

// Handle Drop down selections like inputs
function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];

  return (
    <div>
      <select 
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Choose a country</option>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      
      {selectedCountry && (
        <p>You selected: {selectedCountry} 🌍</p>
      )}
    </div>
  );
}
```