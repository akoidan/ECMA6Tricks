function findLove() {
    function goNext() {
        document.querySelector('.pagination__item--current').nextElementSibling.children[0].click();
        setTimeout(() => findLove(), 1000);
    }
    var i = 0;
    var f = document.querySelectorAll('.js-user-action-vote-yes:not(.is-pressed)');
    var f2 =document.querySelectorAll('.user-card-caption__like.is-active.js-like-icon');
    if (f.length) {
        console.log("Found", f.length, "elements, proceeding");
        f.forEach(a=>{
            (function(i) {
                setTimeout(()=>{
                    console.log("Click ", i, a);
                    a.click();
                    if (i == f.length - 1) {
                        setTimeout(()=>{
                            goNext();
                            
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
    } else if (f2.length) {
        goNext();
    } else {
        console.log("Scheduling find");
        setTimeout(() => findLove(), 1000);
    } 

}
findLove();
