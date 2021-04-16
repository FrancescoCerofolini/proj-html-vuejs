var app = new Vue({
    el: '#app',
    data: {
        logo:'img/dark-logo.png',
        menuNavbar:['Home' , 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
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

        container7BoxesEvent: [
            {
                place: 'Texas, US',
                description: 'Storytelling Workshop',
                dateDay: '22',
                dateMonth: 'NOV'
            },
            {
                place: 'New York, US',
                description: 'Painting Art Contest 2020',
                dateDay: '10',
                dateMonth: 'OCT'
            },
            {
                place: 'Hamburg, Germany',
                description: 'International Art Fair 2020',
                dateDay: '23',
                dateMonth: 'NOV'
            },
            {
                place: 'Illinois, US',
                description: 'Street Performance: Call for Artist',
                dateDay: '15',
                dateMonth: 'DEC'
            },
            {
                place: 'Illinois, US',
                description: 'Consumer Food Safety Education Conference',
                dateDay: '22',
                dateMonth: 'JUL'
            },
            {
                place: 'Dubai',
                description: 'How meditation improve your mental health?',
                dateDay: '12',
                dateMonth: 'AUG'
            }
        ],

        


    },
    methods: {

    },
});

Vue.config.devtools = true 