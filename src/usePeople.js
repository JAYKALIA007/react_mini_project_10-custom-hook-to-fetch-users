import { useState, useEffect } from "react";
export const usePeople = () => {
  const [people, setPeople] = useState([]);

  //to fetch the first five users
  useEffect(() => {
    fetchUsers(5);
  }, []);
  const fetchUsers = async (num) => {
    const myUrl = "https://randomuser.me/api/?results=" + num;
    const data = await fetch(myUrl);
    const jsonData = await data.json();
    people.length === 0
      ? setPeople(jsonData?.results)
      : setPeople([...people, jsonData?.results[0]]);
  };

  //return fetchUsers function so that user can call it on demand
  return [people, fetchUsers];
};
