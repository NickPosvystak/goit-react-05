import { Link } from "react-router-dom";

const Dogs = () => {
  // useEffect(() =>{
  // HTTP request
  // },[])
  return (
    <div>
      <p>Collection og dogs🐕🐕🐕</p>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5', 'dog-6', 'dog-7'].map(
        dog => {
          return (
            <Link key={dog} to={`${dog}`}>
              {dog}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Dogs;
