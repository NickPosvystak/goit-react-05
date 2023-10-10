import { useParams } from 'react-router-dom';

export const Gallery = () => {
  
  const { dogId } = useParams();
// useEffect(() =>{
  // HTTP request
  // },[])
  return <div>Image Gallery: {dogId}</div>;
};
