import { Request, Response } from 'express';
import { Service } from '../models/service';
import { ServicePriceOption } from '../models/servicePriceOption';

export const createService = async (req: Request, res: Response) => {
    try {
        const service = await Service.create({ 
            name: req.body.name, 
            type: req.body.type, 
            categoryId: req.params.categoryId 
        });
        const priceOptions = req.body.priceOptions || [];
        await Promise.all(priceOptions.map((option: { duration: any; price: any; type: any; }) =>
            ServicePriceOption.create({
                serviceId: service.id,
                duration: option.duration,
                price: option.price,
                type: option.type,
            })
        ));
        res.status(201).json(service);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.findAll({ where: { categoryId: req.params.categoryId } });
        res.json(services);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateService = async (req: Request, res: Response) => {
    try {
        const service = await Service.findByPk(req.params.serviceId);
        if (service) {
            service.name = req.body.name;
            service.type = req.body.type;
            await service.save();

            const priceOptions = req.body.priceOptions || [];
            await ServicePriceOption.destroy({ where: { serviceId: service.id } });
            await Promise.all(priceOptions.map((option: { duration: any; price: any; type: any; }) =>
                ServicePriceOption.create({
                    serviceId: service.id,
                    duration: option.duration,
                    price: option.price,
                    type: option.type,
                })
            ));

            res.json(service);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteService = async (req: Request, res: Response) => {
    try {
        const service = await Service.findByPk(req.params.serviceId);
        if (service) {
            await service.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};
