import axios from "axios";
import { useQuery } from "react-query";

const getJoke = async () => {
  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "c5676efe87msh15d495334588d70p124b25jsn5a7dcfceba69",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };
  
  const data = await axios(options);

  return data;
};

export const useGetJoke = () => {
    const { data } = useQuery("joke", getJoke);

    return data;
};
