window.addEventListener('scroll', () => {
    if (window.pageYOffset > 90) {
        document.getElementById('nav_mother').classList.add('nav_mother_scroll')
    }
    else {
        document.getElementById('nav_mother').classList.remove('nav_mother_scroll')
    }
})




const catHandler = (id) => {

    document.getElementById(`cat_${id}`).classList.remove('d-none');
    document.getElementById(`cat${id}`).classList.add('active_cat_btn');
    for (let i = 1; i < 6; ++i) {
        if (i != id) {
            document.getElementById(`cat_${i}`).classList.add('d-none');
            document.getElementById(`cat${i}`).classList.remove('active_cat_btn');
        }
    }
}

document.getElementById('cat1').addEventListener('click', () => {
    catHandler(1);
})

document.getElementById('cat2').addEventListener('click', () => {
    catHandler(2);
})

document.getElementById('cat3').addEventListener('click', () => {
    catHandler(3);
})

document.getElementById('cat4').addEventListener('click', () => {
    catHandler(4);
})

document.getElementById('cat5').addEventListener('click', () => {
    catHandler(5);
})