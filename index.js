'use strict';

var feather2analyse = require('feather2-postprocessor-analyse');

module.exports = function(content, file){
    content = feather2analyse(content, file);

    if(file.isPagelet){
        content = content.replace(/"##PLACEHOLDER_PAGELET_ASYNCS:\S+?##"/, function(){
            return "{{str_replace('\\\\', '', json_encode($PAGELET_ASYNCS))}}";
        });
    }

    return content;
};
