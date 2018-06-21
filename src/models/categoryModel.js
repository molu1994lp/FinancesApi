import moongose from 'mongoose';

const Schema = moongose.Schema;
export const CategorySchema = new Schema({
    name: {
        type: String,
        required: 'Enter category name!'
    },
    subcategory: {
        type: Array
    }
});