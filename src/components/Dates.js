import React from 'react';
import PropTypes from 'prop-types';
import Date from './Date';

const Dates = ({dates, deleteDate}) => {
    const msj = Object.keys(dates).length === 0 ? 'No dates yet' : 'Manage your dates here';
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {msj}
                </h2>
    
                <div className="lista-citas row">
                    {dates.map(date => (
                        <Date
                            key = {date.id}
                            date = {date}
                            deleteDate = {deleteDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

Dates.propTypes = {
     dates : PropTypes.array.isRequired,
     deleteDate : PropTypes.func.isRequired
}

export default Dates;