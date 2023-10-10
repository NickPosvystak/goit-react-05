import { useParams } from "react-router-dom";

export const Subbreed = () => {

  const { dogId } = useParams();
  // useEffect(() =>{
  // HTTP request
  // },[])
  return <div>Subbreeds List: {dogId}</div>;
};
