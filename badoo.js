function findLove() {
    var i = 0;
    var f = document.querySelectorAll('.js-user-action-vote-yes:not(.is-pressed)');
    if (f.length) {
        console.log("Found", f.length, "elements, proceeding");
        f.forEach(a=>{
            (function(i) {
                setTimeout(()=>{
                    console.log("Click ", i, a);
                    a.click();
                    if (i == f.length - 1) {
                        setTimeout(()=>{
                            document.querySelector('.pagination__item--current').nextElementSibling.children[0].click();
                            setTimeout(() => findLove(), 1000);
                        }
                        , 1000)
                    }
                }
                , i * 500);
            }
            )(i)
            i++;
        }
        );
    } else {
        console.log("Scheduling find");
        setTimeout(() => findLove(), 1000);
    } 

}
findLove();
