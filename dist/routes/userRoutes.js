"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginrequired = require('../middlewares/loginrequired'); var _loginrequired2 = _interopRequireDefault(_loginrequired);

const router = new (0, _express.Router)();

//* Não existe numa aplicação real
router.get('/', _UserController2.default.index); // Lista usuários
router.get('/:id', _UserController2.default.show); // Lista usuário

router.put('/', _loginrequired2.default, _UserController2.default.update);
router.delete('/', _loginrequired2.default, _UserController2.default.delete);
router.post('/', _loginrequired2.default, _UserController2.default.store);

exports. default = router;

/*
index -> Lista todos os usuários -> get
store/create -> cria um novo usuário -> post
delete  -> apaga um usuário -> delete
shouw -> mostra um usuário -> get
update -> atualiza um usuário -> PATCH ou PUT
*/
