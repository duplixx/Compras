'use strict';

/**
 * order controller
 */
// sk_test_51NEUkCSGCv3lqfV6QK76RnJL3lPS8EHDa9sqUXtG9IcYgY6FsDJGC8fGGx7dF8ctsy5kIsFg6Quwzzx3H9NUp9Yg00V4pDIwyv
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({

    async create(ctx) {
        const { amount, shippingAddress, city, pin, token } = ctx.request.body
        await strapi.charges.create({
            amount: amount * 100,
            currency: "INR",
            source: token,
            description: `order by user ${ctx.state.user.email}`    
        })
        const order = await strapi.db.query('api::order.order').create({
            data: {
                shippingAddress,
                city,
                amount, items, pin, user: ctx.state.user.email
            }
        })
        return order
    }
}));
