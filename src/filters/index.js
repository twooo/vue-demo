
/**
 * 过滤html标签与 &nbsp;
 */
exports.removeTags = (content) => {
    var reg = new RegExp('<[^>]*>', 'ig');
    var reg1 = new RegExp('\&[a-zA-Z]{1,10};', 'ig');

    var result = content.replace(reg, '').replace(reg1, '');
    return result;
};