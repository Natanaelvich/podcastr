import { GetStaticProps } from 'next';
import Head from 'next/head';

type HomeProps = {
  episodes: any;
};

export const Home = ({ episodes }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <div>
        <h1>Index</h1>
        <p>{JSON.stringify(episodes)}</p>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
};
