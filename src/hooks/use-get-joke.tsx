import { useState } from "react";
import axios from "axios";

export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

const getJoke = () => {
  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": "1a3e8085b5msh4851b365601850ep1ddf7djsn77a22bef01c9",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      return response.data.body[0];
    })
    .catch(function (error) {
      return error;
    });
};

export const useGetJoke = (): TApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusTest] = useState<String>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  //   const { data: data } = getJoke();

  //   return { data: data };
  setData(getJoke());
  
  return data
};
