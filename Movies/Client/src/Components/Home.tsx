import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import MoviesList from './MoviesList';

type Props = {
  activeKey: string,
  setActiveKey: (key: string) => void
}
const Home = ({ activeKey, setActiveKey }: Props) => {

  const [searchValue, setSearchValue] = useState<string | null>(null);
  return (
    <>
      <NavigationMenu activeKey={activeKey} setActiveKey={setActiveKey} setSearchValue={setSearchValue}></NavigationMenu>
      <h4 className='my-3'>Movies</h4>
      <MoviesList activeKey={activeKey} searchValue={searchValue}></MoviesList>
    </>
  );
}

export default Home;