export function fetchData() {
  return (dispatch) => {
    dispatch({ type: "FETCH_DATA_START" });
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_DATA_ERROR", payload: error });
      });
  };
}
