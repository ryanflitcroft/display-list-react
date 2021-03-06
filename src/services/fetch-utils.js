import { checkError, client } from './client';

export async function getDogs() {
  const response = await client
    .from('dogs')
    .select();

  return checkError(response);
}

export async function getMovies() {
  const response = await client
    .from('movies')
    .select();

  return checkError(response);
}

export async function getRestaurants() {
  const response = await client
    .from('restaurants')
    .select();

  return checkError(response);
}

export async function getBands() {
  const response = await client
    .from('bands')
    .select();

  return checkError(response);
}