const content = document.querySelector('#inserir')
const BtnPronto = document.querySelector('#BtnPronto')
const divItens = document.querySelector('.itens')
const Options = document.querySelector('.Options')

BtnPronto.addEventListener('click', AddTarefa)

divItens.addEventListener('click', verificar)

Options.addEventListener('change', filter)

function criaElementos(contentValor){
    var div = document.createElement('div')
    div.classList.add('tarefas')
    var ul = document.createElement('ul')
    ul.classList.add('Tarefas-lista')
    div.appendChild(ul)
    var li = document.createElement('li')
    li.classList.add('tarefa')
    li.innerText = `${contentValor}`
    ul.appendChild(li)
    var btnEdit = document.createElement('button')
    btnEdit.classList.add('btnEdit')
    var btnRemove = document.createElement('button')
    btnRemove.classList.add('btnRemove')
    div.appendChild(btnEdit)
    div.appendChild(btnRemove)
    divItens.appendChild(div)
}
   
function AddTarefa(e){
    e.preventDefault();   
    var contentValor = content.value;
    criaElementos(contentValor)
    content.value = ''
    content.focus()  
}

function verificar(e){
    const item = e.target
    if(item.classList[0] === 'btnRemove') {
        remove(item)
        return
    }
    if (item.classList[0] === 'btnEdit'){
        complete(item)
        return
    }
}

function remove(i){
    const tudo = i.parentElement
    tudo.remove()
}

function complete(i){
    const tudo = i.parentElement
    tudo.classList.toggle('completo')
}

function filter(){
    var FiltroValor = Options.value
    var Divs = divItens.childNodes
    FilterAction(FiltroValor, Divs)
} 

function FilterAction(O, C){
    for(let i = 1; i < C.length; i++){
        C[i].style.display = 'flex'
        switch (O){
            case 'all':
                C[i].style.display = 'flex'
                break;
            case 'completed':
                if(C[i].classList.contains('completo')){
                    C[i].style.display ='flex'
                }else{
                    C[i].style.display = 'none'
                }
                break;
            case 'uncompleted':
                if(!C[i].classList.contains('completo')){
                    C[i].style.display == 'flex'
                }else{
                    C[i].style.display = 'none'
                }
                break;                
        }
    }
}     