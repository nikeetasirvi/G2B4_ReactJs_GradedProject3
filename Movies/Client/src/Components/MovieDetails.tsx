import React, { useState } from 'react';
import { IMovie } from '../Models/movies';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

import '../Css/movie.css';

type Props = {
  movie: IMovie
}

const MovieDetails = ({ movie }: Props) => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const showPopup = () => {
    setPopupVisible(true);
  }
  const hidePopup = () => {
    setPopupVisible(false);
  }
  return (
    <Row className='my-3 mx-3'>
      <Col lg={3}>

        <div id="container">
          <img id="cardImage" src={`src/Images/${movie.poster}`} ></img>
          <div id="overlay" onClick={showPopup}>
            <div id="content">
              <span>Preview  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></span>
            </div>
          </div>
        </div>
        {
          isPopupVisible && (
            <div id="popupImage">
              <span onClick={hidePopup}>&times;</span>
              <img src={`src/Images/${movie.poster}`} ></img>
            </div>
          )
        }

      </Col>
      <Col lg={9}>
        <h2>{`${movie.title}(${movie.year})`}</h2>
        <table style={{ fontSize: '0.9rem', borderCollapse: 'separate', borderSpacing: '10px' }}>
          <tbody>
            <tr>
              <td style={{ whiteSpace: 'nowrap' }}>imdb Rating</td>
              <td>{movie.imdbRating}</td>
            </tr>
            <tr>
              <td style={{ whiteSpace: 'nowrap' }}>Content Rating</td>
              <td>{movie.contentRating}</td>
            </tr>
            <tr>
              <td style={{ whiteSpace: 'nowrap' }}>Average Rating</td>
              <td>{movie.averageRating}</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>{movie.duration}</td>
            </tr>
            <tr>
              <td>Genres</td>
              <td>{movie.genres.join(',')}</td>
            </tr>
            <tr>
              <td>Actors</td>
              <td>{movie.actors.join(',')}</td>
            </tr>
            <tr>
              <td style={{ whiteSpace: 'nowrap' }}>Release Date</td>
              <td>{movie.releaseDate}</td>
            </tr>
            <tr>
              <td style={{ whiteSpace: 'nowrap', verticalAlign: 'top' }}>Story Line</td>
              <td>{movie.storyline}</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
}

export default MovieDetails;