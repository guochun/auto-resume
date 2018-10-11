;(function(){
    var code = document.getElementById('code')
    var codeStyle = document.getElementById('codeStyle')
    var interval = 10
    var delay = 10
    var writeStyleCode = writeCode(code,codeStyle,styleCodeData,Prism.languages.css,'')

    function writeCode(el,style,data,prismLang,result) {
        var count = 0
        var timer
        return function(delay,interval) {
            return new Promise(function(resolve, reject){
                timer = setTimeout(function write() {
                    if(count >= data.length) {
                        clearTimeout(timer)
                        resolve(result)
                        return
                    }
                    count ++
                    result = result + data.substring(count - 1, count)
                    el.innerHTML = prismLang == null ? result : Prism.highlight(result,prismLang)
                    style && (codeStyle.innerHTML = result);
                    el.scrollTop = el.scrollHeight;
                    timer = setTimeout(write,interval)
        
                },delay)
            })       
        }
       
    }

    writeStyleCode(delay,interval).then((result)=>{
        var papper = document.createElement('div')
        papper.id= 'padder'
        var content = document.createElement('pre')
        content.className = 'content'
        papper.appendChild(content)
        document.body.appendChild(papper)
        var writePapperCode = writeCode(content,null, mkCodeData,null,'')
        return writePapperCode(delay,interval)
    })

})();