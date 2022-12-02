

// export const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     },
// };

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY3,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

// export const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY2,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   },
// };
  

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};


export const fetchData = async ( url, option ) => {
  const response = await fetch( url, option );
  const data = await response.json();
  return data;
};