import React,{useState,useEffect} from "react"

function HomeWork() {
    const [homework, setHomeWork] = useState("");

    useEffect(()=> {
        console.log(`Auto-saving homework: ${homework}`);
    }, [homework]);

  return (
    <>
    <h2>Write your HomeWork:</h2>
    <textarea
    value={homework}
    onChange={(e) => setHomeWork(e.target.value)}
    />
    </>
  );
}

export default HomeWork