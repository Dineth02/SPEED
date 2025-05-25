// Load Citation.js
const { Cite } = require('@citation-js/core');
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

/*
since citation.js dosn't have a typing module
this typescript file will provide a basic wrapper
that allows for the use intellisence to reduce errors
should jest the function to make sure the implimentation
dosn't have any mistakes
*/
export type Paperinfo = {
    title?: string;
    DOI?: string;
    abstract?: string;
    version?: string;
    issued?: Date; //gets the first date of issued
    authors?: string[];
};

export function GetPaperInfo(address: string): Paperinfo
{
    let citeobject = new Cite(address)
    let json = JSON.parse(citeobject.format("data"))[0]
    let returnval: Paperinfo = {};
    returnval.title = json.title;
    returnval.DOI = json.DOI;
    returnval.abstract = json.abstract;
    returnval.version = json.version;
    returnval.issued = new Date(json.issued['date-parts'][0].join('/'));
    returnval.authors = citeobject.format("data");
    let authors: any[] = json.author;
    returnval.authors = authors.map((item) => item.family + " " + item.given + "; ");
    returnval.DOI = json.DOI;
    return returnval;
}