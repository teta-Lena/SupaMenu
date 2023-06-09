import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RestoTypePage = () => {
  return (
    <div>
       <div className="restoinfo-container">
      <div className="restoinfo-navbar">
        <div className="title">
          <h2>
            Supa<span>Menu</span>
          </h2>
        </div>
        <div className="user-details">
          <p>Jacques Kagabo</p>
        </div>
      </div>
      <div className="restoinfo-body">
        <div className="info-1">
          <h5>1.Create your restaurant profile</h5>

          <div className="details">
            <div>
              <h6>
                <span className="resto-info-no">1</span> Restaurant information
              </h6>
            </div>
            <div className="test">
              <div>loremimpsusmsoenreoneo fneonfeonfeneonfenfenfoe</div>
            </div>
          </div>
          <div className="details">
            <h6>
              <span className="resto-info-true">2</span> Restaurant Type & Timing
            </h6>
            <div className="test">
              <div>loremimpsusmsoenreoneo fneonfeonfeneonfenfenfoe</div>
            </div>
          </div>
          <div className="details">
            <h6>
              <span className="resto-info-no">3</span> Create your menu
            </h6>
            <div className="test">
              <div>loremimpsusmsoenreoneo fneonfeonfeneonfenfenfoe</div>
            </div>
          </div>
        </div>
        <div className="info-2">
          <div className="input-container-resto-info">
            <form className="form-data">
              <div className="field">
                <label>Restaurant Type</label>
                <select className='form-select'>
                    <option value="Restaurant" className='form-field'>Restaurant</option>
                    <option value="Pubs" className='form-field'>Pub</option>
                    <option value="Hotels" className='form-field'>Hotel</option>
                    <option value="Cafe" className='form-field'>Cafe</option>
                    <option value="Other" className='form-field'>Other</option>

                </select>
              </div>
              <div className="field">
              <select className='form-select'>
                    <option value="African" className='form-field'>African</option>
                    <option value="World" className='form-field'>World</option>
                    <option value="Pizzeria" className='form-field'>Pizzeria</option>
                    <option value="Coffee" className='form-field'>Coffee</option>
                    <option value="Other" className='form-field'>Other</option>

                </select>
              </div>
              <div className="field">
                <label>Opening hours</label>
                <div className="input-2">
                  <input
                    className="form-field"
                    type="text"
                    placeholder="From |"
                  />
                  <input
                    className="form-field"
                    type="text"
                    placeholder="To |"
                  />
                </div>
              </div>
              <div className="field">
                <label>Upload images (pictures or logo)</label>
                <input
                  className="form-field"
                  type="file"
                />
              </div>
       
     
            </form>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div>
            <button>Back</button>
        </div>
        <div>
        <button>Next <FontAwesomeIcon icon={faArrowRight} style={{color:'white'}}/></button>

        </div>
    </div>
    </div>
   
    </div>
  )
}

export default RestoTypePage
