'use strict';

module.exports = function(content, file){
    if(file.isPagelet){
        content = content.replace(/\/\*PAGELET_ASYNCS_PLACEHOLDER:\S+?\*\//, function(){
            return "{!!str_replace('\\\\', '', substr(json_encode($PAGELET_ASYNCS), 1, -1))!!}";
        });
    }

    return content;
};