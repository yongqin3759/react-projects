import React, {useState} from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList'

const App = () => {
  const [searchImages, setSearchImages] = useState({
    images: [],
  })

  const onSearchSubmit= async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos',{
      params:{query:term},
      
    })
    setSearchImages({images: response.data.results})
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit}/>
      <ImageList images={searchImages.images}/>
    </div>
  );
};

export default App;
