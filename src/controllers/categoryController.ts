import { Request, Response } from 'express';
import { Category } from '../models/category';

export const createCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.create({ name: req.body.name });
        res.status(201).json(category);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.findByPk(req.params.categoryId);
        if (category) {
            category.name = req.body.name;
            await category.save();
            res.json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

// export const deleteCategory = async (req: Request, res: Response) => {
//     try {
//         const category = await Category.findByPk(req.params.categoryId);
//         if (category && (await category.getServices()).length === 0) {
//             await category.destroy();
//             res.status(204).send();
//         } else {
//             res.status(400).json({ message: 'Category not found or not empty' });
//         }
//     } catch (error:any) {
//         res.status(500).json({ message: error.message });
//     }
// };
export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.findByPk(req.params.categoryId);
        if (category) {
            // Use the getServices method to retrieve associated services
            const services = await category.getServices();
            if (services.length === 0) {
                await category.destroy();
                return res.status(204).send();
            } else {
                return res.status(400).json({ message: 'Category is not empty' });
            }
        } else {
            return res.status(404).json({ message: 'Category not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};