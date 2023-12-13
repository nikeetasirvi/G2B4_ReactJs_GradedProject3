import React from 'react';
import { Card } from 'react-bootstrap';
import { IMovie } from '../Models/movies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Css/movie.css';

type Props = {
  movie: IMovie,
  activeKey: string,
  addToFavourites: (movie: IMovie) => void,
  removeFromFavourites: (id: string) => void
}

const Movie = ({ movie, activeKey, addToFavourites, removeFromFavourites }: Props) => {

  const navigate = useNavigate();

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate(`/${encodeURIComponent(movie.title)}`, { state: { movie } });
  };

  return (
    <Card id='card' style={{ width: '18rem' }} onClick={handleCardClick}>
      <Card.Img variant="top" src={`src/Images/${movie.poster}`} style={{ height: '15rem' }} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        {
          activeKey !== 'favourite' ? (
            <Card.Subtitle className="mb-2 text-muted" onClick={(event) => { event.stopPropagation(); addToFavourites(movie) }} style={{ cursor: 'pointer', fontSize: '0.8rem' }}>
              Add to Favourites
              <FontAwesomeIcon icon={faHeart} className='mx-2' style={{ color: 'red' }} />
            </Card.Subtitle>
          ) : (
            <Card.Subtitle className="mb-2 text-muted" onClick={(event) => { event.stopPropagation(); removeFromFavourites(movie.id) }} style={{ cursor: 'pointer', fontSize: '0.8rem' }}>
              Remove from favourites
              <FontAwesomeIcon icon={faSquareXmark} className='mx-1' />
            </Card.Subtitle>
          )
        }
      </Card.Body>
    </Card >
  );
}

export default Movie;