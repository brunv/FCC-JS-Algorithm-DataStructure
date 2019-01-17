/**
 *  Convert HTML entities:
 * 
 *  Convert the characters &, <, >, ", ', in a string to their corresponding HTML
 *  entities.
 */

/**
 *  Basic code solution:
 */

function convertHTML(str) {
    let string = str.split("");

    for (let i = 0; i < string.length; i++) {
        switch(string[i]) {
            case '<':
                string[i] = '&lt;';
                break;
            case '>':
                string[i] = '&gt;';
                break;
            case '&':
                string[i] = '&amp;';
                break;
            case '\"':
                string[i] = '&quot;';
                break;
            case '\'':
                string[i] = '&apos;';
                break;
        }
    }

    return string.join("");
}

console.log(convertHTML("Dolce & Gabbana"));


/**
 *  Intermediate solution:
 */

function convertHTML(str) {
    return str
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&apos;');
}


/**
 *  Advanced code solution:
 */

function convertHTML(str) {

    htmlEntities = {
        '&': '&amp;',
        '>': '&lt;',
        '<': '&gt;',
        '\"': '&quot;',
        '\'': '&apos;'
    }

    // The function is added which is what returns the converted entity or the
    // original one if there is no conversion.
    return str.split('').map(item => htmlEntities[item] || item).join('');
}