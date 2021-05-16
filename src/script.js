(function(document){
    document.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', function(e){
            if(this.hash !== ''){
                e.preventDefault();
                const hash = this.hash.replace('#', '');
                const target = document.getElementById(hash);
                window.scroll({
                    top: target.offsetTop - 10, 
                    behavior: 'smooth'
                });
                //window.location.hash = hash;
            }
        })
    })

    const capitoli = document.querySelectorAll('h2');
    const navItems = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function(){
        let current = '';
        capitoli.forEach(capitolo => {
            const capitoloTop = capitolo.offsetTop - 100;
            if(this.pageYOffset > capitoloTop){
                current = capitolo.getAttribute('id');
            }
        });
        
        navItems.forEach(item => item.classList.remove('active'));
        if(current){
            document.getElementById(`n_${current}`).classList.add('active');
        }
    });

})(document);