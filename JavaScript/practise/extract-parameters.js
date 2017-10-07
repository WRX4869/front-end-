/*有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，将其按key-value形式返回到一个json结构中，如{a:'1', b:'2', c:'', d:'xxx', e:undefined}*/
function extractParameters(string) {
    let reg = /[?&](\w)(=)?([^&=])?/g;
    let get = new Object();
    while (match = reg.exec(string))
        if (match[2] === "=" && match[3] !== undefined) {
            get.name = match[1];
            get.number = match[3];
            //console.log(match[1] + ":" + "'" + match[3] + "'");
        } else if (match[2] === "=" && match[3] === undefined) {
            get.name = match[1];
            get.number = ' ';
            //console.log(match[1] + ":" + "' '");
        } else if (match[2] !== "=" && match[3] === undefined) {
            //console.log(match[1] + ":" + match[3]);
            get.name = match[1];
            get.number = 'undefined';
        }
    return 
} 