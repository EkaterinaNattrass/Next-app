import {useRouter} from 'next/router';

export default function BreedID() {
    const router = useRouter();
    const {breed} = router.query;
    return <h1>About different breeds</h1>;
}