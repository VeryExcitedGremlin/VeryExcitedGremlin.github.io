// import HelloWorldInline from "./components/module-47-react-intro/HelloWorld/HelloWorld";
// import { HelloWorld } from "./components/module-47-react-intro/HelloWorld/HelloWorld";
// import { StaticCounter,InteractiveCounter,ToggleSwitch } from "./components/module-49-state-management/Counter/counter";
import { Route, Routes } from "react-router";
import DisplayHello from "./components/module-47-react-intro/display-47/Display47";
import DisplayCounters from "./components/module-49-state-management/display-49/Display49";
import { PersonalFooter } from "./components/Footer/personal-footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/47" element={<DisplayHello />} />
        <Route path="/49" element={<DisplayCounters />} />
      </Routes>
      <PersonalFooter />
    </>
  );
}

export default App;
