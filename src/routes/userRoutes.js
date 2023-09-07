import { Router } from 'express';
import userController from '../controllers/UserController';
import loginrequired from '../middlewares/loginrequired';

const router = new Router();

//* Não existe numa aplicação real
router.get('/', userController.index); // Lista usuários
router.get('/:id', userController.show); // Lista usuário

router.put('/', loginrequired, userController.update);
router.delete('/', loginrequired, userController.delete);
router.post('/', loginrequired, userController.store);

export default router;

/*
index -> Lista todos os usuários -> get
store/create -> cria um novo usuário -> post
delete  -> apaga um usuário -> delete
shouw -> mostra um usuário -> get
update -> atualiza um usuário -> PATCH ou PUT
*/
