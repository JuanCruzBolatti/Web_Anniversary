this["Aniversario"] = this["Aniversario"] || {};
this["Aniversario"]["templates"] = this["Aniversario"]["templates"] || {};

this["Aniversario"]["templates"]["views/about"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Sobre Nosotros</h1>\r\n<div class=\"about\">\r\n    <div class=\"lu\">\r\n        <h3>Lupilu</h3>\r\n        <p>Es mi hermosisima novia, la cual amo muchisimo. Sin dudas todas las palabras que le dedico en estos poemas se lo merece, y mucho mas. La empatía, grandeza y fuerza que tiene es insuperable. Estoy muy orgullozo de ella, y no me alcanzan los versos para expresarlo.\r\n        </p>\r\n        <p>Estudia periodismo, trabaja en la Dirección Nacional de Elencos Estables en el sector de Redes. Trabaja como la concha de la lora, resuelve problemas con una eficiencia que ni ella se lo cree y es una persona increible.</p>\r\n        <p>Espero que con los poemas puedan admirar la grandeza de la que soy orgullozamente un espectador.</p>\r\n        <p class=\"postdata\">Por si la quieren Stalkear:\r\n            <a target=\"_blank\" href=\"https://www.instagram.com/luci_gentile/\"><i class=\"fa-brands fa-instagram\"></i></a>\r\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/lucia-gentile-08b599238/\"><i class=\"fa-brands fa-linkedin\"></i></a>\r\n        </p>\r\n        \r\n    </div>\r\n\r\n    <div class=\"yo\">\r\n        <h3>Yo (Autor)</h3>\r\n        <p>Soy el afortunado novio de Lu, y como la amo mucho y se me dan bien los poemas y las paginas, decidí fusionarlo para nuestro tercer aniversario, poniendo a disposición los poemarios anteriores que le hice, los que no les habia hecho video aún, y las explicaciones que tanto me exigió (que estan escritos para ella, no para vos, salvo que vos seas ella, en ese caso si).</p>\r\n        <p>Espero que tanto ella, como cualquiera que se pasee por aca, puedan disfrutar de los poemas que con tanto amor hice.</p>\r\n        <p class=\"postdata\">tsss... si te gusto esta pagina, podes visitar la mia: <a target=\"_blank\" href=\"https://www.juancruzbolatti.com\"><i class=\"fa-solid fa-terminal\"></i></a></p>\r\n        \r\n    </div>\r\n</div>";
},"useData":true});

this["Aniversario"]["templates"]["views/cositas"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Cositas</h2>\r\n\r\n<p id=\"contador\"></p>";
},"useData":true});

this["Aniversario"]["templates"]["views/home"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Feliz Aniversario Amor - <span class=\"teamo\" onclick=\"teamo(this)\">Te Amo Mucho</span></h1>\r\n\r\n<div class=\"cards\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"Improvisación de un Querer","tag":"aniversario_01","imagen":"./img/iduq.png","poemario":"/poemario/improvisacion_de_un_querer"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"Cuna de Luna","tag":"aniversario_01","imagen":"./img/cdl.png","poemario":"/poemario/cuna_de_luna"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"Estación 23","tag":"aniversario_02","imagen":"./img/estacion.png","poemario":"/poemario/estacion"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"Rezos","tag":"aniversario_02","imagen":"./img/rezos.png","poemario":"/poemario/rezos"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"Improvisación de un querer (re-hecho)","tag":"aniversario_03","imagen":"./img/iduqr.png","poemario":"/poemario/improvisacion_de_un_querer_rehecho"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"Improvisación de un amar","tag":"aniversario_03","imagen":"./img/idua.png","poemario":"/poemario/improvisacion_de_un_amar"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"cuna de luna (re-hecho)","tag":"aniversario_03","imagen":"./img/cdlr.png","poemario":"/poemario/cuna_de_luna_rehecho"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"canto de luna","tag":"aniversario_03","imagen":"./img/cdl2.png","poemario":"/poemario/canto_de_luna"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"constelaciones","tag":"aniversario_03","imagen":"./img/constelaciones.png","poemario":"/poemario/constelaciones"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"card"),depth0,{"name":"card","hash":{"tituloPoemario":"cositas","tag":"aniversario_04","imagen":"./img/cositas.jpg","poemario":"/cositas"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div> \r\n\r\n<div class=\"footer\">04/01/2024</div>";
},"usePartial":true,"useData":true});

this["Aniversario"]["templates"]["views/layouts/main"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!doctype html>\r\n<html lang=\"es\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":20}}}) : helper)))
    + "</title>\r\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"/img/favicon.png\">\r\n\r\n    <!-- Font Awesome -->\r\n    <link rel=\"stylesheet\" href=\"/style/all.min.css\">\r\n    <!-- Normalize -->\r\n    <link rel=\"stylesheet\" href=\"/style/normalize.css\">\r\n    <!-- Main Style -->\r\n    <link rel=\"stylesheet\" href=\"/style/style.css\">\r\n</head>\r\n<body>\r\n    <header>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"navbar"),depth0,{"name":"navbar","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </header>\r\n    \r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n    <!-- Main script -->\r\n    <script src=\"/js/funciones.js\"></script>\r\n</body>\r\n</html>";
},"usePartial":true,"useData":true});

this["Aniversario"]["templates"]["views/partials/card"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"poemario") || (depth0 != null ? lookupProperty(depth0,"poemario") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"poemario","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":21}}}) : helper)))
    + "\" class=\"card\" style=\"background-image: url("
    + alias4(((helper = (helper = lookupProperty(helpers,"imagen") || (depth0 != null ? lookupProperty(depth0,"imagen") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data,"loc":{"start":{"line":1,"column":65},"end":{"line":1,"column":75}}}) : helper)))
    + ");\">\r\n    <div class=\"card-content\">\r\n        <p class=\"tag "
    + alias4(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":3,"column":22},"end":{"line":3,"column":29}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":38}}}) : helper)))
    + "</p>\r\n        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"tituloPoemario") || (depth0 != null ? lookupProperty(depth0,"tituloPoemario") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tituloPoemario","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":30}}}) : helper)))
    + "</h3>\r\n    </div>\r\n</a>";
},"useData":true});

this["Aniversario"]["templates"]["views/partials/navbar"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar\">\r\n    <a href=\"/\" title=\"Inicio\"> <i class=\"fa-solid fa-house\"></i></a>  \r\n    \r\n    <a href=\"/nosotros\" title=\"Sobre Nosotros\"> <i class=\"fa-solid fa-heart\"></i> </a>\r\n\r\n    <a target=\"_blank\" href=\"https://drive.google.com/drive/folders/17H723afba9mtJsY2yUih1_-XRxd8kR1_?usp=sharing\" class=\"boton-drive\" title=\"Descargar las Fotos\"> <i class=\"fa-solid fa-image\"></i></a>\r\n\r\n    <a target=\"_blank\" href=\"https://drive.google.com/drive/folders/16fO5uYtWo3xsdwalA34gs9Vnw5JaZ_sd?usp=sharing\" class=\"boton-drive\" title=\"Descargar los Audios\"> <i class=\"fa-solid fa-photo-film\"></i> </a>\r\n\r\n    <a target=\"_blank\" href=\"https://youtube.com/playlist?list=PLRqaCH_EUKY-BpDup4usJxEq23yS9hdov&si=zBI8QWsGRwf8prLG\" class=\"boton-drive\" title=\"Youtube\"> <i class=\"fa-brands fa-youtube\"></i> </a>\r\n\r\n    <button class=\"random\" title=\"Random\" onclick=\"randomPoem()\"> <i class=\"fa-solid fa-shuffle\"></i> </button>\r\n</nav>\r\n\r\n<div class=\"navbar-bg display-pc\"></div>";
},"useData":true});

this["Aniversario"]["templates"]["views/poemario"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li>\r\n                <h3 class=\"pepepe\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"tituloPoema") || (depth0 != null ? lookupProperty(depth0,"tituloPoema") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tituloPoema","hash":{},"data":data,"loc":{"start":{"line":39,"column":35},"end":{"line":39,"column":50}}}) : helper)))
    + "</h3>\r\n                <p class=\"pepepe\"> "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"poema") || (depth0 != null ? lookupProperty(depth0,"poema") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"poema","hash":{},"data":data,"loc":{"start":{"line":40,"column":35},"end":{"line":40,"column":46}}}) : helper))) != null ? stack1 : "")
    + " </p>\r\n            </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"titulo-poemario\">\r\n    <h2> "
    + alias4(((helper = (helper = lookupProperty(helpers,"tituloPoemario") || (depth0 != null ? lookupProperty(depth0,"tituloPoemario") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tituloPoemario","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":27}}}) : helper)))
    + " - <span class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":2,"column":43},"end":{"line":2,"column":50}}}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":60}}}) : helper)))
    + " </span> </h2>\r\n</div>\r\n\r\n<div class=\"poemario-contenido\">\r\n\r\n    <div class=\"poemario-c1\">\r\n        <iframe id=\"youtubePlayer\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkVideo") || (depth0 != null ? lookupProperty(depth0,"linkVideo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkVideo","hash":{},"data":data,"loc":{"start":{"line":8,"column":40},"end":{"line":8,"column":53}}}) : helper)))
    + "\" title=\"YouTube video player\" frameborder=\"0\"\r\n            allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\r\n            allowfullscreen></iframe>\r\n        <div class=\"poemario-botones\">\r\n            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkFoto") || (depth0 != null ? lookupProperty(depth0,"linkFoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkFoto","hash":{},"data":data,"loc":{"start":{"line":12,"column":21},"end":{"line":12,"column":33}}}) : helper)))
    + "\"> <i class=\"fa-solid fa-image\"></i> </a>\r\n            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkAudio") || (depth0 != null ? lookupProperty(depth0,"linkAudio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkAudio","hash":{},"data":data,"loc":{"start":{"line":13,"column":21},"end":{"line":13,"column":34}}}) : helper)))
    + "\"> <i class=\"fa-solid fa-photo-film\"></i> </a>\r\n            <button>\r\n                <i class=\"fa-solid fa-j icon-display\"></i>\r\n                <i class=\"fa-solid fa-backward icon-display-none\"></i>\r\n            </button>\r\n            <button>\r\n                <i class=\"fa-solid fa-k icon-display\"></i>\r\n                <i class=\"fa-solid fa-pause icon-display-none\" style=\"font-size: 1.6rem;\"></i>\r\n            </button>\r\n            <button>\r\n                <i class=\"fa-solid fa-l icon-display\"></i>\r\n                <i class=\"fa-solid fa-forward icon-display-none\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"explicacion\">\r\n            <h3>Explicación</h3>\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"explicacion") || (depth0 != null ? lookupProperty(depth0,"explicacion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"explicacion","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n        <div id=\"finExplicacion\"></div>\r\n        \r\n    </div>\r\n\r\n    <div class=\"poemario-c2\">\r\n        <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"poemas") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":42,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\r\n    </div>\r\n\r\n</div>\r\n";
},"useData":true});