export function isInViewport() {
    let titles = document.querySelectorAll('h1')
    titles = [...titles]

    const hide = () => titles.map(h1 => h1.style = `opacity:0`)
    
    const show = element => element.style = `opacity:1`

    function center(element){
        titles.map(h1 => h1.style = `
                    position: fixed;
                    top:16.5vh;
                    left: 50%;
                    transform: translateX(-50%)
                `)
    }

    function isHidden(element){
        if(element.style.opacity == 0){
                return true
        }
    }

    function isOnTheScreen(element){
        if (element.top >= 0 &&
            element.left >= 0 &&
            element.bottom <= (window.innerHeight ||
                document.documentElement.clientHeight) &&
            element.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                return true
        }
    }

    center()
    
    hide()

    titles.forEach(title => {
        const element = title.getBoundingClientRect()
        if (isOnTheScreen(element)) {
            setTimeout(() => {
                if(isHidden) return show(title)
            }, 150);
        }
    }) 
}
   