export default function Facts() {
    return <h1>Fun facts about dogs</h1>;
}

export async function getStaticProps() {
    const url = 'https://dog-api.kinduff.com/api/facts';
    const response = await fetch(url);
    const data = await response.json();
    return {
        props: {},
    };
}