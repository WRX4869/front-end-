/*有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，将其按key-value形式返回到一个json结构中，如{a:'1', b:'2', c:'', d:'xxx', e:undefined}*/
function extractParameters(url) {
    let reg = /[?&](\w+)(=([^&=]*))?/g;
    let parameters = {};
    while (match = reg.exec(url)) {
        parameters[match[1]] = match[3]
    }
    return parameters;
} 
