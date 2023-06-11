import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const RestoInfoPage = () => {
  return (
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
                <span className="resto-info-true">1</span> Restaurant information
              </h6>
            </div>
            <div className="test">
              <div>loremimpsusmsoenreoneo fneonfeonfeneonfenfenfoe</div>
            </div>
          </div>
          <div className="details">
            <h6>
              <span className="resto-info-no">2</span> Restaurant Type & Timing
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
                <label>Restaurant Information</label>
                <input type="text " placeholder="Restaurant name" />
              </div>
              <div className="field">
                <input
                  className="form-field"
                  type="text"
                  placeholder="Restaurant Complete name"
                />
              </div>
              <div className="field">
                <label>Contacts number @ Restaurant </label>
                <input
                  className="form-field"
                  type="text"
                  placeholder="+250 | Mobile Number "
                />
              </div>
              <div className="field">
                <label>Restaurant Owner Details </label>
                <input
                  className="form-field"
                  type="text"
                  placeholder="+250 | Mobile Number "
                />
              </div>
              <div className="field">
                <div className="input-2">
                  <input
                    className="form-field"
                    type="text"
                    placeholder="Owner name"
                  />
                  <input
                    className="form-field"
                    type="text"
                    placeholder="Restaurant Owner Email"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='footer'>
        <div>
            <button>  <FontAwesomeIcon icon={faArrowLeft}/> Back</button>
        </div>
        <div>
        <button>Next <FontAwesomeIcon icon={faArrowRight}/> style={{color:'white'}}/></button>

        </div>
    </div>
      </div>
    </div>
  );
};

export default RestoInfoPage;
