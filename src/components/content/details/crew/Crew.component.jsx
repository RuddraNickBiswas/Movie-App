import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import {useSelector} from 'react-redux'
import './crew.style.scss';
import { IMAGE_URL } from '../../../../services/movice.service';

const Crew = () => {
  const movie = useSelector(state => state.movies.movie)
 
  const [credits] = useState(movie[1])
  
  return (
    <>
      <div className="cast">
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          {
             credits.crew.map(data =>(
              <tbody key ={uuidv4()}>
                <tr>
                  <td>
                    <img src= {
                        data.profile_path ? `${IMAGE_URL}${data.profile_path}` : 'http://placehold.it/30x30'
                    } 
                    alt="" />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.department}</td>
                  <td>{data.job}</td>
                </tr>
              </tbody>

              ))
          }
          
        </table>
      </div>
    </>
  );
};

export default Crew;