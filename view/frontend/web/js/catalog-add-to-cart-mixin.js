/**
 * Copyright © CsVikram, Inc. All rights reserved.
 */

define([
    'jquery'
], function ($) {
    'use strict';
    return function (catalogAddToCart){
        $.widget('mage.catalogAddToCart',catalogAddToCart,{
            enableAddToCartButton: function (form) {
                //popup code start
                var popup = $('<div class="add-to-cart-dialog"/>').html($('.page-title span').text() + '<span> has been added to cart.</span>').modal({
                    modalClass: 'add-to-cart-popup',
                    title: $.mage.__("Popup Title"),
                    buttons: [
                        {
                            text: 'Close',
                            click: function () {
                                this.closeModal();
                            }
                        },
                        {
                            text: 'Proceed to Checkout',
                            click: function () {
                                window.location = window.checkout.checkoutUrl
                            }
                        }
                    ]
                });
                popup.modal('openModal');
                //popup code end

                return this._super(form);
            }
        });
        return $.mage.catalogAddToCart;
    };
});
