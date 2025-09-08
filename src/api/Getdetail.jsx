export const Getdetail = async ({ params }) => {
  

  try {
    const response = await fetch(
`https://www.omdbapi.com/?i=${params.movieid}&apikey=${import.meta.env.VITE_API_KEY}`    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};