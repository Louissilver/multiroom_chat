module.exports = function(application){
    /*Chamada da página de chat via POST (através de um botão na página index) */
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    /*Chamada da página de chat via GET (através do link no navegador) */
    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChat(application, req, res);
    });
}