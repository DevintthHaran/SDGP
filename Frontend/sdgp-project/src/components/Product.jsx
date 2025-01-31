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
              backgroundColor: 'transparent', // Remove any background on hover
            },
            '&:focus':{
              boxShadow:'none',
            },
          }}
        >
          <Typography
            className="accordion-title"
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#007BFF',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#0056b3', // Dark blue on hover
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

      <h5 className="itemPrice">LKR {product.price.toFixed(2)}</h5>
      <button className="addcart" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
