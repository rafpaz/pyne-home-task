import { useEffect, useState } from "react";

import Dashboard from "./features/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-screen">
      <Dashboard />
    </div>
  );
}

export default App;
