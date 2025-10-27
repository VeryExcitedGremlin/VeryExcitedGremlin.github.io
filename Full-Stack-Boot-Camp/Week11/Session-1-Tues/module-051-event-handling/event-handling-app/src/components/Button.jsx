export default function Button() {
  // Handler Function Expression
  const handleClick = () => {
    alert("You clicked me, WHy!!!!!!!???????????");
  };

  // onClick Property
  // function or arrow function
  // we are not executing the function
  // so we only pass the reference here
  // handleClick
  // vs
  // handleClick() - wrong doing this causes the code to run once only and immediately
  return <button onClick={handleClick}>Click Me</button>;
}
