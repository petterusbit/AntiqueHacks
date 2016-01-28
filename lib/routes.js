
Router.configure({
   LayoutTemplate: 'main' 
});

Router.route('/', function() {
    this.render('takePhoto');
    this.layout('main');
});


Router.route('/sendimage', function() {
    this.render('sendimage');
    this.layout('main');
});


Router.route('/register', function() {
    this.render('register');
    this.layout('main');
});


Router.route('/login', function() {
    this.render('login');
    this.layout('main');
});

