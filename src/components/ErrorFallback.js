import errorImage from "../assets/errorImage.jpg";

const ErrorFallback = () => {
  return (
    <div className="notfound has-text-centered p-6">
      <div className="column is-5 is-offset-one-quarter px-6">
        <figure className="error-image">
          <img src={errorImage} alt={404} />
        </figure>
      </div>
      <h2 className="is-size-3 has-text-weight-bold">
        This Page Could Not Get Product Information
      </h2>
      <p className="is-uppercase pt-3">
        Sorry but the page you are looking for does not exist, have been
        removed. Name changed or is temporarily unavailable
      </p>
    </div>
  );
};

export default ErrorFallback;
