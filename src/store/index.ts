import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
  selectedVideoReducer,
} from "../features/videos/videos.reducer";

/* combining all reducers */
const rootReducer = combineReducers({
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
});

/* creating a type or model for rootReducer */
export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk, logger]; // side-effect middleware

/* creating a store */
const index = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default index;
