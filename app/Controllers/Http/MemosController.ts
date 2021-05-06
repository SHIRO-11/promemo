// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MemosController {

    public async every({ params, view }) {

        return view.render('memos/every')
      }
}
