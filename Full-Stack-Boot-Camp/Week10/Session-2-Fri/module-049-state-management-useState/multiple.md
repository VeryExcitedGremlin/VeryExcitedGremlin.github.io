```jsx
function UserDashboard() {
  // ✅ Separate concerns
  const [user, setUser] = useState({ name: "", email: "", avatar: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [theme, setTheme] = useState("light");

  // ✅ Related data together
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "general",
  });

  const updateFormField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Welcome, {user.name}!</h1>

      {isLoading && <div>Loading...</div>}

      <form>
        <input
          value={formData.title}
          onChange={(e) => updateFormField("title", e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={formData.description}
          onChange={(e) => updateFormField("description", e.target.value)}
          placeholder="Description"
        />
      </form>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```
