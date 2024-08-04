import Link from "next/link";
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Unleash the fun with pawsome dog breeds and tail-wagging facts for every dog lover! </h1>
      <div>
        <Link href="/breeds">Breeds</Link>
      </div>
      <div>
        <Link href="/facts">Fun Facts!</Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
