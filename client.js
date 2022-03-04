console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    console.log('so ready');

    $('.verdiPopUp').magnificPopup({
        items: [
            {
                src: 'https://vimeo.com/682577139',
                type: 'iframe'
            }
        ]
    })

    $('.pucciniPopUp').magnificPopup({
        items: [
            {
                src: 'https://www.youtube.com/watch?v=DAQEkGXrvyE',
                type: 'iframe'
            }
        ]
    })

    $('.rtLink').magnificPopup({
        items: [
            {
                src: 'https://vimeo.com/682663773',
                type: 'iframe'
            }
        ]
    })
    
}
