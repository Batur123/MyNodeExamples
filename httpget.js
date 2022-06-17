let GetReqHTTPURL = getURL();
let GetReqUserHTTPURL = getURL();
let URLHeader = { timeout: 10000,headers: { 'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20040614 Firefox/0.8' }  };

const PromiseBasedAxiosURL1 = axios.get(GetReqHTTPURL,URLHeader);
const PromiseBasedAxiosURL2 = axios.get(GetReqUserHTTPURL,URLHeader);
const XMLConvertHeaders = {ignoreComment: true, alwaysChildren: true, compact: true, trim: true, normalize: true, alwaysArray: true};

Promise.all([PromiseBasedAxiosURL1,PromiseBasedAxiosURL2]).then(response => {
        if(response[0].status !== 200) return ErrorHandling.Handle("#RV0Y002",'[0]!200');
        if(response[1].status !== 200) return ErrorHandling.Handle("#RV0Y003",'[1]!200');
        const ResponseOne = response[0];
        const ResponseTwo = response[1];
        //snip
    }).catch(function (error) {
        if (error.code === "HPE_INVALID_CONSTANT") {
            return ErrorHandling.Handle("#RV1Y002", error.code);
        }

        if (error.code === "ERR_UNESCAPED_CHARACTERS") {
            return ErrorHandling.Handle("#RV2Y003", error.code);
        }

        if (error.code === "ERR_SOCKET_BAD_PORT") {
            return ErrorHandling.Handle("#RV2Y004", error.code);
        }

        if (error.code === "ENOTFOUND") {
            return ErrorHandling.Handle("#RV2Y005", error.code);
        }

        if (typeof error.code === "undefined") {
            return ErrorHandling.Handle("#RV2Y006U", "Und");
        }

        ErrorHandling.Handle("RV2G007", error);
    });
