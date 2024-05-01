import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Oops! Page is not found!</p>
      <p>
        Please visit our <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
