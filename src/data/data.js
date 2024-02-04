export const navbar = [
    {
        "title": "Home",
        "link": "/",
        "dropdown": false
    },
    {
        "title": "About",
        "link": "/about",
        "dropdown": false
    },
    {
        "title": "Gallery",
        "link": "/gallery",
        "dropdown": false
    },
    {
        "title": "Blog",
        "link": "/blog",
        "dropdown": {
            "title": "Blog Single",
            "link": "/blog-single"
        }
    },
    {
        "title": "Contact",
        "link": "/contact",
        "dropdown": false
    },
]

export const cardData = [
    {
        "title":  "Wedding",
        "img": "/img/slider/slider1.jpg"
    },
    {
        "title":  "Marco",
        "img": "/img/slider/slider2.jpg"
    },
    {
        "title":  "Summer",
        "img": "/img/slider/slider3.jpg"
    },
    {
        "title":  "Marco",
        "img": "/img/slider/slider2.jpg"
    },
    {
        "title":  "Summer",
        "img": "/img/slider/slider3.jpg"
    }
]

export const visualParts = [
    {
        label: "Photoshop",
        percentage: 90,
    },
    {
        label: "Design",
        percentage: 70,
    },
    {
        label: "Coloring",
        percentage: 50,
    },
    {
        label: "Printing",
        percentage: 40,
    }
]

export const aboutDetails = {
    "title": "Lorem Ipsum",
    "paragraph": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since.",
    "date": "January 4, 2024",
    "author": "Rafig",
    "img": "/img/about/About.jpg"
}

export const filterData = [
    {
        id: 1,
        image: "/img/gallery/Gallery2.jpg",
        title: "Beauty Female",
        category: ["all", "fashion", "love story"]
    },
    {
        id: 2,
        image: "/img/gallery/Gallery4.jpg",
        title: "Magic Shine",
        category: ["all", "fashion"]
    },
    {
        id: 3,
        image: "/img/gallery/Gallery6.jpg",
        title: "Fashion Girl",
        category: ["all", "fashion"]
    },
    {
        id: 4,
        image: "/img/gallery/Gallery1.jpg",
        title: "Street Photography",
        category: ["all", "lifestyle", "love story", "portraits"]
    },
    {
        id: 5,
        image: "/img/gallery/Gallery7.jpg",
        title: "Outdoor Basketball",
        category: ["all", "lifestyle"]
    },
    {
        id: 6,
        image: "/img/gallery/Gallery8.jpg",
        title: "Healthy Lifestyle",
        category: ["all", "lifestyle", "nature"]
    },
    {
        id: 7,
        image: "/img/gallery/Gallery3.jpg",
        title: "Healthy Lifestyle",
        category: ["all", "nature", "portraits"]
    },
    {
        id: 8,
        image: "/img/gallery/Gallery5.jpg",
        title: "Healthy Lifestyle",
        category: ["all", "nature", "portraits"]
    },
    {
        id: 9,
        image: "/img/gallery/Gallery9.jpg",
        title: "Christmas Lights",
        category: ["all", "love story"]
    }
];

export const filterMenu = [
    {
        id: 1,
        name: "all"
    },
    {
        id: 2,
        name: "fashion"
    },
    {
        id: 3,
        name: "lifestyle"
    },
    {
        id: 4,
        name: "nature"
    },
    {
        id: 5,
        name: "love story"
    },
    {
        id: 6,
        name: "portraits"
    },
];

export const blogCard = [
    {
        "image": "/img/blog/Blog-1.jpg",
        "title": "Lorem ipsum",
        "date": "January 4, 2024",
        "author": "Rafig",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since."
    },
    {
        "image": "/img/blog/Blog-2.jpg",
        "title": "Lorem ipsum",
        "date": "January 4, 2024",
        "author": "Rafig",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since."
    },
    {
        "image": "/img/blog/Blog-3.jpg",
        "title": "Lorem ipsum",
        "date": "January 4, 2024",
        "author": "Rafig",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since."
    },
    {
        "image": "/img/blog/Blog-4.jpg",
        "title": "Lorem ipsum",
        "date": "January 4, 2024",
        "author": "Rafig",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since."
    }
];

export const blogSingle = {
    "image": "/img/blog/Blog-inside.jpg",
    "title": "Lorem ipsum",
    "date": "January 4, 2024",
    "author": "Rafig",
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry's standard dummy text ever since.",
    "tags": ["wedding", "nature", "sunset", "sky"],
    "input1": "name",
    "input2": "email",
    "input3": "your comment",
    "submit": "send message"
}

export const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const contact = {
    "phone": "+1 123 456 1234",
    "email": "info@company.com",
    "address": "4321 California St, San Francisco, CA 12345",
    "input1": "name",
    "input2": "email",
    "input3": "subject",
    "input4": "message",
    "submit": "send message"
}