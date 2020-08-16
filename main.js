// TO DO
document.addEventListener('DOMContentLoaded',function(){
    let input = document.querySelector('#input')
    let addBtn = document.querySelector('#addBtn')
    let ul = document.querySelector('ul')
    let allLi = document.querySelectorAll('li')
    
    ul.addEventListener('mousedown',function(e){
        if (e.target.tagName === 'LI'){
            e.target.classList.toggle('checked')
            e.target.setAttribute('draggable','true')

            e.target.addEventListener('drag',function(e){
                let change = document.elementFromPoint(e.clientX,e.clientY)  
                // if (e.target != change && e.movementY <= 0){
                //     change.insertAdjacentElement('beforebegin', e.target )
                    // if (change.tagName ==='LI'){
                    //     change.insertAdjacentElement('beforebegin', e.target )
                    // }
                // }else if(e.target != change && e.movementY >= 0) {
                //     change.insertAdjacentElement('afterend',e.target)
                    // if (change.tagName==='LI'){
                    //     change.insertAdjacentElement('afterbegin',e.target)
                    // }
                // } 
                if( e.target !== change && document.querySelector('ul') === change.parentNode ){
                    if (e.target.nextSibling === change){
                        e.target.insertAdjacentElement('beforebegin', change)
                    }else{
                        e.target.insertAdjacentElement('afterend', change)

                    }
                }
                   
            
            })
        }else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()
        }
    })


    // 點擊 ＋ 長出li  先生成li 再生成span 把input的內容丟給li 
    // 把x丟給span 把close class 給span 
    // 把拖拉屬性給 li
    // 把監聽事件給 li 跟 span
    // 把span丟進li 把li丟進ul   最後清空input
    addBtn.addEventListener('click',function(e){
        // console.log(e.target)
        let newLi = document.createElement('li')
        let newSpan = document.createElement('span')
        let text = input.value
        newLi.textContent = text
        newSpan.textContent='x'
        newSpan.className = 'close'
        // newLi.setAttribute('draggable','true')

        // newLi.addEventListener('click',function(e){
        //     newLi.classList.toggle('checked')
        // })
        // newSpan.addEventListener('click',function(){
        //     newLi.remove()
        // })

        newLi.appendChild(newSpan)
        ul.appendChild(newLi)
        input.value = ""
    })

    // 對已存在的li下監聽事件
    // allLi.forEach(function(li){
        // li.setAttribute('draggable','true')
    //     li.addEventListener('click',function(){
    //         li.classList.toggle('checked')
    //     })
    // })
    // 對已存在的 x 下監聽事件去移除父層
    // let allX = document.querySelectorAll('.close')
    // allX.forEach(function(X){
    //     X.addEventListener('click',function(){
    //         X.parentElement.remove()
    //     })
    // })


    // 拖拉事件 
    // allLi.forEach(function(li){
    //     li.addEventListener('drag',function(e){
    //         console.log(e.target)
    //         console.log(document.elementFromPoint(e.clientX,e.clientY))
    //         let change = document.elementFromPoint(e.clientX,e.clientY)
            
    //         if (e.target != change && e.movementY <= 0){
    //             change.insertAdjacentElement('beforebegin',e.target)
    //         }else if(e.target != change && e.movementY >= 0) {
    //             change.insertAdjacentElement('afterbegin',e.target)
    //         }})
    //     // li.addEventListener('dragover',function(e){
    //     //     console.log(e.target)
    //     //     console.log(document.elementFromPoint(  e.clientX,  e.clientY  ) )
    //     // })
    // })
})

