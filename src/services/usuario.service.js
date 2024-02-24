import { Usuario } from '../models/usuario.model.js'
import { newNotFoundError } from '../errors/errors.js'

export class UsuariosService {

    constructor({ smsService, usuariosDao, productsDao }) {
        this.smsService = smsService
        this.usuariosDao = usuariosDao
        this.productsDao = productsDao
    }

    async registrar(datos) {
        const usuario = new Usuario(datos)
        await this.usuariosDao.create(usuario.toPOJO())
        await this.smsService.enviar({
            to: ADMIN_SMS_NUMBER,
            message: `nuevo usuario: ${usuario.nombre} (${usuario.email})`
        })
        return usuario.toPOJO()
    }

    async comprarJuguete(idUsuario, idProduct) {
        const usuario = await this.usuariosDao.readOne({ _id: idUsuario })
        if (!usuario) throw newNotFoundError('usuario no encontrado')

        const producto = await this.productsDao.readOne({ _id: idProduct })
        if (!usuario) throw  newNotFoundError('producto no encontrado')

    }

    async darDeBaja(idUsuario) {
        const usuario = await this.usuariosDao.deleteOne({ _id: idUsuario })
        if (!usuario) throw newNotFoundError('usuario no encontrado')
        return usuario
    }
}