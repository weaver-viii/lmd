function depB(sandboxed/*module is sandboxed(see cfgs) - it cannot require*/, exports, module){
    // CommonJS Module exports
    // or exports.feature = function () {}
    // This module is common for worker and browser
    module.exports = function(message) {
        return message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };
}