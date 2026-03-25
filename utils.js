// utils.js

/**
 * Formats a number to a specified decimal places.
 * @param {number} num - The number to format.
 * @param {number} decimals - The number of decimal places.
 * @returns {string} - The formatted number as a string.
 */
function formatNumber(num, decimals) {
    if (isNaN(num) || isNaN(decimals)) return null;
    return num.toFixed(decimals);
}

/**
 * Validates if a string is a valid number.
 * @param {string} str - The string to validate.
 * @returns {boolean} - True if valid number, false otherwise.
 */
function isValidNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

module.exports = {
    formatNumber,
    isValidNumber,
};
