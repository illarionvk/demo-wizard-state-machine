import Joi from 'joi'

const assetList = Joi.array()
  .min(1)
  .unique('id')
  .unique('title')

export const itemSchema = Joi.object().keys({
  bicycle: Joi.object().keys({
    id: Joi.string().uuid(),
    title: Joi.string(),
    price: Joi.number().min(0)
  }),
  drivetrain: assetList.items(
    Joi.object().keys({
      id: Joi.string().uuid(),
      title: Joi.string(),
      price: Joi.number().min(0)
    })
  ),
  paint: assetList.items(
    Joi.object().keys({
      id: Joi.string().uuid(),
      title: Joi.string(),
      hex: Joi.string(),
      price: Joi.number().min(0)
    })
  ),
  pedal: assetList.items(
    Joi.object().keys({
      id: Joi.string().uuid(),
      title: Joi.string(),
      price: Joi.number().min(0)
    })
  ),
  saddle: assetList.items(
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
  .unique('id')
