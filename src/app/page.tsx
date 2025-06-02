import { cacheExchange, createClient, fetchExchange, gql } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

// Query
const PokemonsQuery = gql`
  query PokemonsQuery {
    pokemons {
      id
      name
    }
  }
`;

const makeClient = () => {
  return createClient({
    url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

export default async function Home() {
  const result = await getClient().query(PokemonsQuery, {});
  
  return (
    <div className="app grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1>This is an example. Pokemon Names</h1>
        <ul>
          {result.data?.pokemons?.map((x: any) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
