import React from "react";
import "../style/Product.css";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Product = ({ product, addToCart }) => {
    return (
        <div className="item">
            <img className="itemImg" src={product.image} alt={product.name} />
            <h3 className="itemName">{product.name}</h3>

            {/* Description wrapped in MUI Accordion */}
            <Accordion className="accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="description-content"
                    id="description-header"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        '&:focus': {
                            boxShadow: 'none',
                        },
                    }}
                >
                    <Typography
                        className="accordion-title"
                        sx={{
                            fontSize: '16px',
                            color: '#818C78',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#5C7285',
                            },
                        }}
                    >
                        View Description
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion-paragraph">{product.description}</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Price and Add to Cart Button in the same row */}
            <div className="price-cart-container">
                <h5 className="itemPrice">LKR {product.price.toFixed(2)}</h5>
                <button className="addcart" onClick={() => addToCart(product)}>
                    Add to cart
                </button>
            </div>
        </div>

    );
};

export default Product;