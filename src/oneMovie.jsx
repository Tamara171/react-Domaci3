import React from 'react'

const OneMovie = () => {
    return (
        <div className="card">
          <img className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">Movie name</h3>
            <p className="card-text">
              This movie was filmed by famous Serbian director - Srđan Dragojević
            </p>
            <a className="btn">Add to watchlist</a>
            <a className="btn">-</a>
          </div>
        </div>
      );
    };
    
export default Movies
