import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
const CreateMenu = () => {
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
           <span className="resto-info-no">2</span> Restaurant Type & Timing
         </h6>
         <div className="test">
           <div>loremimpsusmsoenreoneo fneonfeonfeneonfenfenfoe</div>
         </div>
       </div>
       <div className="details">
         <h6>
           <span className="resto-info-true">3</span> Create your menu
         </h6>
         <div className="test">
           <div>loremimpsusmsoenreoneo fneonfeonfeneonfenfenfoe</div>
         </div>
       </div>
     </div>
     <div className="info-2">
       <div className='menu-headers'>
        <p className="create-menu-drink">Drink</p>
        <p className="create-menu-drink-light">Starter</p>
        <p className="create-menu-drink-light">Appetizer</p>
        <p className="create-menu-drink-light">Desert</p>
        <p className="create-menu-drink-light">Main</p>
       </div>
       <div className="input-container-create-menu">
       <form className="form-data">
       <div className="field">
                <label>Name</label>
                <input type="text " placeholder="name" />
              </div>  
             <div className="field">
                <label>Price</label>
                <input type="text " placeholder="price" />
              </div>
              <div className="field">
                <label>Menu description</label>
                <input type="text " placeholder="Ingredients" />
              </div>
              <div className="field">
                <label>Image</label>
                <input type="file" placeholder="Restaurant name" />
              </div>
                
                <div className="add-more">
                    <button>Add more</button>
                    <FontAwesomeIcon icon={faPlus} style={{color:'#f49e06'}} className='add-more-plus'/>
                </div>
       </form>
          </div>
     </div>
   </div>
   <div className='footer'>
     <div>
         <button><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
     </div>
     <div>
     <button>Next <FontAwesomeIcon icon={faArrowRight} style={{color:'white'}}/></button>

     </div>
 </div>
 </div>

 </div>
  )
}

export default CreateMenu
