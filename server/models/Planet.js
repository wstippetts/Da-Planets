import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({

  name: { type: String, required: true, maxLength: 75 },
  biome: { type: String },
  atmosphere: { type: Boolean },

  galaxyId: { type: ObjectId, ref: 'Galaxies' }

})