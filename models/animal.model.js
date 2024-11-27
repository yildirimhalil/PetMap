import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const animalSchema = new Schema(
  {
    species: {
      type: String, 
      required: true,
    },
    gender: {
      type: String, 
      enum: ['Erkek', 'Dişi'],
    },
    color: {
      type: String, 
    },
    healthStatus: {
      type: String,
      default: 'Bilinmiyor',
    },
    // location: {
    //   type: {
    //     type: String,
    //     enum: ['Point'], 
    //     required: true,
    //   },
    //   coordinates: {
    //     type: [Number], 
    //     required: true,
    //   },
    // },
    image: {
      type: String, 
    },
    description: {
      type: String,
      maxlength: 500,
    },
    // addedBy: {
    //   type: mongoose.Schema.Types.ObjectId, 
    //   ref: 'User', 
    // },
  },
  { timestamps: true } 
);

export default mongoose.model('Animal', animalSchema);
