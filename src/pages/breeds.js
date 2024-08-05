import Link from "next/link";

export default function Breeds({data}) {
    return <>
        <h1>All Breeds</h1>
        <ul>
            {data.map((breed) => (
                <li key={breed.id}>
                    <Link href={`/breedID/${breed.id}`}>{breed.attributes.name}</Link>
                </li>
            ))}
        </ul>
    </>
}

export async function getStaticProps() {
    const url = 'https://dogapi.dog/api/v2/breeds';
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    return {
        props: {data: jsonData.data},
    };
}