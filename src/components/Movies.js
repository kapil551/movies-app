import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

import movies from '../data/movies';

const Movies = () => {

  let genreIds = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }

  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState('All Genres');

  // for getting and setting the genres
  useEffect(
    () => {
      let allGenres = movies.map((movie) => genreIds[movie.genre_ids[0]]);
      console.log(allGenres);

      // to remove duplicate genres create a set
      allGenres = new Set(allGenres);
      setGenres(["All Genres", ...allGenres]);
      console.log(genres);
    }, []
  )

  // console.log(movies);

  function goAhead() {
    setPage(page + 1);
  }

  function goBack() {

    if (page > 1) {
      setPage(page - 1);
    }
  }

  return <>

    <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2'>
      {
        genres.map((genre,index) =>
          <button key={index} 
                  className={
                    currGenre == genre ?
                      'm-2 text-lg p-1 px-2 bg-blue-500 text-white rounded-xl font-bold' :
                      'm-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-500 text-white rounded-xl font-bold'
                  }

          onClick={
            () => {
              setCurrGenre(genre)
            }
          }
          >
            {genre}
          </button>
        )
      }
    </div>
    <div className='text-center'>
      <input type="text" placeholder='Search' className='border-2 text-center p-1 m-2' />
      <input type="number" placeholder='Rows' className='border-2 text-center p-1 m-2' />
    </div>

    <div className="flex flex-col m-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 min-w-full">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className='mr-2 cursor-pointer'
                      />
                      Rating
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'
                        className='ml-2 mr-2' />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className='flex'>
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png'
                        className='mr-2' />
                      Popularity
                      <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2'
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* <div>Inputs Container</div> */}
    {/* <div>Table Container</div> */}
    {/* <div>Pagination</div> */}
    <div className='mt-4'>

      <Pagination page={page} goAhead={goAhead} goBack={goBack} />
    </div>
  </>;
}

export default Movies