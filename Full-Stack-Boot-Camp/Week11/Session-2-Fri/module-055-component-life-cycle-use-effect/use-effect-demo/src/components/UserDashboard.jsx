import { useEffect, useState } from "react";
export default function UserDashboard({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const loadInitialData = () => {
    console.log("stuff got loaded");
  };

  // refer to this to modify
  // welcome message

  // No dependency array - runs after EVERY render
  useEffect(() => {
    console.log("This runs after every render!");
  });

  // Only want to update the component mounts
  // run only once
  // useEffect(()=>{}, [])

  // Empty dependency array - runs ONLY on mount
  useEffect(() => {
    console.log("This runs only once when component mounts!");
  }, []);

  // Update on a specific state change

  // when the user changes, I want to rerun my
  // useEffect

  useEffect(() => {
    console.log("runs when user changes");
    loadInitialData();
  }, [user]);

  // Update on a specific state change

  // when the user changes, I want to rerun my
  // useEffect

  useEffect(() => {
    console.log("runs when user or post changes");
    loadInitialData();
  }, [user, posts]);

  return <h1>UserDashboard</h1>;
}
