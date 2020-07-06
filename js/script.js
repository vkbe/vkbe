const darkmodeOptions = {
    bottom: '585px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#f1f1f1', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '', // default: ''
    autoMatchOsTheme: false // default: true
}

const darkmode = new Darkmode(darkmodeOptions);

darkmode.showWidget();