import moongose from 'mongoose';
import {CategorySchema} from '../models/categoryModel';

const Category = moongose.model('Categories', CategorySchema);

export const addContact = (req, resp) =>{
    let newCategory = new Category(req.body);

    newCategory.save((error, category) => {
        if(error) {
            resp.send(error);
        }
        else {
            resp.sendStatus(201);
        }
    });
};

export const getCategories = (req, resp, next) => {
    Category.find({}, (err, categories) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.json(categories)
        }
    });
};

export const getCategory = (req, resp) => {
    Category.findById(req.params.categoryId, (err, category) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.json(category);
        }
    });
};

export const updateCategory = (req, resp) => {
    Category.findByIdAndUpdate(req.params.categoryId, req.body, {new: true}, (err, category) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.sendStatus(200);
        }
    });
};

export const addSubcategory = (req, resp) => {
    Category.findByIdAndUpdate(req.params.categoryId, {$push: {subcategory: req.body.subcategory}}, (err, category) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.sendStatus(200);
        }
    });
}

export const deleteCategory = (req, resp) => {
    Category.findByIdAndRemove(req.params.categoryId, (err, category)=> {
        if(err) {
            resp.send(err);
        }
        else {
            resp.sed({message: 'Successful deleted category'});
        }
    })
}

export const deleteSubcategory = (req, resp) => {
    Category.findByIdAndUpdate(req.params.categoryId, {$pull: {subcategory: req.params.subcategory}}, (err, category) => {
        if(err) {
            resp.send(err);
        }
        else {
            resp.sendStatus(200);
        }
    });
}

