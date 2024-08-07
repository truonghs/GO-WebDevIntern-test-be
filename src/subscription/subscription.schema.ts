import { Schema, Document } from 'mongoose';

export const SubscriptionSchema = new Schema({
  email: { type: String, required: true, unique: true },
  confirmed: { type: Boolean, default: false },
  confirmationToken: { type: String },
  coordinate: { type: String, require: true },
});

export interface Subscription extends Document {
  email: string;
  confirmed: boolean;
  confirmationToken: string;
  coordinate: { type: String; require: true };
}
