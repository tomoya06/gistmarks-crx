import { useEffect, useState } from "react";

export default function App() {
  const [curTime, setCurTime] = useState(0);

  useEffect(() => {
    setCurTime(Date.now());
  }, []);

  return <div>hello {curTime}</div>;
}
