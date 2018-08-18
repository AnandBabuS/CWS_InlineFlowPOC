function PopupCenter(url, title, w, h) {

    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;

    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;

    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (927 / 2)) + (window.outerWidth - window.innerWidth) / 2 + dualScreenLeft;

    var top = ((height / 2) - (612 / 2)) + window.outerHeight - window.innerHeight + dualScreenTop;

    var arrowLeft, arrowTop;
    var cwswindowclosed = false;
    var crxUrl = "https://chrome.google.com/webstore/detail/getformsonline/haimhglnogbaajllmgggffgbedjfbcob";
    if (cwswindowclosed) {

        arrowLeft = ((width / 2) - (927 / 2)) + 927 + 20;

        arrowTop = (height / 2) - (612 / 2) + 10;

​

        if (arrowLeft + 285 > width) {

            var diff = arrowLeft - (width - 285);

            arrowLeft = width - 285;

            left -= diff;

        }

        if (arrowTop < 0) {

            var diff = -arrowTop;

            arrowTop = 0;

            top += diff;

        }

​

        oldCWSLeft = left;

        oldCWSTop = top;

    } else {

        if (typeof oldCWSLeft === 'undefined')

            oldCWSLeft = left;

        if (typeof oldCWSTop === 'undefined')

            oldCWSTop = top;

​

        arrowLeft = oldCWSLeft - (window.outerWidth - window.innerWidth) / 2 - dualScreenLeft + 927 + 20;

        arrowTop = oldCWSTop - (window.outerHeight - window.innerHeight) - dualScreenTop + 10;

    }

    var newWindow = window.open(crxUrl, 'window', 'scrollbars=no, width=927, height=612, top=' + top + ', left=' + left);

    try {

        newWindow.focus();

    } catch (e) {}

    cwswindowclosed = false;

​

    document.body.style.overflow = 'hidden';

    var b = document.createElement('div');

    b.style.position = 'fixed';

    b.style.left = '0';

    b.style.top = '0';

    b.style.width = '100%';

    b.style.height = '100%';

    b.style.backgroundColor = '#000000';

    b.style.opacity = '0.6';

​

    var a = document.createElement('div');

    a.style.backgroundImage = 'url(//ak.staticimgfarm.com/images/download/assist_21.gif)';

    a.style.width = '285px';

    a.style.height = '196px';

    a.style.position = 'fixed';

    a.style.left = arrowLeft + 'px';

    a.style.top = arrowTop + 'px';

    a.style.zIndex = 1;

    a.style.textAlign = 'center';

    a.style.boxSizing = 'border-box';

    a.style.fontFamily = '\'Open Sans\',arial,sans-serif';

​

    a.style.fontSize = '25px';

    a.style.padding = '55px 0 0 139px';

    a.innerHTML = 'Final Step!<br><span style="font-size:12px;margin-top:10px;display:block;line-height: 20px;">Click "ADD TO CHROME"<br> to finish.</span>';

​

    function onMouseDown() {

        try {

            document.body.removeChild(a);

        } catch (e) {}

        document.body.style.overflow = 'unset';

​

        (document.getElementById('DLP_btnExtensionRebuttalClose1') || document.getElementById('DLP_btnExtensionRebuttalClose')).onclick = function() {

            try {

                document.body.removeChild(b);

            } catch (e) {}

            window.removeEventListener("mousedown", onMouseDown);

            window.removeEventListener('resize', onMouseDown);

            (document.getElementById('DLP_dvExtensionRebuttal') || document.getElementById('DLP_dvCRX_rebuttal') || document.getElementById('cwsrebuttal')).style.display = 'none';

            c = clearInterval(c);

            try {

                document.getElementById('cwsrebuttal').style.display = 'none';

            } catch (e) {}

        }

        ;

​

        (document.getElementById('DLP_btnExtensionRebuttalAccept1') || document.getElementById('DLP_btnExtensionRebuttalAccept')).onclick = function() {

            var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;

            var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

            a.style.left = (oldCWSLeft - (window.outerWidth - window.innerWidth) / 2 - dualScreenLeft + 927 + 20) + 'px';

            a.style.top = (oldCWSTop - (window.outerHeight - window.innerHeight) - dualScreenTop + 10) + 'px';

​

            try {

                newWindow.focus();

            } catch (e) {}

            newWindow = window.open(crxUrl, 'window', 'scrollbars=no, width=927, height=612, top=' + top + ', left=' + left);

            cwswindowclosed = false;

            document.body.style.overflow = 'hidden';

            (document.getElementById('DLP_dvExtensionRebuttal') || document.getElementById('DLP_dvCRX_rebuttal') || document.getElementById('cwsrebuttal')).style.display = 'none';

            document.body.appendChild(a);

        }

        ;

​

        (document.getElementById('DLP_dvExtensionRebuttal') || document.getElementById('DLP_dvCRX_rebuttal') || document.getElementById('cwsrebuttal')).style.display = 'block';

        _Anemone.logEvent('Error', {

            errorCode: 'User cancelled install',

            errorType: 'splashPageDimmed'

        });

    }

​

    window.addEventListener("mousedown", onMouseDown);

    window.addEventListener('resize', onMouseDown);

​

    document.body.appendChild(a);

    document.body.appendChild(b);

​

    var c = setInterval(function() {
        if (newWindow.closed) {
            cwswindowclosed = true;
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener('resize', onMouseDown);
            c = clearInterval(c);
            try {
                document.body.removeChild(a);
            } catch (e) {}
            document.body.style.overflow = 'unset';
            (document.getElementById('DLP_btnExtensionRebuttalClose1') || document.getElementById('DLP_btnExtensionRebuttalClose')).onclick = function() {
                try {

                    document.body.removeChild(b);

                } catch (e) {}

                try {

                    document.getElementById('cwsrebuttal').style.display = 'none';

                } catch (e) {}

            }

            ;

            (document.getElementById('DLP_btnExtensionRebuttalAccept1') || document.getElementById('DLP_btnExtensionRebuttalAccept')).onclick = function() {

                try {

                    document.body.removeChild(b);

                } catch (e) {}

                PopupCenter();

            }

            ;

​

            (document.getElementById('DLP_dvExtensionRebuttal') || document.getElementById('DLP_dvCRX_rebuttal') || document.getElementById('cwsrebuttal')).style.display = 'block';

            _Anemone.logEvent('Error', {

                errorCode: 'User cancelled install',

                errorType: 'chromeStoreWindow'

            });

        }

​

    }, 200);
}
PopupCenter();