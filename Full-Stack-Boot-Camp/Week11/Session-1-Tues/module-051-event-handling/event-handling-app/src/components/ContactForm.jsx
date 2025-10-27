import { useState } from "react";

export default function ContactForm() {
  //set up our state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Ties to our onSubmit on the form
  const handleSubmit = (event) => {
    //without this you get a page refresh - try commenting out
    event.preventDefault();

    // Now you can do whatever you want with the data
    alert(`Email: ${email}\nMessage: ${message}`);

    // Clear the form
    setEmail("");
    setMessage("");
  };

  // note you can name your event object whatever you want
  // but typically its going to be e or event
  // (event) => setEmail(event.target.value)
  // (e) => setMessage(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
}
