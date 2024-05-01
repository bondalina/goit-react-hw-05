// import css from "./HomePage.module.css"
import { useEffect, useState } from "react";
import { getMovies } from "../movies-api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      {error && <p>Oops! There was a problem, please reload page!</p>}
      {loading && <p>Please wait the page is loading...</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;

// import { useEffect, useMemo, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { getPayments } from "../components/payments-api.js";
// import PaymentList from "../components/PaymentList/PaymentList.jsx";
// import OwnerFilter from "../components/OwnerFilter.jsx";

// const PaymentsPage = () => {
//   const [payments, setPayments] = useState([]);
//   const [loading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const ownerParam = searchParams.get("owner") ?? "";
//   // console.log(searchParams);

//   const changeOwnerFilter = (newFilter) => {
//     searchParams.set("owner", newFilter);
//     // Для зміни параметрів запиту (http://localhost:5173/payments?owner=hjhhjjk) :
//     // searchParams.set("b", 20);
//     setSearchParams(searchParams);
//   };

//   useEffect(() => {
//     async function fetchPayments() {
//       try {
//         setIsLoading(true);
//         const data = await getPayments();
//         setPayments(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchPayments();
//   }, []);

//   const filteredPayments = useMemo(() => {
//     return payments.filter((payment) =>
//       payment.cardOwner.toLowerCase().includes(ownerParam.toLowerCase())
//     );
//   }, [ownerParam, payments]);

//   return (
//     <div>
//       <p>
//         <b>PaymentsPage</b>
//       </p>
//       <OwnerFilter value={ownerParam} onFilter={changeOwnerFilter} />
//       {error && <b>Oops! Please reload page!</b>}
//       {loading && <b>Loading payments...</b>}
//       {payments.length > 0 && <PaymentList payments={filteredPayments} />}
//     </div>
//   );
// };

// export default PaymentsPage;
