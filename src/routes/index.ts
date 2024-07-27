import { Router } from 'express';
import  authMiddleware  from '../middlewares/authMiddleware';
import * as AuthController from '../controllers/authController';
import * as CategoryController from '../controllers/categoryController';
import * as ServiceController from '../controllers/serviceController';

const router = Router();

// Auth routes
router.post('/Register', AuthController.register);
router.post('/login', AuthController.login);

// Category routes
router.post('/category', authMiddleware, CategoryController.createCategory);
router.get('/categories', authMiddleware, CategoryController.getAllCategories);
router.put('/category/:categoryId', authMiddleware, CategoryController.updateCategory);
router.delete('/category/:categoryId', authMiddleware, CategoryController.deleteCategory);

// Service routes
router.post('/category/:categoryId/service', authMiddleware, ServiceController.createService);
router.get('/category/:categoryId/services', authMiddleware, ServiceController.getAllServices);
router.put('/category/:categoryId/service/:serviceId', authMiddleware, ServiceController.updateService);
router.delete('/category/:categoryId/service/:serviceId', authMiddleware, ServiceController.deleteService);

export default router;
