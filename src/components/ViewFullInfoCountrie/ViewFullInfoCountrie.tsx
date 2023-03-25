import { useLocation, useNavigate } from "react-router-dom";

const ViewFullInfoCountrie = () => {
  const { flags, name } = useLocation().state;
  const navigate = useNavigate();
  console.log(useLocation().state);

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <button>
        <h2 onClick={handleNavigate}>Back</h2>
      </button>
      <div>
        <img src={flags.png} alt={name.official} />
        <h2>{name.official}</h2>
      </div>
    </>
  );
};
export default ViewFullInfoCountrie;
