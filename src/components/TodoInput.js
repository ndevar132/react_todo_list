import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className={editItem ? 'btn btn-success' : 'btn btn-primary'}
            >
              {editItem ? 'edit item' : 'add item'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
