import  {createRequire} from "module";
const require = createRequire(
    import.meta.url);
import { franc } from "franc";
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langcode = franc(input);
if(langcode === 'und'){
    console.log("Sorry, couldn't guess! Try with more sample text!".red);
}
else{
    const language = langs.where("3",langcode);
    console.log(`Our best guess is: ${language.name}`.green);
}

