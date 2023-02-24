import PuffLoader from "react-spinners/PuffLoader";

function Spinner() {
  return (
    <div className="columns is-centered p-6 m-6">
      <div className="column is-5 is-offset-one-quarter">
        <PuffLoader color={"#36d7b7"} size={125} />
        <div className="has-text-left p-3">
          <p className="has-text-grey has-text-weight-semibold is-size-4">LOADING</p>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
