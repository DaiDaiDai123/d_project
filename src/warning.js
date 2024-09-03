
if (window.confirm("The contents in the website may make you feel dizzy and nauseous. Do you wish to preceed?"));
else {
    window.location.href = 'about:home';
}
if (window.screen.width < 1300) {
    if (window.confirm("Your device width is not suitable for this website which may results in bad experiences. Do you wish to preceed?")){

    }
    else {
        window.location.href = 'about:home';
    }
}