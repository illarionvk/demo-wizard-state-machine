import Joi from 'joi'

export const itemSchema = Joi.object().keys({
  self: Joi.object().keys({
    id: Joi.string().uuid(),
    title: Joi.string(),
    price: Joi.number().min(0)
  }),
  drivetrain: Joi.array()
    .min(1)
    .items(
      Joi.object().keys({
        id: Joi.string().uuid(),
        title: Joi.string(),
        price: Joi.number().min(0)
      })
    ),
  paint: Joi.array()
    .min(1)
    .items(
      Joi.object().keys({
        id: Joi.string().uuid(),
        title: Joi.string(),
        hex: Joi.string(),
        price: Joi.number().min(0)
      })
    ),
  pedal: Joi.array()
    .min(1)
    .items(
      Joi.object().keys({
        id: Joi.string().uuid(),
        title: Joi.string(),
        price: Joi.number().min(0)
      })
    ),
  saddle: Joi.array()
    .min(1)
    .items(
      Joi.object().keys({
        id: Joi.string().uuid(),
        title: Joi.string(),
        price: Joi.number().min(0)
      })
    )
})

export const listingSchema = Joi.array()
  .min(1)
  .items(
    Joi.object().keys({
      id: Joi.string().uuid(),
      title: Joi.string(),
      price: Joi.number().min(0)
    })
  )
