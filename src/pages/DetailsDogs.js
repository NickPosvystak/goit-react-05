import { Link, Outlet, useParams } from 'react-router-dom';

const DetailsDogs = () => {
  const { dogId } = useParams();

  // useEffect(() =>{
  // HTTP request
  // },[])

  return (
    <>
      <h1>DetailsDogs: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreed">Subbreed</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default DetailsDogs;
