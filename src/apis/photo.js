import axios from "axios";

let baseURL = process.env.REACT_APP_SERVER_API_KEY;

export async function getPhotos(index) {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${baseURL}/photos/${index}`,
      headers: { contentType: "application/json" },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
