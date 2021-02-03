import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "https://chatistics.herokuapp.com"
    : process.env.REACT_APP_API_URL;

export const postFile = async (formData) => {
  try {
    const result = await axios.post(url+'/testing', formData);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDefaultStats = async () =>{
  try {
    const result = await axios.get(url + '/api/v1/dummy');
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }

} 
