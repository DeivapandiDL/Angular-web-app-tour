export function TourInit(arrList:any){
    let arr:any = arrList;
    
    const tourInit = () => {
        let el = document.createElement('div');
        el.classList.add('app-tour-container');
        el?.insertAdjacentHTML(
            'beforeend',
            '<div class="appTourTitle"><h4></h4><button class="tourClose">X</button></div><div class="tourContent"></div><div><button id="prevTourBtn" style="margin-right:10px">Prev</button><button class="nextTourBtn">Next</button></div>'
        );
        document.body.appendChild(el);

        let tourClose = document.querySelector('.app-tour-container .tourClose');
        let tourNext = document.querySelector('.app-tour-container .nextTourBtn');
        let tourprev = document.querySelector('.app-tour-container #prevTourBtn');

        if (tourClose) tourClose.addEventListener('click', getCloseBtnClick);
        if (tourNext) {
            tourNext.addEventListener('click', getNextBtnClick);
            confirmNavExist(0);
            predicButton();
        }
        if (tourprev) {
            tourprev.addEventListener('click', getPrevBtnClick);
        }
    };
    let tempPos:any;
    let arrCount = 0;
    const getNextBtnClick = () => {
        if (tempPos == 'done') {
            getCloseBtnClick();
        } else {
            tempPos = 'next';
            console.log(arr[arrCount].targetId);
            arrCount = arrCount + 1;
            predicButton();
            confirmNavExist(arrCount);
        }
    };
    const confirmNavExist = (count:any) => {
        if ((arr[count].navid && arr[count].navid != '') || (arr[count].navPath && arr[count].navPath != '')) {
            if (arr[count].navid && arr[count].navid != '') {
                let navClick = document.getElementById(arr[count].navid);
                if (navClick) navClick.click();
            } else if (arr[count].navPath && arr[count].navPath != '') {
                // navigate(arr[count].navPath);
            }
            new Promise((resolve, rejects) => {
                let inverval = arr[count].navTimer ? arr[count].navTimer / 100 : 500;
                let proInterval = setInterval(() => {
                    let doc = document.getElementById(arr[count].targetId);
                    inverval = inverval * 100;
                    if (doc) {
                        resolve(setDivScrollPosition(count));
                        clearInterval(proInterval);
                    } else if (inverval == arr[count].navTimer) {
                        clearInterval(proInterval);
                        rejects(getNextBtnClick());
                    }
                }, inverval);
            });
        } else {
            setDivScrollPosition(count);
        }
    };
    const setDivScrollPosition = (count:any) => {
        document.querySelector('.app-tour-container')?.classList.remove('tourFadeIn');
        let elem = document.getElementById(arr[count].targetId);
        if (elem) {
            let offHeight:any;
            var clip:any;
            const prom = new Promise((resolve) => {
                setTimeout(() => {
                    offHeight = elem?.offsetHeight;
                    clip = { top: elem?.offsetTop, left: elem?.offsetLeft };
                    let offSetTop = elem ? elem.offsetTop - 150 : null;
                    resolve(scrollToSmoothly(offSetTop, 300));
                });
            });
            prom.then(function (value) {
                setTimeout(() => {
                    getposition(clip, offHeight, arr[arrCount]);
                }, 1000);
            });
        } else {
            switch (tempPos) {
                case 'done':
                    getCloseBtnClick();
                    break;
                case 'next':
                    getNextBtnClick();
                    break;
                case 'prev':
                    getPrevBtnClick();
            }
        }
    };

    const getposition = (clip:any, offHeight:any, arr:any) => {
        let doc = document.querySelector('.app-tour-container');
        let title = doc?.querySelector('.appTourTitle h4');
        let content = doc?.querySelector('.tourContent');
        if (doc) {
            doc?.classList.add('tourFadeIn');
            if (title) title.innerHTML = arr.title;
            if (content) content.innerHTML = arr.content;

            console.log('top ',clip.top);
            console.log('left ',clip.left);
            console.log('popup height ',doc.clientHeight)
            console.log('window height ',window.innerHeight);

            doc.setAttribute('style', 'top:' + (clip.top + offHeight + 10) + 'px;left:' + clip.left + 'px');
        }
    };

    const getPrevBtnClick = () => {
        tempPos = 'prev';
        arrCount = arrCount - 1;
        predicButton();
        confirmNavExist(arrCount);
    };

    const predicButton = () => {
        var prevDone = document.querySelector('#prevTourBtn');
        if (arrCount == 0) {
            if (prevDone) prevDone?.setAttribute('style', 'display:none');
        } else {
            prevDone?.setAttribute('style', 'display:inline;margin-right:10px');
        }
        if (arrCount == arr.length - 1) {
            let nextDone = document.querySelector('.nextTourBtn');
            if (nextDone) nextDone.innerHTML = 'Done';
            tempPos = 'done';
        } else {
            let nextDone = document.querySelector('.nextTourBtn');
            if (nextDone) nextDone.innerHTML = 'Next';
        }
    };

    const getCloseBtnClick = () => {
        // if (typeof onSendData === 'function') {
        //     onSendData('Tested fine');
        // } else {
        //     console.error('onSendData is not a function');
        // }
        document.querySelector('.app-tour-container')?.remove();
    };

    const scrollToSmoothly = (pos:any, time:any) => {
        var currentPos = window.pageYOffset;
        let start:any = null;
        if (time == null) time = 300;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            var progress = currentTime - start;
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
            }
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        });
    };
    if(arrList && arrList.length > 0){
        tourInit()
    }
}