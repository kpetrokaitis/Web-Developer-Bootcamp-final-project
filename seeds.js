var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var seeds = [
    {
        name: "Campsite", 
        image: "https://australia.businessesforsale.com/australian/static/articleimage?articleId=12982&name=image2.jpg",
        price: "100",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Shoreline Campsite", 
        image: "https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/HowToSetUpACampsite1.jpg",
        price: "10",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Wisconsin Nationals", 
        image: "https://dnr.wi.gov/images/news/2018/20180918_familycampgroundparks.jpg",
        price: "145",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "CastleConell Campsite", 
        image: "https://www.limerick.ie/sites/default/files/styles/hero_image/public/media/images/2019-01/Castleconnell%20Campsite%20810x456.jpg?itok=zBRpaYiV",
        price: "90",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Waterfall's Campsite", 
        image: "https://mitadmissions.org/wp-content/uploads/2013/07/P1030843.jpg",
        price: "84",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Northern Land Campsite", 
        image: "https://9c6177901f4388e3887b-66fdad557a241ac6538c4d24b420ed08.ssl.cf1.rackcdn.com/Skoal_Camper-with-fire-at-mountain-campsite.jpg",
        price: "180",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Skyfall's Rest", 
        image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg",
        price: "100",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Cloud's Mountain", 
        image: "https://www.romanticasheville.com/sites/default/files/images/basic_page/camping.jpg",
        price: "70",
        location: "Kaunas",
        lat: 54.896870,
        lng: 23.892429,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        price: "15",
        location: "Kalnujai",
        lat: 55.326440,
        lng: 23.088240,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        price: "45",
        location: "Vilnius",
        lat: 54.687157,
        lng: 25.279652,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: "5cc8036dc0284a0c88a788ee",
            username: "test"
        }
    }
];

async function seedDB(){
    try{
    await Campground.remove({});
    console.log("campgrounds removed");
    await Comment.remove({});
    console.log("comments removed");
    for(const seed of seeds) {
         let campground = await Campground.create(seed);
         console.log("campground created");
         let comment = await Comment.create(
            {
                text: "This place is great, but I wish there was internet",
                author: {
                    id: "5cc83bbb9b58950da3ece667",
                    username: "Homer"
                }
            }
    );
        console.log("comment created");
        campground.comments.push(comment);
        campground.save();
        console.log("comment added to campground");
        }
    }catch(err) {
        console.log(err);
    }
}

module.exports = seedDB;