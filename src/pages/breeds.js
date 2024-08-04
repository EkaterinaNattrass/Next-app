export default function Breeds() {
    return <h1>Dog breeds</h1>;
}

export async function getStaticProps() {
    return {
        props: {},
    };
}