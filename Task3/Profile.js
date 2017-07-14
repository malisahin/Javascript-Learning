

function urlObject() {
    this.domainUrl = "";
    this.securityUrl = "";
    this.uygulamaUrl = "";
}


var company1Test = new urlObject();
company1Test.domainUrl = "www.company1Test.domainUrl.com";
company1Test.securityUrl = "www.company1Test.security.com";
company1Test.uygulamaUrl = "www.company1Test.uygulama.com";

var company1Prod = new urlObject();
company1Prod.domainUrl = "www.company1Prod.domainUrl.com";
company1Prod.securityUrl = "www.company1Prod.security.com";
company1Prod.uygulamaUrl = "www.company1Prod.uygulama.com";

var company2Test = new urlObject();
company2Test.domainUrl = "www.company2Test.domainUrl.com";
company2Test.securityUrl = "www.company2Test.security.com";
company2Test.uygulamaUrl = "www.company2Test.uygulama.com";

var  company2Prod = new urlObject();
company2Prod.domainUrl = "www.company2Prod.domainUrl.com";
company2Prod.securityUrl = "www.company2Prod.security.com";
company2Prod.uygulamaUrl = "www.company2Prod.uygulama.com";

var company3Test = new urlObject();
company3Test.domainUrl = "www.company3Test.domainUrl.com";
company3Test.securityUrl = "www.company3Test.security.com";
company3Test.uygulamaUrl = "www.company3Test.uygulama.com";

var company3Prod = new urlObject();
company3Prod.domainUrl = "www.company3Prod.domainUrl.com";
company3Prod.securityUrl = "www.company3Prod.security.com";
company3Prod.uygulamaUrl = "www.company3Prod.uygulama.com";

var profil = {}

profil.__proto__ = company1Prod;

var uygulamaUrl = profil.uygulamaUrl;
var securityUrl = profil.securityUrl;
var domainUrl = profil.domainUrl;


