import Row from "../Row/Row";
import requests from "../../../utils/requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORRER MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="FANTACY MOVIE" fetchUrl={requests.fetchFantasy} />
      <Row title="ANIMATION MOVIE" fetchUrl={requests.fetchAnimation} />
      <Row title="TV SHOW" fetchUrl={requests.fetchTvShow} />
    </>
  );
};

export default RowList;
