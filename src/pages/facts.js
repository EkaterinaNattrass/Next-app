import { useState } from "react";

export default function Facts({ facts }) {
  const [funFact, setFunFact] = useState(null);

  async function handleClicked() {
    const url = "https://dogapi.dog/api/v2/facts";
    const response = await fetch(url);
    const jsonData = await response.json();
    const results = jsonData.data;
    const newFact = results[0].attributes.body;
    setFunFact(newFact);
  }

  return (
    <>
      <h1>Fun fact about dogs</h1>
      {!funFact && facts.map((fact) => (
        <div key={fact.id}>{fact.attributes.body}</div>
      ))}
      {funFact && <div>{funFact}</div>}
      <button onClick={handleClicked}>New fact</button>
    </>
  );
}

export async function getStaticProps() {
  const url = "https://dogapi.dog/api/v2/facts";
  const response = await fetch(url);
  const jsonData = await response.json();
  return {
    props: { facts: jsonData.data },
  };
}
