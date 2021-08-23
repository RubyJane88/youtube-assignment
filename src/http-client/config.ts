import axios from "axios";

/* setup of axios http client */
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC5f25tz4chvgYalzKjg4eYj93T7ER5BGw",
  },
});

export default request;
