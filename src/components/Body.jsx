import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable - super powerful variable
  // React Hook is a normal javascript function.That function utility function which is given by react for us or it will return the powerful logic to us

  // second paramater as function

  // const [listOfRestaurants, setListOfRestaruants] = useState([resList]);
  // we can delete the mock data because we are using the live api. so we don't needed the mock data

  const [listOfRestaurants, setListOfRestaruants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // when the state variable changes or updated, react trigger the reconciliation cycle(re-render the component)
  console.log("Body Rendered");

  //array destruction
  //const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaruants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaruants = arr[1];

  const fetchData = async () => {
    try {
      const data = await fetch(
        //https://proxy.cors.sh/ - insert before the url to resolve CORS
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9592925&lng=77.7123945&str=Hotel&trackingId=bdebf276-933d-08d2-983d-dd3468f4b977&submitAction=ENTER&queryUniqueId=6f8253b2-3a59-6164-fb82-ce49ff224d00"
      );

      const jsonData = await data.json();
      const restaurants =
        jsonData.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT
          ?.cards || [];
      setListOfRestaruants(restaurants);
      setFilteredRestaurant(restaurants);
      console.log(restaurants);
    } catch (err) {
      // Keep the mock data if the API fails
      setListOfRestaruants(resList);
      setFilteredRestaurant(resList);
    }
  };

  useEffect(() => {
    console.log("Use effect called");
    fetchData();
  }, []);

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.card?.card?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card?.card?.info?.avgRating > 4
            );
            setListOfRestaruants(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            resData={restaurant}
            key={restaurant.card?.card?.info?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
