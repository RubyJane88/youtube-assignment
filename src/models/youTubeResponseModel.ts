export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
  defaultLanguage: string;
}

export interface ContentRating {}

export interface RegionRestriction {
  blocked: string[];
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: string;
  regionRestriction: RegionRestriction;
  videoId: any;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Item {
  kind: string;
  etag: string;
  id: string | any;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YouTubeResponseModel {
  kind: string;
  etag: string;
  items: Item[];
  nextPageToken: string;
  pageInfo: PageInfo;
}
