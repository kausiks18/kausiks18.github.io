var FacebookAbout = /** @class */ (function () {
    function FacebookAbout(Name, birthday, age, school, college, city, mobile, email, working, work, familymembers, livesin, quotes, followed, freinds) {
        var _this = this;
        this.Name = Name;
        this.birthday = birthday;
        this.age = age;
        this.school = school;
        this.college = college;
        this.city = city;
        this.mobile = mobile;
        this.email = email;
        this.working = working;
        this.work = work;
        this.familymembers = familymembers;
        this.livesin = livesin;
        this.quotes = quotes;
        this.followed = followed;
        this.freinds = freinds;
        this.getname = function () {
            return _this.Name;
        };
        this.getmobile = function () {
            return _this.mobile;
        };
        this.getknowworking = function () {
            return _this.working;
        };
        this.getage = function () {
            return _this.age;
        };
        this.setLivesin = function (newLivesin) {
            _this.livesin = newLivesin;
        };
        this.getLivesin = function () {
            return _this.livesin;
        };
        this.setFollowed = function (newFollowed) {
            _this.followed = newFollowed;
        };
        this.getFollowed = function () {
            return _this.followed;
        };
        this.setFreinds = function (newFreinds) {
            _this.freinds = newFreinds;
        };
        this.getFreinds = function () {
            return _this.freinds;
        };
        this.setname = function (newname) {
            _this.Name = newname;
        };
        this.setMobile = function (newmobile) {
            _this.mobile = newmobile;
        };
        this.getMobile = function () {
            return _this.mobile;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.Name = Name;
        this.birthday = birthday;
        this.age = age;
        this.school = school;
        this.college = college;
        this.city = city;
        this.mobile = mobile;
        this.email = email;
        this.working = working;
        this.work = work;
        this.familymembers = familymembers;
        this.livesin = livesin;
        this.quotes = quotes;
        this.followed = followed;
        this.freinds = freinds;
    }
    return FacebookAbout;
}());
var fbabt = new FacebookAbout("Kausik Seal", new Date(1990, 12, 31), 27, "Union Institution", "Pondicherry University", "Pondicherry", 6778904567, "ks@gmail.com", true, "Software Engineer", 7, "Kolkata", "waiting for bullseye", 59, 863);
console.log(fbabt.getmobile());
console.log(fbabt.getname());
fbabt.setname("Sonai");
fbabt.setFreinds(890);
fbabt.setFollowed(45);
fbabt.setMobile(678903425);
fbabt.setLivesin("Bangalore");
console.log(fbabt.getFollowed());
console.log(fbabt.getage());
console.log(fbabt.getFreinds());
console.log(fbabt.getEmail());
console.log(fbabt.getknowworking());
console.log(fbabt.getLivesin());
