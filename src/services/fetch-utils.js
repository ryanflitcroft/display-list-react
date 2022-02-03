import { checkError, client } from './client';

export async function getDogs() {
  const response = await client
    .from('dogs')
    .select();

  return checkError(response);
}