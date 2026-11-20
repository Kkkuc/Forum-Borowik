import { useParams } from 'react-router';

export default function ThreadDetailsPage() {
    const { id } = useParams();
    return <h1>Thread: {id} details</h1>;
}