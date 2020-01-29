import React from 'react';
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { 
    CollectionItemContainer,
    BackgroundImage,
    AddToCartButton,
    CollectionFooterContainer,
    FooterName,
    FooterPrice } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <CollectionItemContainer>
        <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}} />

        <CollectionFooterContainer>
            <FooterName>{ name }</FooterName>
            <FooterPrice>${ price }</FooterPrice>
        </CollectionFooterContainer>
        <AddToCartButton onClick={() => addItem(item)} inverted> Add to cart </AddToCartButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);