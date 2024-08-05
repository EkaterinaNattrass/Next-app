import {useRouter} from 'next/router';

export default function Breed() {
    const router = useRouter();
    const {breedID} = router.query;
    return <h1>Breed details for {breedID}</h1>;
}

export async function getStaticPaths() {
    const url = 'https://dogapi.dog/api/v2/breeds/{id}';
    const response = await fetch(url);
    const jsonData = await response.json();
    return { data: jsonData.data};
}