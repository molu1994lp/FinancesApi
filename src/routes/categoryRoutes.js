import {
        addContact, 
        getCategories, 
        getCategory,
        updateCategory,
        addSubcategory,
        deleteCategory,
        deleteSubcategory
    } from '../controllers/categoryController';

const categoryRoutes = (app) => {

    app.route('/api/category')
        .get(getCategories)
        .post(addContact);
        
    app.route('/api/category/:categoryId')
        .get(getCategory)
        .put(updateCategory)
        .patch(addSubcategory)
        .delete(deleteCategory);

        //For deleting subcategory
        app.route('/api/category/:categoryId/:subcategory')
        .patch(deleteSubcategory)
}

export default categoryRoutes;