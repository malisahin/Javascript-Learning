

function urlObject() {
    this.domainUrl = "";
    this.securityUrl = "";
    this.uygulamaUrl = "";
}


var emarTest = new urlObject();
emarTest.domainUrl = "www.emarTest.domainUrl.com";
emarTest.securityUrl = "www.emarTest.security.com";
emarTest.uygulamaUrl = "www.emarTest.uygulama.com";

var emarCanli = new urlObject();
emarCanli.domainUrl = "www.emarCanli.domainUrl.com";
emarCanli.securityUrl = "www.emarCanli.security.com";
emarCanli.uygulamaUrl = "www.emarCanli.uygulama.com";

var daikinTest = new urlObject();
daikinTest.domainUrl = "www.daikinTest.domainUrl.com";
daikinTest.securityUrl = "www.daikinTest.security.com";
daikinTest.uygulamaUrl = "www.daikinTest.uygulama.com";

var  daikinProd = new urlObject();
daikinProd.domainUrl = "www.daikinProd.domainUrl.com";
daikinProd.securityUrl = "www.daikinProd.security.com";
daikinProd.uygulamaUrl = "www.daikinProd.uygulama.com";

var baymakTest = new urlObject();
baymakTest.domainUrl = "www.baymakTest.domainUrl.com";
baymakTest.securityUrl = "www.baymakTest.security.com";
baymakTest.uygulamaUrl = "www.baymakTest.uygulama.com";

var baymakProd = new urlObject();
baymakProd.domainUrl = "www.baymakProd.domainUrl.com";
baymakProd.securityUrl = "www.baymakProd.security.com";
baymakProd.uygulamaUrl = "www.baymakProd.uygulama.com";

var profil = {}

profil.__proto__ = emarCanli;

var uygulamaUrl = profil.uygulamaUrl;
var securityUrl = profil.securityUrl;
var domainUrl = profil.domainUrl;
