/**
 * Lazy-promisify a function
 * @param {(cb: (err: any, data?: T) => void) => void} block - Block of code 
 * (function) that receives a callback as its first parameter and should 
 * immediately invoke your callback-style asynchronous function with this 
 * callback
 * @returns {Promise<T>} Promise that resolves or rejects when the callback is 
 * called
 * @template T
 * @example
 * // Read file contents
 * let c = await lafy(cb => fs.readFile('/etc/passwd', cb));
 * 
 * // Sleep 1s
 * await lafy(cb => setTimeout(cb, 1000));
 */
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
