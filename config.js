const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVaY+qSBT9Ky/1Vfu1oLKYdDJsIi6oIApO5kMJxSKrVCHgi/99Qtud7uQt08OnSlF17rn3nnvqB8jyCKMFasHkByjK6AoJ6pakLRCYALHyfVSCPvAggWACmHmc6AFVTTmKr8mB6VEyqyz2G54IIW1PsaXpxnmf1nwsvIB7HxTVKYncPwAeDBpfr85tA7VVvJj6Ee7dTBVjqbdfsrhHtB3vHdmoUpv4Bdw7RBiVURYoRYhSVMJkgdoNjMqv0Rfm1cmttpa4S8lqhSG/42bSxQ8P7bI5HUWFagsclmdbivOv0S+zs0BLTHOEs5M2Xy01f3+74HydlVul4ba+0yyF6214MQzuQR9HQYY8zUMZiUj75bqv53btp60jY214rq9yD5pZnLdTltjt7Xxbro5yUo1rz7bqrxHXrUFdH24FObD+THSJpefL4VClRZ+mG+csJ5EmMaujlKruZ+Kb8l0r8f+pezszZZYOwlm4aNmckMA/BMnIEAXIDYIwV63YZkxPupp28DX6J290u5wj+aKnLcwsk5iVrol5b9G4e8eC0sBIjLWxExf7T/Qhqco/sWSzPNgwtXJcnwV8U8rA7jnt6phRhuM4h0QM+Pp6WlOsw7dqqocL3bCG/k04YiWvw128WSwJn6dVyO8PbZEsia9C+Ry8vGYUo1bzwIS690GJggiTEpIoz7o9husD6F1N5JaIvFYXYC5DJNT4dCH3ehvX10e1wYjtcyGP0KzU/FTNDWUasZvp4AX0QVHmLsIYebMIk7xsVwhjGCAMJn+/NqrLuURpTtA88sAE0MyQpTiO4cYj5i/8vQ4hwbAovmeIgD7wyzxdITAhZYX64PUCx/EcNaWHokLJ4zEjTYeMIDOyJI2V4ZQbMV2G6SPoLkoRJjAtwIRih2OGGfEMe/+nDzLUkId8XpOm+sCPSkysrCqSHHrv2nr/CV03rzJitpkrdQtUgsngYxsREmUB7jKrMli6YXRFUpcHmPgwwejeBx66Ri7q8EBxwYanz7Rte9F9Nt42cxepdVe5MM8eRyiX9TzK8544d4ieRq4Hnzg0pJ9Yzqe4k8fzY54DXTkek9vd+b06Y3yiI05Dw8PKQqUyXUq03SiBRz1s5aEAVCLvvcon6MZVsctjlP3JfUVLHNSGJayZipnznC3VPUpTmqkqfMJ9KAtMfny4pZR7HZ5qzBnDkIeg61YX5yc1TFjuZ0FksDsNZvAUnb6tqiCEyTdn1wV860YH5SECowSDCZD0QxA6W1FZ+ovBEquqEASCFAjgo3vvw/hQexSr0BWPy+mWNYx0XuTnqeHqZkzTtkcF+vx4jQ125YxUZfTyCxAwAUs6IXbDT5Otf1Z7zDgyCn/e03N39nw0Tm2WN60An3eYS8e1Y1/wJUji8WnOSOqoB2O70oporA3SzB6J82fFn6n6VZS3L120h4o+B0PNFTer3OuNsDcwZmfao6NBYi+ptNhIGy7F2qHcayY95aBp8mnrHj28yjLb3h/S42IsldlBqNcmVi4J+1zzm8WR9871wyZebSp5ex6itwl+aM6P0KvbvnXjP7v2If/Bvf8J482/fyMx0SnENBMOZmOtB9YxglBrLFu2Cp0kQ8+RzcNprKCbuhbDNbh3c10kkPh5mXa2lZ4g6IMEYiJ8jO+vHGHUB2krFIVJIHmfeiB036J3BPd/AWDR40WXCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Habib Mughal YT",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Habib Mughal YT",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

