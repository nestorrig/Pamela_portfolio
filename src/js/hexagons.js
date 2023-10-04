const servicesItems = document.querySelectorAll('.services__item')
const servicesBox = document.querySelector('.services__box')

window.addEventListener('resize', renderizeHegagonHeight)
function renderizeHegagonHeight() {
    servicesItems.forEach((item, i) => { 
        const width = item.clientWidth
        const height = width * 0.86
        item.style.height = height + 'px' 
        restartValues()
        
        console.log(i);
        if (window.innerWidth >= 600) {
            console.log('tablet');
            if (i % 2 !== 0) {
                item.style.top = height/1.8 +'px'
                item.style.left = -(width/10) +'px'
            } else {
                item.style.left = width/10 +'px'
            }
        }
        if (window.innerWidth >= 840) {
            restartValues()
            servicesBox.style.left = width/10 +'px'
            if (i % 3 === 1) {
                item.style.top = height/1.8 +'px'
                item.style.left = -(width/10) +'px'
            } else if (i % 3 === 2) {
                console.log('derecha');
                item.style.left = -(width/5) +'px'
            }
        }
        if (window.innerWidth >= 1136) {
            restartValues()
            servicesBox.style.left = -(width/7) +'px'
            if (i === 1) {
                item.style.top = height/1.8 +'px'
                item.style.left = -(width/6) +'px'
            }  else if (i === 2) {
                item.style.left = -(width/3) +'px'
            } else if (i === 3) {
                item.style.top = height/1.8 +'px'
                item.style.left = -(width/2) +'px'  
            } else if (i === 4) {
                item.style.right = -(width/3) +'px'
                item.style.left = (width/3) +'px'  
                item.style.gridArea = '1/4/2/5'
                item.style.position = 'absolute'
            } else if (i === 5) {
                item.style.gridArea = '2/3/3/4'
                item.style.left = -(width/3) +'px'  
            }
        }
        // Reseteamos los valores
        function restartValues() {
            item.style.gridArea = 'auto'
            item.style.position = 'relative'
            item.style.top = 0
            item.style.left = 0
            item.style.right = 0
            servicesBox.style.left = 0
        }
    });
}
renderizeHegagonHeight()