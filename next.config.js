console.log('HI BRENDAN');
console.log(`NODE ENV: ${process.env.NODE_ENV}`);
console.log(process.env);
if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

// module.exports = withSourceMaps(
// withPWA(
module.exports = {};
