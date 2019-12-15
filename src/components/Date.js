import React from 'react';
import PropTypes from 'prop-types';

const Date = ({date, deleteDate}) => (
    <div className="media mt-3 col-sm-6 col-md-4 col-lg-3">
        <div className="media-body">
            <h3 className="mt-0">{date.petName}</h3>
            <p className="card-text"><span>Owner name:  </span>{date.ownerName}</p>
            <p className="card-text"><span>Date: </span>{date.date}</p>
            <p className="card-text"><span>Time: </span>{date.hour}</p>
            <p className="card-text"><span>Symptoms: </span><br/>{date.symptoms}</p>
            <button className="btn btn-danger" onClick={()=>deleteDate(date.id)}>&times; Borrar</button>
        </div>
    </div>
);

Date.propTypes = {
    date : PropTypes.object.isRequired,
    deleteDate : PropTypes.func.isRequired
}
export default Date;