import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const initialState = {
    newDate : {
        petName : "",
        ownerName : "",
        date : "",
        hour : "",
        symptoms : ""
    },
    error : false
};

class DateForm extends Component{
    
    state = { ...initialState };

    handleChange = e => {
        this.setState({
            newDate : {
                ...this.state.newDate,
                [e.target.name] : e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const {petName, ownerName, date, hour, symptoms} = this.state.newDate;

        if (petName === '' || ownerName === '' || date === '' || hour === '' || symptoms === ''){
            this.setState({
                error: true
            });
            return "The form has invalid inputs";
        }

        const newNewDate = {...this.state.newDate};
        newNewDate.id = uuid();

        this.props.createNewDate(newNewDate);

        this.setState({
            ...initialState
        })
    }

    render(){

        const {error}  = this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill the form to create a new date
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label htmlFor="petName" className="col-sm-4 col-lg-2 col-form-label">Pet name:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="petName" 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Pet name" 
                                    name="petName"
                                    onChange={this.handleChange}
                                    value={this.state.newDate.petName}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="ownerName" className="col-sm-4 col-lg-2 col-form-label">Owner name:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="ownerName" 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Owner Name" 
                                    onChange={this.handleChange}
                                    value={this.state.newDate.ownerName}
                                    name="ownerName"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="date" className="col-sm-4 col-lg-2 col-form-label">Date:</label>
                            <div className="col-sm-3 col-lg-4">
                                <input 
                                    id="date" 
                                    type="date" 
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.newDate.date}
                                    name="date"
                                />
                            </div>
                            <label htmlFor="hour" className="col-sm-2 col-lg-2 col-form-label">Hour:</label>
                            <div className="col-sm-3 col-lg-4">
                                <input 
                                    id="hour" 
                                    type="time" 
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.newDate.hour}
                                    name="hour"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="symptoms" className="col-sm-4 col-lg-2 col-form-label">Owner name</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    onChange={this.handleChange}
                                    value={this.state.newDate.symptoms} 
                                    name="symptoms" 
                                    id="symptoms" 
                                    rows="5" 
                                    className="form-control" 
                                    placeholder="Symptoms"></textarea>
                            </div>
                        </div>
                        <button className="btn btn-success btn-lg col-sm-12 col-lg-3 offset-lg-5 btn-block mt-5">Create new date</button>
                    </form>
                </div>
            </div>
        );
    }
}

DateForm.propTypes = {
    createNewDate : PropTypes.func.isRequired
}

export default DateForm;