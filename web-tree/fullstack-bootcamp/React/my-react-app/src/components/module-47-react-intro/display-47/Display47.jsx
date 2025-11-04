import { HelloWorld, HelloWorldInline } from "../HelloWorld/HelloWorld";

export default function DisplayHello() {
  return (
    <>
      <h1>Module 47 - Intro to React</h1>
      <h2>Inline Styles</h2>
      <div>
        <HelloWorldInline />
        <HelloWorldInline name="Alice" />
        <HelloWorldInline name="Bob" />
        <HelloWorldInline name="Jane" />
      </div>
      <h2>CSS Stylesheet</h2>
      <div>
        <HelloWorld />
        <HelloWorld name="Alice" />
        <HelloWorld name="Bob" />
        <HelloWorld name="Jane" />
      </div>
    </>
  );
}
