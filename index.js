module.exports = function lafy(block) {

    return new Promise((resolve, reject) => {
        block((err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });

}

// ES6
module.exports.default = module.exports;
