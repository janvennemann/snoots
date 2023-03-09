import type { ListingParameters } from "../listing/listing";

/** The type of subreddit. */
export type SubredditType =
  | "gold_restricted"
  | "archived"
  | "restricted"
  | "employees_only"
  | "gold_only"
  | "private"
  | "user"
  | "public";

/**
 * Options object to configure the search for subreddits by title and
 * description.
 */
export interface SearchSubredditsOptions extends ListingParameters {
  /**
   * A search query.
   */
  query: string;

  /**
   * Sorting of the search results
   *
   * @default "relevance"
   */
  sort?: "relevance" | "activity";

  /**
   * Whether or not to include NSFW subreddits in search results.
   *
   * @default false
   */
  includeNsfw?: boolean;
}
