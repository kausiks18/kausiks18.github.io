var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Video = /** @class */ (function () {
    function Video(id, name, channel, like, dislike, description, publishDate, comment, tags, subscription, views, duration, shares) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getChannel = function () {
            return _this.getChannel;
        };
        this.getLike = function () {
            return _this.like;
        };
        this.getDislike = function () {
            return _this.dislike;
        };
        this.getChannelName = function () {
            return _this.channel;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getTags = function () {
            return _this.tags;
        };
        this.setComment = function (newcommnet) {
            _this.comment.push(newcommnet);
        };
        this.setLike = function (like) {
            _this.like = like;
        };
        this.setDislike = function (dislike) {
            _this.dislike = dislike;
        };
        this.setChannelName = function (newChannelName) {
            _this.channel = (newChannelName);
        };
        this.setTags = function (newTags) {
            _this.tags = newTags;
        };
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.like = like;
        this.dislike = dislike;
        this.description = description;
        this.publishDate = publishDate;
        this.comment = comment;
        this.tags = tags;
        this.subscription = subscription;
        this.views = views;
    } //end of constructor
    return Video;
}());
var objVideo = new Video("IJ6781256", "Raozana Naam Shabana", "Music Industry", 78, 89, "Music Industry", new Date(2018, 11, 17), ["Nice Video"], "Music", 35, 200);
console.log(objVideo.getName());
console.log(objVideo.getComment());
console.log(objVideo.getLike());
console.log(objVideo.getLike());
console.log(objVideo.getChannelName());
console.log(objVideo.getTags());
objVideo.setComment("User has no choice");
objVideo.setComment("Mindblowing");
var Utube = /** @class */ (function (_super) {
    __extends(Utube, _super);
    function Utube(id, name, channel, like, dislike, description, publishDate, comment, tags, subscription, views, duration, shares) {
        var _this = _super.call(this, id, name, channel, like, dislike, description, publishDate, comment, tags, subscription, views) || this;
        _this.getPublishDate = function () {
            var pubDate = _this.publishDate.getFullYear() + "/" + _this.publishDate.getMonth() + "/" + _this.publishDate.getDate();
            // return  this.getPublishDate.getDate();
            return pubDate;
        };
        _this.getViews = function () {
            return _this.views;
        };
        _this.setViews = function (newViews) {
            _this.views = newViews;
        };
        _this.getSubscription = function () {
            return _this.subscription;
        };
        _this.setSubscription = function (newSubscription) {
            _this.subscription = newSubscription;
        };
        return _this;
    }
    return Utube;
}(Video));
var objUtube = new Utube("Igh789Rte", "Harry Kitchen", "Blog & travel", 67, 34, "cooking related", new Date(2017, 7, 17), ["Thanks for sharing"], "harry|cooking|more", 45, 780);
console.log(objUtube.getPublishDate());
console.log(objUtube.getName());
objUtube.setViews(307);
objUtube.setSubscription(100);
console.log(objUtube.getViews());
console.log(objUtube.comment);
console.log(objUtube.getSubscription());
console.log(objUtube.getDescription());
