const REG_EMAIL = /(?<user>[a-zA-Z0-9_\-\.]+)@(?<domain>[a-zA-Z0-9_\-\.]+)\.(?<tld>[a-zA-Z]{2,5})/gi;

const txt = "ghoul.ahmed5@gmail.com"



 // Extract entities
 const entities = REG_EMAIL.exec(txt);
 if (entities) {
   const {user, domain, tld} = entities.groups;
   console.log("user "+user);
   console.log("domain "+domain);
   console.log("tld "+tld);
 }