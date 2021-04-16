var app = new Vue({
    el: '#app',
    data: {
        logo:'img/dark-logo.png',
        menuNavbar:['Home' , 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        languageSelected: 'English',
        options: [
            {text: 'English', value: 'English' },
            {text: 'Italiano', value: 'Italiano' },
        ],
        icon1:'img/home-5-image-box-01.png',
        icon2:'img/home-5-image-box-02.png',
        icon3:'img/home-5-image-box-03.png',
        icon4:'img/home-5-image-box-04.png',
        aboutUsImg:'img/about-us-03-image-01.png',
        container4Boxes:[
            {
                img:'-01',
                price: '$40.00',
                description: 'Learning to Write as a Professional Author',
                lessons: '20',
                students : '50',
                author: 'Blanche Fields',
                avatar: '-01',

            },
            {
                img:'-02',
                price: 'Free',
                description: 'Customer-centric Info-Tech Strategies',
                lessons: '24',
                students : '769',
                author: 'Maggie Strickland',
                avatar: '-02',
            },
            {
                img:'-03',
                price: '$40.00',
                description: 'Open Programming Courses for Everyone Python',
                lessons: '17',
                students : '62',
                author: 'Maggie Strickland',
                avatar: '-02',
            },
            {
                img:'-04',
                price: '$26.00',
                description: 'Academic Listening and Note-taking',
                lessons: '14',
                students : '67',
                author: 'Blanche Fields',
                avatar: '-01',
            },
            {
                img:'-05',
                price: '$39.00',
                description: 'Master jQuery in a Short Period of Time',
                lessons: '6',
                students : '51',
                author: 'Blanche Fields',
                avatar: '-01',
            },
            {
                img:'-06',
                price: '$59.00',
                description: 'Introduction to Javascript for Beginners',
                lessons: '14',
                students : '76',
                author: 'Blanche Fields',
                avatar: '-01',
            }
        ],
        


    },
    methods: {

    },
});

Vue.config.devtools = true 