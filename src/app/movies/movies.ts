export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: Number

}
export interface moviegenrs {
  id: number,
  name: string
}
export interface belongstocollection {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string
}
export interface productioncompanices {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}
export interface spokenlanguage {
  english_name: string,
  iso_639_1: string,
   name: string
}
export interface MovieDetail {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: belongstocollection[],
  budget: number,
  genres: moviegenrs[],
  genre_ids: number[],
  homepage: string,
  id: number,
  imdb_id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: productioncompanices[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: spokenlanguage[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
export interface MovieDto {
  page:number,
  results:Movie[],
  total_results: number,
  total_pages:number
}
export interface MovieVideoDto {
  id:number,
  results:MovieVideo[],
}
export interface MovieVideo {
  id: string,
  name: string,
  published_at: string,
  official: boolean,
  type: string,
  key: string,
  site: string,
  size: number

}

export interface MovieImageDto {
  id:number,
  backdrops:{
    file_path: string,
    aspect_ratio: number,
  }[],
  posters:posterimage[]
}
// export interface backdropimage {
//   file_path: string,
//   aspect_ratio: number,
//   height: number,
//   width: number
// }
export interface posterimage {
  file_path: string,
  aspect_ratio: number,
  height: number,
  width: number
}
export interface Movieactimages {
  cast: castImage[];
}
export interface castImage {
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  known_for_department: string,
  name: string
}
