import React from 'react';
import classes from './Card.css';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import Star from '../Star/Star';
import PropTypes from 'prop-types';


const card = (props) => (

    <div className={classes.Card} style={{ backgroundImage: `url(${props.item.image})` }}>

        {/* Title */}
        <div className={classes.Title}>
            {props.item.title}
        </div>


        {/* $ Cost  */}
        <div className={classes.UpperRight}>
            <div className={classes.AlignRight}>
                $ {props.item.payment.cost}
            </div>
        </div>


        {/* Rating */}
        <div className={classes.Rating}>
            <div style={{ width: '200px' }}>
                {props.item.houseType}
            </div>
            &nbsp;&nbsp;
            <Star starCount={props.item.rating.stars} />
            <span className={classes.Type}>
                ({props.item.rating.reviews})
             </span>
        </div>


        {/* Lower Right */}
        <div className={classes.LowerRight}>
            <div>
                {props.item.location.city}, {props.item.location.country}
            </div>
            <div style={{ textAlign: 'left' }}>
                <div className={classes.Name}>
                    {props.item.host.name}
                </div>
            </div>
            <div style={{ textAlign: 'right' }}>
                <button
                    type="button"
                    className="btn btn-default"
                    style={{ width: '45px', height: '35px', backgroundColor: '#5b5b5b', border: '0px' }}
                    onClick={()=>props.addListingToTheCartHandler(props.item)}
                ><MdAddShoppingCart size={20} style={{ color: '#ffffff' }} /></button>
            </div>
        </div>


    </div>  //main div

)

card.propTypes = {
    item: PropTypes.object.isRequired,
    addListingToTheCartHandler: PropTypes.func.isRequired
}


export default card;
