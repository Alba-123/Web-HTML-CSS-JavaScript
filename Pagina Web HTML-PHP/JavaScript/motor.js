

function insertar_datos_html () {

  var añade_p=document.createElement("p");
  añade_p.innerHTML="Para que me entiendas, los navegadores web, como puede ser Firefox, chrome, safari, opera, etc. Se encargan de leer, interpretar ese código HTML con la que están hechas las páginas web y finalmente mostrar un contenido entendible para el usuario que visita dicha página web. Entonces cuando tú accedes a cualquier página web, mediante cualquier navegador web, lo que hace el navegador prácticamente es pedirle al servidor donde este alojado dicha página web que le envíe dicho documento, entonces el servidor le enviará dicho documento HTML donde se encuentra el código HTML, el navegador recibe el documento, lo lee, interpreta y muestra el contenido al usuario final.";
  document.getElementById("insertar_mas_html").appendChild(añade_p);
  
}


function insertar_datos_php () {

  var añade_p1=document.createElement("p");
  añade_p1.innerHTML="Una de las características más potentes y destacables de PHP es su soporte para un amplio abanico de bases de datos. Escribir una página web con acceso a una base de datos es increíblemente simple utilizando una de las extensiones específicas de bases de datos (p.ej., para mysql), o utilizar una capa de abstracción como PDO, o conectarse a cualquier base de datos que admita el estándar de Conexión Abierta a Bases de Datos por medio de la extensión ODBC. Otras bases de datos podrían utilizar cURL o sockets, como lo hace CouchDB.";
  document.getElementById("insertar_mas_php").appendChild(añade_p1);

  var añade_p2=document.createElement("p");
  añade_p2.innerHTML="PHP también cuenta con soporte para comunicarse con otros servicios usando protocolos tales como LDAP, IMAP, SNMP, NNTP, POP3, HTTP, COM (en Windows) y muchos otros. También se pueden crear sockets de red puros e interactuar usando cualquier otro protocolo. PHP tiene soporte para el intercambio de datos complejos de WDDX entre virtualmente todos los lenguajes de programación web. Y hablando de interconexión, PHP tiene soporte para la instalación de objetos de Java y emplearlos de forma transparente como objetos de PHP.";
  document.getElementById("insertar_mas_php").appendChild(añade_p2);

  var añade_p3=document.createElement("p");
  añade_p3.innerHTML="PHP tiene útiles características de procesamiento de texto, las cuales incluyen las expresiones regulares compatibles con Perl (PCRE), y muchas extensiones y herramientas para el acceso y análisis de documentos XML. PHP estandariza todas las extensiones XML sobre el fundamento sólido de libxml2, y amplía este conjunto de características añadiendo soporte para SimpleXML, XMLReader y XMLWriter.";
  document.getElementById("insertar_mas_php").appendChild(añade_p3);
  
}