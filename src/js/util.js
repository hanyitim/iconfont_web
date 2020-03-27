function getLink(){
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type='text/css';
    document.head.append(link);
    return link;
}
let link = getLink();
export function targgerCss(href){
    link.href = href;
}

export function translace16to10(str){
    let code = str.replace(/\\/g,''),
        list = code.split(''),
        length = list.length,
        group = {
            'a':10,
            'b':11,
            'c':12,
            'd':13,
            'e':14,
            'f':15
        },
        result = 0;
    list.forEach((item,index)=>{
        result += parseInt(group[item] || item) * Math.pow(16,length-1-index);
    });
    return result;
}