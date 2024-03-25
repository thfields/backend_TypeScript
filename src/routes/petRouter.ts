import { Router } from 'express';
import PetController from '../controller/PetController';
import PetRepository from '../repositories/PetRepository';
import { AppDataSource } from '../config/dataSource';

const router = Router();
const petRepoasitory = new PetRepository(AppDataSource.getRepository("PetEntity"));
const petController = new PetController(petRepoasitory); // Fix: Pass an instance of PetRepository instead of the class itself

router.post('/', (req, res) => petController.criarPet(req,res));
router.get('/', (req, res) => petController.listaPet(req,res)); // Adicione esta linha
router.put('/:id', (req, res) => petController.atualizaPet(req,res));
router.delete('/:id', (req, res) => petController.deletaPet(req,res));

export default router;
